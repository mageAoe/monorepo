import { createApp } from 'vue'
import App from './App.vue'

import { a,b } from 'common'

createApp(App).mount('#app')


declare global {
    interface Window {
        $wujie:{
            props:Record<string,any>
        }
    }
}