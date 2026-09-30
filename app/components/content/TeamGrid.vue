<script setup lang="ts">
withDefaults(defineProps<{
  /** Заголовок секции */
  title?: string
}>(), {
  title: 'Наша команда'
})

// Данные берутся из content/team.yml — редактируются формой в Studio
const { data: team } = await useAsyncData('team', () => queryCollection('team').first())
</script>

<template>
  <section class="py-12">
    <h2 v-if="title" class="text-3xl font-bold text-highlighted mb-8">
      {{ title }}
    </h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <UCard v-for="member in team?.members" :key="member.name">
        <div class="flex flex-col items-center text-center gap-3">
          <UAvatar :src="member.avatar || undefined" :alt="member.name" size="3xl" />
          <div>
            <div class="font-semibold text-highlighted">
              {{ member.name }}
            </div>
            <div class="text-sm text-primary">
              {{ member.role }}
            </div>
          </div>
          <p class="text-sm text-muted">
            {{ member.bio }}
          </p>
        </div>
      </UCard>
    </div>
  </section>
</template>
