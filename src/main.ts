import { createApp } from 'vue'
import App from './App.vue'

import './themes/github-dark.css'
import './themes/ellucian-dark.css'
import './style.css'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })

// Set initial theme
document.documentElement.setAttribute('data-theme', 'github')
