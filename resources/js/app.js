
import './bootstrap';
import { createApp } from 'vue';

import { createStore } from 'vuex'

import App from './layouts/app.vue'
import router from './router/index.js'
import Notifications from '@kyvg/vue3-notification'
import store from './store/index.js'
import axios from 'axios';
// import vuetify from '@/plugins/vuetify'
import vuetify from "./plugins/vuetify";
//custum csss
import '@/assets/css/your-promate.css';

const app = createApp(App);
if(sessionStorage.getItem('token')){
    axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token');
 }
app.use(vuetify)
app.use(store)
app.use(router)
app.use(Notifications)
app.mount('#app');
