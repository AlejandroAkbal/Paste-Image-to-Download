<script lang="ts" setup>
import { pasteListener } from '~/scripts/paste'

document.body.addEventListener('paste', pasteListener)
</script>

<template>
  <div class="p-6">
    <!-- Paste box -->
    <div
      class="border-3 border-gray-400 border-dashed rounded-lg p-5 min-h-70vh grid items-center"
      hover="border-gray-600 dark:border-gray-200"
    >
      <div class="flex flex-col items-center gap-4">
        <h1 class="text-center text-4xl uppercase font-semibold">
          Paste image to download
        </h1>

        <icon class="block i-carbon-document-download text-5xl" />
      </div>
    </div>
  </div>

  <div class="px-6">
    <p class="text-center">
      Use the <code class="text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-fuchsia-600">CTRL+V</code> key combination to paste an image from
      your clipboard.
    </p>
  </div>
</template>
