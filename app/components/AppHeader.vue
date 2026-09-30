<script setup lang="ts">
const { data: settings } = await useSiteSettings()
const route = useRoute()

const items = computed(() => (settings.value?.navigation ?? []).map(item => ({
  label: item.label,
  to: item.to,
  active: item.to === '/' ? route.path === '/' : route.path.startsWith(item.to)
})))
</script>

<template>
  <UHeader :title="settings?.company.name">
    <template #title>
      <span class="flex items-center gap-2 font-bold text-lg">
        <UIcon name="i-lucide-sunrise" class="size-6 text-primary" />
        {{ settings?.company.name }}
      </span>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UButton
        v-if="settings?.contacts.phone"
        :label="settings.contacts.phone"
        :to="`tel:${settings.contacts.phone.replace(/[^+\d]/g, '')}`"
        icon="i-lucide-phone"
        color="neutral"
        variant="ghost"
        class="hidden lg:inline-flex"
      />
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
