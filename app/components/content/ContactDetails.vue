<script setup lang="ts">
// Контакты берутся из content/settings.yml — одно место правки для всего сайта
const { data: settings } = await useSiteSettings()

const items = computed(() => {
  const c = settings.value?.contacts
  if (!c) return []
  return [
    { icon: 'i-lucide-phone', label: 'Телефон', value: c.phone, to: `tel:${c.phone.replace(/[^+\d]/g, '')}` },
    { icon: 'i-lucide-mail', label: 'Email', value: c.email, to: `mailto:${c.email}` },
    { icon: 'i-lucide-map-pin', label: 'Адрес', value: c.address },
    { icon: 'i-lucide-clock', label: 'Часы работы', value: c.hours }
  ]
})
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <UCard v-for="item in items" :key="item.label">
      <div class="flex items-start gap-3">
        <UIcon :name="item.icon" class="size-6 text-primary shrink-0" />
        <div>
          <div class="text-sm text-muted">
            {{ item.label }}
          </div>
          <ULink v-if="item.to" :to="item.to" class="font-medium text-highlighted">
            {{ item.value }}
          </ULink>
          <div v-else class="font-medium text-highlighted">
            {{ item.value }}
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
