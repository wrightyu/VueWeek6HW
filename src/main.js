import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import { date, currency } from './methods/filters'
import './assets/all.scss'

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
