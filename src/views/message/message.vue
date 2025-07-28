<template>
  <div class="container">
    <div class="main-content">
      <div class="top">
        <div class="tab active">设备信息</div>
        <div class="tab">公告</div>
      </div>
      <div class="card">
        <div class="card-content">
          <MessageCard v-for="item in message" :key="item.title" :avatar="item.avatar" :title="item.title"
            :desc="item.desc" :date="item.date" />
        </div>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script setup>
import MessageCard from '../../components/message/messageCard.vue';
import Navbar from '../../components/Navbar/Navbar.vue';
import { message } from '/src/data/message.js'

</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background: #f5fefe;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0;
  padding-bottom: calc(100px + env(safe-area-inset-bottom, 24px));
  overflow-x: hidden;

}

.main-content {
  width: 100vw;
  max-width: 960px;
  margin: 0 auto;
}

/* 顶部Tab栏 */
.top {
  display: flex;
  align-items: flex-end;
  gap: 58px;
  margin-top: 38px;
  margin-bottom: 36px;
  margin-left: 18px;
}

.tab {
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  position: relative;
  cursor: pointer;
  padding-bottom: 4px;
  transition: color 0.15s;
}

.tab.active {
  color: #26e0e2;
}

.tab.active::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -7px;
  height: 7px;
  width: 100%;
  margin: 0 auto;
  border-radius: 7px;
  background: #26e0e2;
}

.card {
  margin-top: 15px;
}

/* 消息标题 */
.title {
  font-size: 2.3rem;
  font-weight: bold;
  color: #111;
  margin: 30px 0 35px 16px;
  letter-spacing: 1px;
}


@media (max-width: 600px) {
  .main-content {
    padding: 0 0 18px 0;
  }

  .top {
    gap: 22px;
    margin-left: 12px;
    margin-top: 35px;
  }

  .tab {
    font-size: 1.22rem;
    padding-bottom: 2px;
  }

  .title {
    font-size: 1.32rem;
    margin: 35px 0 13px 10px;
  }

}
</style>