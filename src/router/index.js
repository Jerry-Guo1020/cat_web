import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/home.vue";
import Navbar from "../components/Navbar/Navbar.vue";
import Mall from "../views/mall/mall.vue";
import Equipment from "../views/equipment/equipment.vue";
import Personal from "../views/personal/personal.vue";
import Message from "../views/message/message.vue";
import DeviceDetail from '../components/equipment/DeviceDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/navbar",
      component: Navbar,
      name: "navbar",
    },
    {
      path: "/mall",
      component: Mall,
      name: "mall",
    },
    {
      path: "/equipment",
      component: Equipment,
      name: "equipment",
    },
    {
      path: "/personal",
      component: Personal,
      name: "personal",
    },
    {
      path: "/message",
      component: Message,
      name: "message",
    },
    { path: "/device/:type/:id", 
      component: DeviceDetail 
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return{ top: 0}
  }
});

export default router;
