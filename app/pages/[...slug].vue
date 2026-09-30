<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(`page-${route.path}`, () =>
  queryCollection('pages').path(route.path).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, message: 'Страница не найдена', fatal: true })
}

useSeoMeta({
  title: route.path === '/' ? undefined : page.value.title,
  description: page.value.description
})
</script>

<template>
  <UContainer class="py-10">
    <ContentRenderer v-if="page" :value="page" class="page-content" />
  </UContainer>
</template>
