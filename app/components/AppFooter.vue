<script setup lang="ts">
const { data: settings } = await useSiteSettings()
const year = new Date().getFullYear()
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        © {{ year }} {{ settings?.company.name }} — {{ settings?.company.tagline }}
      </p>
    </template>

    <p class="text-sm text-muted">
      {{ settings?.contacts.email }} · {{ settings?.contacts.phone }}
    </p>

    <template #right>
      <UButton
        v-for="social in settings?.socials"
        :key="social.url"
        :icon="social.icon"
        :to="social.url"
        :aria-label="social.label"
        target="_blank"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
