import { createApp } from 'vue'
import App from './App.vue'
import VaiUI from '../packages/components'
import '../packages/theme/index.css'

const app = createApp(App)
app.use(VaiUI)
app.mount('#app')
