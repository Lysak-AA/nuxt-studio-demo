<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
</script>

<template>
  <UApp>
    <AppHeader />
    <UMain>
      <UContainer class="py-24 text-center space-y-6">
        <p class="text-6xl font-bold text-primary">
          {{ error.statusCode }}
        </p>
        <h1 class="text-2xl font-semibold text-highlighted">
          {{ error.message || 'Что-то пошло не так' }}
        </h1>
        <UButton label="На главную" to="/" icon="i-lucide-house" @click="clearError({ redirect: '/' })" />
      </UContainer>
    </UMain>
    <AppFooter />
  </UApp>
</template>
