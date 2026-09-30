<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('blog').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, message: 'Статья не найдена', fatal: true })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogImage: post.value.cover
})

const date = computed(() => post.value &&
  new Date(post.value.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
)
</script>

<template>
  <UContainer v-if="post" class="py-10 max-w-3xl">
    <UButton to="/blog" icon="i-lucide-arrow-left" label="Все статьи" color="neutral" variant="link" class="px-0" />

    <header class="mt-6 space-y-4">
      <div class="flex flex-wrap items-center gap-3 text-sm text-muted">
        <UBadge :label="post.category" variant="subtle" />
        <span>{{ date }}</span>
        <span>·</span>
        <span>{{ post.author }}</span>
      </div>
      <h1 class="text-4xl font-bold text-highlighted">
        {{ post.title }}
      </h1>
      <p class="text-lg text-muted">
        {{ post.description }}
      </p>
    </header>

    <img :src="post.cover" :alt="post.title" class="mt-8 w-full rounded-xl aspect-[1200/630] object-cover">

    <ContentRenderer :value="post" class="mt-10" />

    <div class="mt-10 flex flex-wrap gap-2">
      <UBadge v-for="tag in post.tags" :key="tag" :label="`#${tag}`" color="neutral" variant="outline" />
    </div>
  </UContainer>
</template>
