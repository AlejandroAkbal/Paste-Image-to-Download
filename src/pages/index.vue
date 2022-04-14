<script lang="ts" setup>
import { pasteClickListener, pasteKeyboardListener } from '~/scripts/paste'

document.body.addEventListener('paste', pasteKeyboardListener)

const { t } = useI18n()
</script>

<template>
  <div class="p-6">
    <!-- Download box -->
    <button
      class="w-full h-100vh max-h-70vh border-3 border-gray-400 border-dashed rounded-lg p-5 flex flex-col outline-none
      hover:(border-gray-600 dark:border-gray-200)
      focus-visible:(border-gray-600 dark:border-gray-200)"
      type="button"
      @click="pasteClickListener"
    >
      <div class="flex-auto grid items-center">
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-center text-4xl uppercase font-semibold">
            {{ t('index.title') }}
          </h1>

          <div class="block i-carbon-document-download text-5xl" />
        </div>
      </div>

      <h2 class="text-center text-sm italic font-semibold">
        {{ t('index.subtitle') }}
      </h2>
    </button>
  </div>

  <div class="px-6">
    <p class="text-center">
      Use the <code class="text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-fuchsia-600">CTRL+V</code>
      key combination to paste an image from your clipboard.
    </p>
  </div>
</template>
