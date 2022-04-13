<script lang="ts" setup>
const { t } = useI18n()

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: t('app.title'),
  meta: [
    { name: 'description', content: t('app.description') },
  ],
})
</script>

<template>
  <RouterView />
</template>
