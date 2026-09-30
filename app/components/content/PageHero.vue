<script setup lang="ts">
withDefaults(defineProps<{
  /** Крупный заголовок */
  title?: string
  /** Подзаголовок под заголовком */
  description?: string
  /** Маленькая надпись над заголовком */
  headline?: string
  /** Картинка справа */
  image?: string
  /** Текст основной кнопки */
  primaryLabel?: string
  /** Ссылка основной кнопки */
  primaryLink?: string
  /** Текст второй кнопки */
  secondaryLabel?: string
  /** Ссылка второй кнопки */
  secondaryLink?: string
}>(), {
  title: 'Заголовок страницы',
  description: '',
  headline: '',
  image: '',
  primaryLabel: '',
  primaryLink: '/contacts',
  secondaryLabel: '',
  secondaryLink: '/about'
})
</script>

<template>
  <section class="grid gap-10 lg:grid-cols-2 items-center py-8 lg:py-16">
    <div class="space-y-6">
      <UBadge v-if="headline" :label="headline" variant="subtle" size="lg" />
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-highlighted text-balance">
        {{ title }}
      </h1>
      <p v-if="description" class="text-lg sm:text-xl text-muted text-pretty">
        {{ description }}
      </p>
      <div v-if="primaryLabel || secondaryLabel" class="flex flex-wrap gap-3">
        <UButton v-if="primaryLabel" :to="primaryLink" :label="primaryLabel" size="xl" trailing-icon="i-lucide-arrow-right" />
        <UButton v-if="secondaryLabel" :to="secondaryLink" :label="secondaryLabel" size="xl" color="neutral" variant="subtle" />
      </div>
    </div>
    <img v-if="image" :src="image" :alt="title" class="w-full rounded-2xl shadow-lg ring ring-default">
  </section>
</template>
