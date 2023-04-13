import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from './plugins/router.js'
import i18n from "./locales/i18n.js";

app.use(i18n)
app.use(router)
app.mount('#app')
