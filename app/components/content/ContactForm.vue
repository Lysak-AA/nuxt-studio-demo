<script setup lang="ts">
withDefaults(defineProps<{
  /** Заголовок формы */
  title?: string
  /** Текст кнопки отправки */
  buttonLabel?: string
}>(), {
  title: 'Напишите нам',
  buttonLabel: 'Отправить'
})

const toast = useToast()
const state = reactive({ name: '', email: '', message: '' })

// Демо: заявка никуда не отправляется, просто показываем уведомление
function onSubmit() {
  toast.add({
    title: 'Спасибо!',
    description: 'Мы получили заявку и ответим в течение рабочего дня.',
    color: 'success',
    icon: 'i-lucide-circle-check'
  })
  Object.assign(state, { name: '', email: '', message: '' })
}
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-xl font-semibold text-highlighted">
        {{ title }}
      </h2>
    </template>
    <UForm :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField label="Имя" name="name" required>
        <UInput v-model="state.name" placeholder="Как к вам обращаться" class="w-full" required />
      </UFormField>
      <UFormField label="Email" name="email" required>
        <UInput v-model="state.email" type="email" placeholder="you@company.ru" class="w-full" required />
      </UFormField>
      <UFormField label="Сообщение" name="message">
        <UTextarea v-model="state.message" placeholder="Расскажите о задаче" :rows="4" class="w-full" />
      </UFormField>
      <UButton type="submit" :label="buttonLabel" block size="lg" />
    </UForm>
  </UCard>
</template>
