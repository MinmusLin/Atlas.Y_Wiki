import {registerPlugins} from '@/plugins'
import App from './App.vue'
import {createApp} from 'vue'
import '@/assets/styles/global.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
