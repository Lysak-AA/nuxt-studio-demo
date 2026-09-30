// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Порядок важен: Nuxt UI до Content (prose-компоненты), Studio — после Content
  modules: ['@nuxt/ui', '@nuxt/content', 'nuxt-studio'],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' }
    }
  },

  css: ['~/assets/css/main.css'],

  // Компоненты из components/content регистрируются глобально,
  // чтобы они появлялись в меню "/" визуального редактора Studio
  components: [
    { path: '~/components/content', global: true },
    '~/components'
  ],

  compatibilityDate: '2025-07-15',

  content: {
    experimental: {
      // Встроенный node:sqlite (Node >= 22.5) — не требует сборки better-sqlite3
      sqliteConnector: 'native'
    }
  },

  studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'Lysak-AA',
      repo: 'nuxt-studio-demo',
      branch: 'main'
    },
    // В меню "/" показываем только блоки сайта, сгруппированные для контент-менеджера
    editor: {
      iconLibraries: ['lucide', 'simple-icons'],
      components: {
        groups: [
          { label: 'Блоки страницы', include: ['PageHero', 'FeatureGrid', 'FeatureCard', 'StatsGrid', 'StatItem', 'CtaBanner', 'TwoColumns'] },
          { label: 'Текст', include: ['Callout'] },
          { label: 'Данные', include: ['TeamGrid', 'ContactDetails', 'ContactForm'] }
        ],
        ungrouped: 'omit'
      }
    },
    git: {
      commit: {
        messagePrefix: 'content:'
      }
    },
    ai: {
      // Работает, только если задан NUXT_STUDIO_AI_API_KEY (Vercel AI Gateway)
      context: {
        title: 'Горизонт — сайт компании',
        description: 'Корпоративный сайт digital-агентства: услуги, команда, блог',
        style: 'Короткие абзацы, конкретные цифры и примеры, без канцелярита',
        tone: 'Дружелюбный и профессиональный'
      }
    }
  }
})
