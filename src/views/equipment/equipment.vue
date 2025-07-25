<template>
  <div class="container">
    <div class="main-content">
      <!-- 顶部Tab栏 -->
      <div class="top">
        <div class="tab active">我的设备</div>
        <div class="tab">共享设备</div>
      </div>
      <!-- 大标题 -->
      <div class="title">设备消息</div>
      <!-- 卡片内容 -->
      <div class="msg-card">
        <div v-for="(item, idx) in notion" :key="idx" class="msg-row">
          <div class="msg-time">{{ item.time }}</div>
          <div class="msg-label" :title="item.label">{{ item.label }}</div>
          <div class="msg-message" :title="item.message">{{ item.message }}</div>
        </div>
      </div>
      <div class="title">全部设备</div>
      <div class="all-equipment">
        <Card
          v-for="dev in devices"
          :key="'dev-'+dev.id"
          :title="dev.name"
          :status="dev.status"
          :desc="dev.desc"
          :notion="dev.notion"
          :icon="dev.icon"
          @click="goDetail(dev.id, 'device')"
        />
        <Card2
          v-for="cam in cameras"
          :key="'cam-'+cam.id"
          :title="cam.title"
          :status="cam.status"
          :time="cam.time"
          :notion="cam.notion"
          :content="cam.content"
          @click="goDetail(cam.id, 'camera')"
        />
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script setup>
import Card from '../../components/equipment/card.vue'
import Card2 from '../../components/equipment/card2.vue'
import Navbar from '../../components/Navbar/Navbar.vue'
import { devices } from '/src/data/devices.js'
import { cameras } from '/src/data/cameras.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const notion = [
  {
    time: "14:00",
    label: "猫咪的金饭旺旺碗..",
    message: "保险门未关紧保险门未.."
  },
  {
    time: "14:00",
    label: "猫咪的水盆",
    message: "喊猫咪去喝水哦."
  }
]

function goDetail(id, type) {
  router.push(`/device/${type}/${id}`)
}
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

/* 消息标题 */
.title {
  font-size: 2.3rem;
  font-weight: bold;
  color: #111;
  margin: 30px 0 35px 16px;
  letter-spacing: 1px;
}

/* 卡片内容 */
.msg-card {
  background: #fff;
  border-radius: 13px;
  box-shadow: 0 4px 24px #0001;
  width: 95%;
  max-width: 940px;
  margin: 0 auto;
  padding: 34px 0 34px 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.msg-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 17px 46px;
  font-size: 1.36rem;
  color: #909090;
  border-bottom: 1.5px solid #f4f6f8;
}

.msg-row:last-child {
  border-bottom: none;
}

.msg-time {
  width: 85px;
  min-width: 70px;
  text-align: left;
  color: #969696;
  font-weight: 400;
  font-size: 1.28rem;
  flex-shrink: 0;
  letter-spacing: 1px;
}

.msg-label {
  width: 175px;
  min-width: 110px;
  font-weight: 400;
  color: #909090;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  font-size: 1.18rem;
}

.msg-message {
  flex: 1;
  color: #909090;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-size: 1.18rem;
}

.all-equipment {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 12px;
  width: 96%;
  margin: 0 auto;
}


/* 响应式适配 */
@media (max-width: 600px) {
  .main-content {
    padding: 0 0 18px 0;
  }

  .top {
    gap: 22px;
    margin-left: 12px;
    margin-top: 35px;
    margin-bottom: 16px;
  }

  .tab {
    font-size: 1.22rem;
    padding-bottom: 2px;
  }

  .title {
    font-size: 1.32rem;
    margin: 35px 0 13px 10px;
  }

  .msg-card {
    padding: 10px 0;
    border-radius: 13px;
  }

  .msg-row {
    padding: 11px 7px;
    font-size: 0.92rem;
  }

  .msg-label,
  .msg-message {
    font-size: 0.93rem;
  }

  .msg-time {
    width: 49px;
    font-size: 0.93rem;
  }
}
</style>
