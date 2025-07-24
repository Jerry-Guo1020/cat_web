<template>
  <div class="card">
    <!-- 顶部心形和标题 -->
    <div class="card-header">
      <span class="icon-heart">💖</span>
      <span class="card-title">{{ title }}</span>
    </div>

    <!-- 圆环/中心数据区 -->
    <div class="circle-wrap">
      <svg viewBox="0 0 100 100" class="circle-bg">
        <!-- 灰色底圈 -->
        <circle
          class="circle-base"
          cx="50"
          cy="50"
          r="42"
          stroke-width="8"
        />
        <!-- 蓝色进度圈 -->
        <circle
          class="circle-progress"
          cx="50"
          cy="50"
          r="42"
          stroke-width="8"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progressOffset"
        />
      </svg>
      <div class="circle-text">
        <template v-if="progress !== null && progress !== undefined">
          <div class="progress-val">{{ progress }}<span v-if="showPercent">%</span></div>
          <div v-if="status" class="progress-label">{{ status }}</div>
        </template>
        <template v-else>
          {{ status }}
        </template>
      </div>
    </div>
    <div class="desc">{{ desc }}</div>
    <div class="notion" v-html="formatNotion(notion)"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  desc: String,
  status: String,
  notion: String,
  // 新增：进度百分比，范围0-100
  progress: {
    type: [Number, String],
    default: null
  },
  // 是否显示百分号
  showPercent: {
    type: Boolean,
    default: true
  }
})

const circumference = 2 * Math.PI * 42
const progressOffset = computed(() => {
  if (props.progress === null || props.progress === undefined) return circumference
  const percent = Math.max(0, Math.min(100, Number(props.progress)))
  return circumference * (1 - percent / 100)
})

// 让 notion 里的数字变色加粗
function formatNotion(str) {
  return str?.replace(/(\d+)/g, '<span class="notion-num">$1</span>') ?? ''
}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 420px;
  min-width: 0;
  min-height: 350px;
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 4px 24px #0001;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 0 20px 0;
  margin: 24px auto;
  transition: box-shadow .16s;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  margin-top: 4px;
  gap: 10px;
}
.icon-heart {
  font-size: 2.2rem;
  margin-right: 6px;
}
.card-title {
  font-size: 1.34rem;
  color: #535353;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.circle-wrap {
  width: 130px;
  height: 130px;
  margin-bottom: 10px;
  margin-top: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle-bg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg); /* 起点从正上方 */
}
.circle-base {
  fill: none;
  stroke: #26e0e2;
  stroke-width: 15;
}
.circle-progress {
  fill: none;
  stroke: #d0d9db;
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.4s cubic-bezier(0.4,0,0.2,1);
}

.circle-text {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  text-align: center;
  transform: translate(-50%, -50%);
  color: #26e0e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.progress-val {
  font-size: 2.1rem;
  font-weight: 600;
  color: #26e0e2;
  line-height: 2.1rem;
}
.progress-label {
  font-size: 1.1rem;
  color: #999;
  font-weight: 400;
  margin-top: 2px;
}

.desc {
  margin-top: 4px;
  color: #686868;
  font-size: 1.18rem;
  text-align: center;
}

.notion {
  margin-top: 24px;
  font-size: 1.32rem;
  color: #323232;

  text-align: center;
  font-weight: 400;
}
.notion-num {
  color: #26e0e2;
  font-weight: 600;
  font-size: 1.38rem;
}

/* 响应式 */
@media (max-width: 700px) {
  .card {
    min-height: 220px;
    border-radius: 15px;
    padding: 20px 0 14px 0;
  }
  .circle-wrap {
    width: 86px;
    height: 86px;
  }
  .circle-text {
    font-size: 1.32rem;
    width: 66px;
  }
  .desc, .notion {
    font-size: 1.02rem;
  }
}
</style>
