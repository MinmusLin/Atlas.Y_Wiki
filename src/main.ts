import {registerPlugins} from '@/plugins'
import App from './App.vue'
import {createApp} from 'vue'
import '@/styles/global.css'
import 'katex/dist/katex.min.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
