import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue3 from 'bootstrap-vue-3'
// import { BNav } from 'bootstrap-vue-3'
// import { BListGroup } from 'bootstrap-vue-3'
// import { BContainer } from 'bootstrap-vue-3'
// import { BRow } from 'bootstrap-vue-3'
// import { BCol } from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(BootstrapVue3)
// app.use(BNav)
// app.use(BListGroup)
// app.use(BContainer)
// app.use(BRow)
// app.use(BCol)
app.mount('#app')
