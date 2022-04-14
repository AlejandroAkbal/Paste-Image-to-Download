<script lang="ts" setup>
import { toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="mt-6 text-center text-xl">
    <RouterLink :title="t('button.home')" class="icon-btn mx-2" to="/">
      <div class="i-carbon-campsite" />
    </RouterLink>

    <RouterLink :title="t('button.about')" class="icon-btn mx-2" to="/about">
      <div class="i-carbon-dicom-overlay" />
    </RouterLink>

    <div class="mt-2">
      <button :title="t('button.toggle_dark')" class="icon-btn mx-2" type="button" @click="toggleDark()">
        <div class="i-carbon-sun dark:i-carbon-moon" />
      </button>

      <a
        class="icon-btn mx-2" href="https://github.com/AlejandroAkbal/Paste-Image-to-Download" rel="noreferrer" target="_blank" title="GitHub"
      >
        <div class="i-carbon-logo-github" />
      </a>

      <button :title="t('button.toggle_langs')" class="icon-btn mx-2" type="button" @click="toggleLocales">
        <div class="i-carbon-language" />
      </button>
    </div>
  </nav>
</template>
