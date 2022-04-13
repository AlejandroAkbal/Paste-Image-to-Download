'use strict'

export function pasteListener(event: ClipboardEvent) {
  const clipboardData = event.clipboardData

  if (!clipboardData) {
    console.info('There is no clipboard data')
    return
  }

  const clipboardItems = clipboardData.items

  // @ts-expect-error it already has a type
  for (const item: DataTransferItem of clipboardItems) {
    //
    let parsedItem: File

    const itemType = item.type.split('/')[0]

    switch (itemType) {
      case 'image':
        parsedItem = item.getAsFile()
        break

      default:
        console.warn('Unknown clipboard item type: ', item.type)
        continue
    }

    downloadFile(parsedItem)
  }
}

export function downloadFile(file: File) {
  const url = URL.createObjectURL(file)

  const link = document.createElement('a')
  link.href = url
  link.download = file.name

  link.click()
  link.remove()

  URL.revokeObjectURL(url)
}
