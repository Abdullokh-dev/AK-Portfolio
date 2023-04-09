import { createApp } from 'vue'
import App from './App.vue'
import router from "./plugins/router.js";
import { createI18n } from 'vue-i18n';
import en from "./locales/en.json"
import ru from "./locales/ru.json";

const i18n = createI18n({
  locale: 'en',
  allowComposition: true,
  messages: {
    en: en,
    ru: ru
  }
})

createApp(App).use(i18n).use(router).mount('#app')
