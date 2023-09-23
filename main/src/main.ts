
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { a } from 'common'
import Wujie from 'wujie-vue3'

const {  preloadApp } = Wujie

const app = createApp(App)

app.use(Wujie)
app.use(createPinia())
app.use(router)

app.mount('#app')

preloadApp({name: 'vue3', url: 'http://localhost:3001/', exec: true})
preloadApp({name: 'react', url: 'http://localhost:3000/', exec: true})
