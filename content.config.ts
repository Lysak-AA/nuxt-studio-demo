import { defineCollection, defineContentConfig, property, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // Обычные страницы сайта: главная, «О нас», «Контакты»
    pages: defineCollection({
      type: 'page',
      source: '*.md'
    }),

    // Записи блога — frontmatter превращается в форму в Studio
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: property(z.date()).editor({
          label: 'Дата публикации'
        }),
        author: property(z.string()).editor({
          label: 'Автор'
        }),
        category: z.enum(['Новости', 'Кейсы', 'Советы']).editor({
          label: 'Рубрика',
          tooltip: 'Показывается бейджем в списке статей'
        }),
        cover: property(z.string()).editor({
          input: 'media',
          label: 'Обложка',
          description: 'Изображение из медиатеки, рекомендуемый размер 1200×630'
        }),
        tags: property(z.array(z.string())).editor({
          label: 'Теги'
        })
      })
    }),

    // Команда — редактируется как форма (список карточек)
    team: defineCollection({
      type: 'data',
      source: 'team.yml',
      schema: z.object({
        members: z.array(z.object({
          name: property(z.string()).editor({ label: 'Имя' }),
          role: property(z.string()).editor({ label: 'Должность' }),
          bio: property(z.string()).editor({ input: 'textarea', label: 'О сотруднике' }),
          avatar: property(z.string().optional()).editor({ input: 'media', label: 'Фото' })
        }))
      })
    }),

    // Глобальные настройки: название, меню, контакты, соцсети.
    // Меняются в одном месте — обновляются в шапке, подвале и на странице контактов.
    settings: defineCollection({
      type: 'data',
      source: 'settings.yml',
      schema: z.object({
        company: z.object({
          name: property(z.string()).editor({ label: 'Название компании' }),
          tagline: property(z.string()).editor({ label: 'Слоган' })
        }),
        navigation: z.array(z.object({
          label: property(z.string()).editor({ label: 'Текст пункта' }),
          to: property(z.string()).editor({ label: 'Ссылка', description: 'Например, /about' })
        })),
        contacts: z.object({
          phone: property(z.string()).editor({ label: 'Телефон' }),
          email: property(z.string()).editor({ label: 'Email' }),
          address: property(z.string()).editor({ label: 'Адрес' }),
          hours: property(z.string()).editor({ label: 'Часы работы' })
        }),
        socials: z.array(z.object({
          label: property(z.string()).editor({ label: 'Название' }),
          icon: property(z.string()).editor({
            input: 'icon',
            iconLibraries: ['simple-icons', 'lucide'],
            label: 'Иконка'
          }),
          url: property(z.string()).editor({ label: 'Ссылка' })
        }))
      })
    })
  }
})
