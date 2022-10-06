
import './bootstrap';
import { createApp } from 'vue';

import { createStore } from 'vuex'

import App from './layouts/app.vue'
import router from './router/index.js'
import Notifications from '@kyvg/vue3-notification'
import store from './store/index.js'
import axios from 'axios';

// @vite('resources/css/your-promate.css')
import '@/assets/css/your-promate.css';
// import '@/assets/css/bootstrap.css';
// import '@/assets/css/Untitled-1.css';

const app = createApp(App);
if(sessionStorage.getItem('token')){
    // axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token');
    
 }
 
app.use(store)
app.use(router)
app.use(Notifications)
app.mount('#app');
