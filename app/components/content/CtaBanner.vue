<script setup lang="ts">
withDefaults(defineProps<{
  /** Заголовок баннера */
  title?: string
  /** Текст под заголовком */
  description?: string
  /** Текст кнопки */
  buttonLabel?: string
  /** Ссылка кнопки */
  buttonLink?: string
}>(), {
  title: 'Обсудим ваш проект?',
  description: '',
  buttonLabel: 'Связаться с нами',
  buttonLink: '/contacts'
})
</script>

<template>
  <section class="my-12 rounded-2xl bg-primary px-6 py-12 sm:px-12 text-center text-inverted">
    <h2 class="text-3xl font-bold">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-3 text-lg opacity-90 max-w-2xl mx-auto">
      {{ description }}
    </p>
    <UButton
      :to="buttonLink"
      :label="buttonLabel"
      size="xl"
      color="neutral"
      variant="solid"
      trailing-icon="i-lucide-arrow-right"
      class="mt-6"
    />
  </section>
</template>
