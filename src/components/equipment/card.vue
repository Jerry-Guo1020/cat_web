<template>
  <div class="card">
    <!-- 顶部图标和标题 -->
    <div class="card-header">
      <img v-if="icon" :src="icon" class="icon-img" alt="icon" />
      <span v-else class="icon-heart">💖</span>
      <span class="card-title">{{ title }}</span>
    </div>

    <!-- 蓝色圆圈 -->
    <div class="circle-wrap">
      <svg viewBox="0 0 100 100" class="circle-bg">
        <circle class="circle-full" cx="50" cy="50" r="42" stroke-width="8" />
      </svg>
      <div class="circle-text">
        <div class="status-text">{{ status }}</div>
      </div>
    </div>

    <!-- 描述和提示 -->
    <div class="desc">{{ desc }}</div>
    <div class="notion" v-html="formatNotion(notion)"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  desc: String,
  status: String,
  notion: String,
  icon: String
})

// 替换 notion 中数字为加粗蓝色高亮
function formatNotion(str) {
  return str?.replace(/(\d+)/g, '<span class="notion-num">$1</span>') ?? ''
}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 420px;
  min-height: 320px;
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 4px 24px #0001;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 0 20px 0;
  margin: 24px auto;
}

.card-header {
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 18px;
  margin-left: 20px;
  gap: 10px;
}

.icon-img {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  object-fit: cover;
}

.icon-heart {
  font-size: 1.2rem;
  margin-right: 2px;
}

.card-title {
  font-size: 1rem;
  color: #535353;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* 纯蓝静态圆环样式 */
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
  transform: rotate(-90deg);
}

.circle-full {
  fill: none;
  stroke: #26e0e2;
  stroke-width: 8;
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
  align-items: center;
  justify-content: center;
}

.status-text {
  font-size: 1.6rem;
  font-weight: 600;
  color: #26e0e2;
  line-height: 1.8rem;
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
  letter-spacing: 2px;
  width: 100%;
  box-sizing: border-box;
}
:deep(.notion-num) {
  color: #26e0e2;
  font-weight: 800;
  font-size: 1.32rem;
  letter-spacing: 0.5px;
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

  .desc,
  .notion {
    font-size: 1.02rem;
  }

  .status-text {
    font-size: 1.3rem;
  }

  :deep(.notion-num) {
    font-size: 1.5rem;
  }
}
</style>
