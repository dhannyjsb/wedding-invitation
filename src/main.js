import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './style/index.css'
import './style/app.css'
import 'animate.css'
import 'aos/dist/aos.css'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
