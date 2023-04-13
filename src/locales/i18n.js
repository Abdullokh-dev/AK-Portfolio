import { createI18n } from "vue-i18n";
import en from "./en.json";
import ru from "./ru.json";

const i18n = createI18n({
  locale: 'Рус',
  allowComposition: true,
  messages: {
    Eng: en,
    Рус: ru
  }
})

export default i18n;
