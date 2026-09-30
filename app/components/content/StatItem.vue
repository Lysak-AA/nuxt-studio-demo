<script setup lang="ts">
withDefaults(defineProps<{
  /** Крупное число, например «120+» */
  value?: string
  /** Подпись под числом */
  label?: string
}>(), {
  value: '100+',
  label: 'проектов'
})
</script>

<template>
  <div class="rounded-xl border border-default p-6 text-center">
    <div class="text-4xl font-bold text-primary">
      {{ value }}
    </div>
    <div class="mt-2 text-muted">
      {{ label }}
    </div>
  </div>
</template>
