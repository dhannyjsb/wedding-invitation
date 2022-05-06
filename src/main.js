import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueViewer from 'v-viewer'
import App from './App.vue'
import router from './router'

import './style/index.css'
import './style/app.css'
import 'animate.css'
import 'aos/dist/aos.css'
import 'viewerjs/dist/viewer.css'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueViewer)
  .mount('#app')
