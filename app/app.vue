<script setup lang="ts">
const { data: settings } = await useSiteSettings()

useHead({
  titleTemplate: title => title
    ? `${title} · ${settings.value?.company.name}`
    : settings.value?.company.name ?? ''
})
</script>

<template>
  <UApp>
    <AppHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
