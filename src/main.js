import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style/index.css'
import './style/app.css'
import 'animate.css'
import 'aos/dist/aos.css'

createApp(App)
  .use(router)
  .mount('#app')
