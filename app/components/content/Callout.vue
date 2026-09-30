<script setup lang="ts">
const props = withDefaults(defineProps<{
  /** Тип блока: влияет на цвет и иконку */
  type?: 'info' | 'success' | 'warning'
  /** Заголовок блока */
  title?: string
}>(), {
  type: 'info',
  title: ''
})

const styles = {
  info: { color: 'info', icon: 'i-lucide-info' },
  success: { color: 'success', icon: 'i-lucide-circle-check' },
  warning: { color: 'warning', icon: 'i-lucide-triangle-alert' }
} as const

const style = computed(() => styles[props.type] ?? styles.info)
</script>

<template>
  <UAlert
    :color="style.color"
    :icon="style.icon"
    :title="title || undefined"
    variant="subtle"
    class="my-6"
  >
    <template #description>
      <slot mdc-unwrap="p" />
    </template>
  </UAlert>
</template>
