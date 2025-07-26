<template>
  <nav class="bottom-nav">
    <div
      v-for="item in navs"
      :key="item.path"
      :class="['nav-item', { active: route.path === item.path }]"
      @click="go(item.path)"
    >
      <img
        class="icon"
        :src="route.path === item.path ? item.activeIcon : item.icon"
      />
      <span>{{ item.label }}</span>
    </div>
  </nav>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const navs = [
  {
    label: "首页",
    path: "/",
    icon: "/assets/SVG/Navbar/laptop.svg",
    activeIcon: "/assets/SVG/Navbar/laptop (1).svg"
  },
  {
    label: "设备",
    path: "/equipment",
    icon: "/assets/SVG/Navbar/cat (1).svg",
    activeIcon: "/assets/SVG/Navbar/cat.svg"
  },
  {
    label: "商城",
    path: "/mall",
    icon: "/assets/SVG/Navbar/shopping-cart.svg",
    activeIcon: "/assets/SVG/Navbar/shopping-cart (1).svg"
  },
  {
    label: "消息",
    path: "/message",
    icon: "/assets/SVG/Navbar/message-circle-more (1).svg",
    activeIcon: "/assets/SVG/Navbar/message-circle-more.svg"
  },
  {
    label: "个人",
    path: "/personal",
    icon: "/assets/SVG/Navbar/square-user-round.svg",
    activeIcon: "/assets/SVG/Navbar/square-user-round (1).svg"
  },
  
]

function go(path) {
  if (route.path !== path) {
    router.push(path)
  }
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  z-index: 99;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
}

.nav-item {
  flex: 1;
  text-align: center;
  font-size: 13px;
  color: black;
  cursor: pointer;
  transition: color .2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  flex-shrink: 0;
  width: 60%;
  max-width: 32px;
  min-width: 18px;
  height: auto;
  aspect-ratio: 1/1;
  margin-bottom: 5px;
}

.nav-item.active {
  color:  #888;
}
</style>
