import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Icons
import '@mdi/font/css/materialdesignicons.css'

// Axios
import axios from 'axios'



// Set base URL and enable credentials for Sanctum
axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.config.globalProperties.$axios = axios // optional: makes axios available as this.$axios

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')