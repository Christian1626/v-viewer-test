import './assets/main.css'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(VueViewer)
app.mount('#app')
