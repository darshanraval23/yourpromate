import { createWebHistory, createRouter } from "vue-router";

import Signin from "../components/loginComponent.vue"
import Ragiste from "../components/RagisterationComponent.vue"

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

export default router;