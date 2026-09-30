<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

useSeoMeta({
  title: 'Блог',
  description: 'Новости, кейсы и советы от команды'
})

const formatDate = (date: string | Date) =>
  new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
</script>

<template>
  <UContainer class="py-10">
    <UPageHeader
      title="Блог"
      description="Новости компании, разборы проектов и практические советы."
    />

    <UBlogPosts class="mt-10">
      <UBlogPost
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        :title="post.title"
        :description="post.description"
        :image="post.cover"
        :date="formatDate(post.date)"
        :badge="{ label: post.category, variant: 'subtle' }"
        :authors="[{ name: post.author, avatar: { alt: post.author } }]"
      />
    </UBlogPosts>
  </UContainer>
</template>
