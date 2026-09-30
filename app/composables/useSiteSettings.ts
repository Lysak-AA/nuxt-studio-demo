const fetchSettings = () => queryCollection('settings').first()

/** Глобальные настройки сайта из content/settings.yml */
export function useSiteSettings() {
  return useAsyncData('site-settings', fetchSettings)
}
