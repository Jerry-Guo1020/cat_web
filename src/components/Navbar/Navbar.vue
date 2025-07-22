<template>
    <nav class="bottom-nav">
        <div v-for="(item, idx) in navs" 
        :key="item.path" :class="['nav-item', { active: router.path === item.path }]"
            @click="go(item.path)">
            <span>{{ item.icon }}</span>
            <span>{{ item.label }}</span>
        </div>
    </nav>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

// 导航配置
const navs = [
    { label: "首页", path: "/", icon: "🏠" },
    { label: "设备", path: "/equipment", icon: "🏠" },
    { label: "商城", path: "/mall", icon: "🔍" },
    { label: "消息", path: "/message", icon: "💬" },
    { label: "个人", path: "/personal", icon: "👤" },
]

function go(path) {
    if(router.path !== path) {
        router.push(path)
    }
}
</script>

<style>
.bottom-nav {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  height: 56px;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  z-index: 99;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.03);
}
.nav-item {
  flex: 1;
  text-align: center;
  padding-top: 4px;
  font-size: 13px;
  color: #888;
  cursor: pointer;
  transition: color .2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.nav-item .icon {
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 2px;
}
.nav-item.active {
  color: #3a7afe;
}
.nav-item.active .icon {
  font-size: 24px;
}
</style>