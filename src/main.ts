/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import { registerPlugins } from '@/plugins'
import router from './router/router'
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App).use(router)

registerPlugins(app)

app.mount('#app')
