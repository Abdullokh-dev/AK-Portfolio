import { createI18n } from "vue-i18n";
import en from "./en.json";
import ru from "./ru.json";

const saveLanguage = () => {
  if (localStorage.getItem('language') === null) {
    return 'Рус'
  } else {
    return localStorage.getItem('language')
  }
}

const i18n = createI18n({
  locale: saveLanguage(),
  allowComposition: true,
  legacy: false,
  messages: {
    Eng: en,
    Рус: ru
  }
})

export default i18n;
