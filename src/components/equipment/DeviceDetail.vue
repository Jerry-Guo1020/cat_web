<template>
  <div class="detail-bg">
    <div class="detail-header">
      <span class="header-btn" @click="goBack">←</span>
      <span class="header-title">{{ device.name }}</span>
      <span class="header-btn">⋯</span>
    </div>

    <div class="device-content">
      <!-- 左侧 -->
      <div class="side-info side-left">
        <div class="info-block">
          <span class="info-value">{{ device.temperature }}<span class="unit">℃</span></span>
          <span class="info-label">温度</span>
        </div>
        <div class="info-block">
          <span class="info-value">{{ device.humidity }}</span>
          <span class="info-label">湿度RH%</span>
        </div>  
      </div>
      <!-- 中间设备图 -->
      <div class="device-img-wrap">
        <img :src="device.img" class="device-img" />
      </div>
      <!-- 右侧 -->
      <div class="side-info side-right">
        <div class="info-block">
          <span class="info-value">{{ device.status }}</span>
          <span class="info-label">{{ device.desc }}</span>
        </div>
        <div class="info-block">
          <span class="info-value">🛒</span>
          <span class="info-label">耗材购买</span>
        </div>
      </div>
    </div>
    <!-- 底部操作按钮区 -->
    <div class="action-row">
      <div v-for="(btn, index) in device.actions" :key="index" class="action-item" :class="{ active: btn.active }">
        <div class="action-icon" :style="{ background: btn.active ? '#c8f8f8' : '#f5f5f5' }">{{ btn.icon }}</div>
        <div class="action-label">{{ btn.label }}</div>
      </div>
    </div>
    <!-- 今日记录 -->
    <div class="record-card">
      <div class="record-title">今日记录</div>
      <div class="record-list">
        <div class="record-row" v-for="(rec, index) in device.records" :key="index">
          <div class="record-time">
            <span class="dot"></span>
            {{ rec.time }}
          </div>
          <div class="record-event">{{ rec.event }}</div>
          <div class="record-count">{{ rec.count }}</div>
          <div v-if="rec.extra" class="record-extra">{{ rec.extra }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { devices } from '/src/data/devices.js'

const route = useRoute()
const router = useRouter()

const device = computed(() => 
    devices.find(d => d.id == route.params.id))

function goBack() {
  router.back()
}
</script>

<style scoped>
.detail-bg {
  min-height: 100vh;
  background: #f5fefe;
  padding-bottom: 30px;
}
.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 14px 0 14px;
}
.header-btn {
  font-size: 1.7rem;
  color: #222;
  cursor: pointer;
  width: 36px;
  text-align: center;
}
.header-title {
  font-size: 1.32rem;
  font-weight: bold;
  flex: 1;
  text-align: center;
  color: #222;
}
.detail-title {
  text-align: center;
  font-size: 1.13rem;
  font-weight: bold;
  color: #222;
  margin-top: 5px;
}
.device-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 8px;
  margin-bottom: 10px;
}
.side-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 70px;
  gap: 22px;
}
.info-block {
  text-align: center;
}
.info-value {
  font-size: 1.45rem;
  font-weight: bold;
  color: #222;
}
.unit {
  font-size: 1.08rem;
  margin-left: 2px;
}
.info-label {
  font-size: 0.92rem;
  color: #646464;
  display: block;
  margin-top: 2px;
}
.device-img-wrap {
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.device-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.side-right .info-value {
  font-size: 1.22rem;
  font-weight: bold;
  color: #232323;
}
.action-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 18px auto 0 auto;
  padding: 0 16px;
  max-width: 420px;
}
.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.action-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}
.action-label {
  font-size: 1rem;
  color: #5a5a5a;
  margin-top: 2px;
}
.action-item.active .action-label,
.action-item.active .action-icon {
  color: #26e0e2;
}
.record-card {
  background: #fff;
  border-radius: 13px;
  box-shadow: 0 4px 24px #0001;
  width: 95%;
  max-width: 480px;
  margin: 35px auto;
  padding: 34px 0 34px 0;
}
.record-title {
  font-size: 1.08rem;
  font-weight: bold;
  color: #111;
  margin-bottom: 12px;
}
.record-list {
  width: 100%;
}
.record-row {
  display: flex;
  align-items: center;
  font-size: 1.03rem;
  color: #2b2b2b;
  border-bottom: 1px solid #f4f6f8;
  padding: 7px 0 7px 0;
}
.record-row:last-child {
  border-bottom: none;
}
.record-time {
  display: flex;
  align-items: center;
  width: 52px;
  color: #666;
  font-size: 0.95rem;
  position: relative;
}
.dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: #26e0e2;
  border-radius: 50%;
  margin-right: 6px;
}
.record-event {
  width: 90px;
  margin-left: 10px;
  color: #222;
}
.record-count {
  width: 42px;
  color: #444;
  font-weight: 600;
  text-align: right;
}
.record-extra {
  color: #999;
  font-size: 0.93rem;
  margin-left: 10px;
}
@media (max-width: 600px) {
  .device-content {
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
  }
  .side-info {
    flex-direction: row;
    gap: 125px;
    margin-bottom: 10px;
  }
  .device-img-wrap {
    width: 120px;
    height: 120px;
  }
  .record-card {
    padding: 14px 4px 7px 21px;
    width: 89%;
    min-width: 0;
  }
}
</style>
