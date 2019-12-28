import Vue from 'vue'
import App from './App.vue'

import router from './router'

import VueHighlightJS from 'vue-highlightjs'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import './components'
import './filters'
import 'highlight.js/styles/default.css'
import './assets/scss/main.scss'
import '../packages/scss/index.scss'

import store from './store'
import MazUi from './lib'

Vue.use(VueHighlightJS, {
  languages: {
    javascript,
    bash
  }
})
Vue.use(MazUi)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
