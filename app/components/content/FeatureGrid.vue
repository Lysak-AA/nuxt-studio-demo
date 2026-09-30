<script setup lang="ts">
withDefaults(defineProps<{
  /** Заголовок секции */
  title?: string
  /** Описание секции */
  description?: string
}>(), {
  title: '',
  description: ''
})
</script>

<template>
  <section class="py-12">
    <div v-if="title || description" class="max-w-2xl mb-10 space-y-3">
      <h2 v-if="title" class="text-3xl font-bold text-highlighted">
        {{ title }}
      </h2>
      <p v-if="description" class="text-lg text-muted">
        {{ description }}
      </p>
    </div>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <slot />
    </div>
  </section>
</template>
