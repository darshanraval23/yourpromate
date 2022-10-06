import { createWebHistory, createRouter } from "vue-router";

import Signin from "../components/Authorization/loginComponent.vue"
import Ragiste from "../components/Authorization/RagisterationComponent.vue"

import Home from "../components/HomeComponent.vue"


const routes = [ 
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/ragisteration",
    name: "Ragisteration",
    component: Ragiste,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
/*
@info chack if user has authorize or not
*/
// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isAuthenticated) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next()
//   }
// });

export default router;