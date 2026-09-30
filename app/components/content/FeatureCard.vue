<script setup lang="ts">
withDefaults(defineProps<{
  /** Иконка карточки */
  icon?: string
  /** Заголовок карточки */
  title?: string
}>(), {
  icon: 'i-lucide-sparkles',
  title: 'Преимущество'
})
</script>

<template>
  <UCard class="h-full">
    <div class="flex flex-col gap-3">
      <div class="size-11 rounded-lg bg-primary/10 flex items-center justify-center">
        <UIcon :name="icon" class="size-6 text-primary" />
      </div>
      <h3 class="font-semibold text-lg text-highlighted">
        {{ title }}
      </h3>
      <div class="text-muted">
        <slot mdc-unwrap="p" />
      </div>
    </div>
  </UCard>
</template>
