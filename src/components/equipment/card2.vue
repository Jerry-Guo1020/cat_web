<template>
  <div class="card">
    <!-- 顶部左上角图标 + 标题 -->
    <div class="card-header">
      <img v-if="icon" :src="icon" class="icon-img" alt="icon" />
      <span v-else class="icon-heart">💖</span>
      <span class="card-title">{{ title }}</span>
    </div>

    <!-- 中间内容显示 -->
    <ul class="content">
        <li v-for="(item, index) in content" :key="index" class="content-item">
          <span class="dot"></span>
          <span class="time">{{ item.time }}</span>
          <span class="time">{{ item.status }}</span>
        </li>
    </ul>

    <!-- 底部的提示 -->
    <div class="desc">{{ desc }}</div>
    <div class="notion" v-html="formatNotion(notion)"></div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  time: String,
  desc: String,
  status: String,
  notion: String,
  icon: {
    type: String,
    default: ''
  },
  content: {
    type: Array,
    default:() => []
  }
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
  min-height: 350px;
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

.content {
  width: 88%;
  padding: 0;
  list-style: none;
  align-items: center;
}

.content-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0 7px 0 ;
  border-bottom: 1px solid #f3f3f3;
  font-size: 1rem;
  color: #444;
  justify-content: center;
}

.content-item:last-child {
  border-bottom: none;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #26e0e2;
}

.time {
  font-weight: 500;
  color:#222;
  min-width:58px;
}

.status-text, .status {
  color: #878787;
  font-weight: 400;
  margin-left: 8px;
  font-size: 1rem;
}

.desc {
  margin-top: 18px;
  color: #686868;
  font-size: 1.08rem;
  text-align: center;
  width: 100%;
  letter-spacing: 1px;
}

.notion {
  margin-top: -11px;
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
