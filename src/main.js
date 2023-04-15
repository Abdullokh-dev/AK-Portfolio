import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from './plugins/router.js'
import i18n from "./locales/i18n.js";
import VueGtag from "vue-gtag-next";

app.use(i18n)
app.use(router)
app.use(VueGtag, {
  property: {
    id: "G-KKJ3S34QN0"
  }
});
app.mount('#app')
