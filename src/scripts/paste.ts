'use strict'

export async function pasteClickListener(event: Event) {
  event.preventDefault()
  event.stopPropagation()

  if (!navigator?.clipboard?.read) {
    console.info('Clipboard read is not supported.')
    return
  }

  const clipboardItems = await navigator.clipboard.read()

  if (!clipboardItems) {
    console.info('There is no clipboard data')
    return
  }

  await parseClipboardItems(clipboardItems)
}

async function parseClipboardItems(clipboardItems: ClipboardItem[]) {
  for (const clipboardItem of clipboardItems) {
    //
    for (const itemType of clipboardItem.types) {
      //
      let parsedItem: Blob

      const itemGenericType = itemType.split('/')[0]

      switch (itemGenericType) {
        case 'image':
          parsedItem = await clipboardItem.getType(itemType)
          break

        default:
          console.warn('Unknown clipboard item type: ', itemType)
          continue
      }

      downloadBlob(parsedItem)
    }
  }
}

export function pasteKeyboardListener(event: ClipboardEvent) {
  event.preventDefault()
  event.stopPropagation()

  const clipboardData = event.clipboardData

  if (!clipboardData) {
    console.info('There is no clipboard data')
    return
  }

  const clipboardItems = clipboardData.items

  parseDataTransferItemList(clipboardItems)
}

function parseDataTransferItemList(clipboardItems: DataTransferItemList) {
  // @ts-expect-error it already has a type
  for (const item: DataTransferItem of clipboardItems) {
    //
    let parsedItem: File

    const itemGenericType = item.type.split('/')[0]

    switch (itemGenericType) {
      case 'image':
        parsedItem = item.getAsFile()
        break

      default:
        console.warn('Unknown clipboard item type: ', item.type)
        continue
    }

    downloadBlob(parsedItem, parsedItem.name)
  }
}

export function downloadBlob(blob: Blob, fileName = 'image') {
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = fileName

  link.click()
  link.remove()

  URL.revokeObjectURL(url)
}
