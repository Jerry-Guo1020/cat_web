<template>
  <div
    class="banner-slider"
    @mouseenter="showArrows = true"
    @mouseleave="showArrows = false"
  >
    <div class="slider-content">
      <!-- 左箭头 -->
      <button
        v-show="showArrows"
        class="arrow left"
        @click="prev"
        aria-label="prev"
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M15 6l-6 6 6 6" stroke="#222" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
      </button>

      <div class="slider-img-wrap">
        <img :src="banners[current].img" class="slider-img" />
      </div>

      <div class="slider-info">
        <div class="slider-title">{{ banners[current].title }}</div>
        <div class="slider-sub">{{ banners[current].desc }}</div>
        <button class="slider-btn">{{ banners[current].button }}</button>
      </div>

      <!-- 右箭头 -->
      <button
        v-show="showArrows"
        class="arrow right"
        @click="next"
        aria-label="next"
      >
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M9 6l6 6-6 6" stroke="#222" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    <!-- 圆点放右下角 -->
    <div class="indicator">
      <span
        v-for="(item, idx) in banners"
        :key="idx"
        :class="{ active: idx === current }"
        @click="goTo(idx)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const banners = [
  {
    img: '/slider/catbox.png', // 本地图片或网络图
    title: '小仓盒猫砂盆',
    desc: '小仓盒猫砂盆',
    button: '点击查看'
  },
  {
    img: '/slider/catbox2.png',
    title: '其他猫咪好物',
    desc: '优质猫砂盆推荐',
    button: '马上了解'
  }
]

const current = ref(0)
const showArrows = ref(false)
let timer = null

function next() {
  current.value = (current.value + 1) % banners.length
}
function prev() {
  current.value = (current.value - 1 + banners.length) % banners.length
}
function goTo(idx) {
  current.value = idx
}

onMounted(() => {
  timer = setInterval(() => {
    next()
  }, 3500)
})
onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.banner-slider {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  background: #f7fdfc;
  box-shadow: 0 2px 16px #eaeaea63;
  position: relative;
}

.slider-content {
  display: flex;
  align-items: center;
  background: #edb196;
  border-radius: 24px 24px 0 0;
  min-height: 180px;
  padding: 16px 24px 20px 24px;
  position: relative;
}

/* 图片区+按钮整体对齐修正 */
.slider-img-wrap {
  flex: 0 0 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.slider-img {
  width: 86px;
  height: 86px;
  object-fit: cover;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px #e4b98e4d;
  display: block;
}

/* 箭头按钮不溢出且不紧贴边缘 */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: rgba(255,255,255,0.96);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px #be89694d;
  z-index: 2;
  transition: background .2s;
  opacity: 0.92;
}

/* 只设置各自方向！ */
.arrow.left {
  left: 20px;
}
.arrow.right {
  right: 20px;
}

.arrow:hover {
  background: #fff;
}

/* 文字区域 */
.slider-info {
  flex: 1 1 0%;
  margin-left: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
}
.slider-title {
  font-size: 1.19rem;
  color: #222;
  font-weight: 700;
  margin-bottom: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slider-sub {
  font-size: 1rem;
  color: #333;
  opacity: 0.85;
  margin-bottom: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.slider-btn {
  font-size: 0.98rem;
  padding: 7px 22px;
  background: #fff;
  border-radius: 22px;
  color: #222;
  border: none;
  box-shadow: 0 2px 8px #cf906e18;
  font-weight: 500;
  cursor: pointer;
  transition: background .2s;
}
.slider-btn:hover {
  background: #f7efeb;
}

/* 指示器右下角 */
.indicator {
  position: absolute;
  right: 32px;
  bottom: 14px;
  z-index: 5;
  display: flex;
  gap: 6px;
}
.indicator span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #222;
  opacity: 0.22;
  transition: all .2s;
  cursor: pointer;
}
.indicator span.active {
  background: #222;
  opacity: 0.85;
  width: 13px;
  height: 13px;
}

/* 响应式优化 */
@media (max-width: 600px) {
  .banner-slider {
    max-width: 98vw;
    border-radius: 14px;
  }
  .slider-content {
    border-radius: 14px 14px 0 0;
    padding: 7px 9vw 15px 9vw;
  }
  .slider-img-wrap {
    flex: 0 0 48px;
    height: 48px;
  }
  .slider-img {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }
   .arrow {
    width: 26px;
    height: 26px;
  }
  .arrow.left {
    left: 12px;
  }
  .arrow.right {
    right: 12px;
  }
  .slider-info {
    margin-left: 10px;
  }
  .slider-title {
    font-size: 0.97rem;
  }
  .slider-sub {
    font-size: 0.83rem;
    margin-bottom: 7px;
  }
  .slider-btn {
    font-size: 0.82rem;
    padding: 3px 13px;
    border-radius: 11px;
  }
  .indicator {
    right: 15px;
    bottom: 7px;
    gap: 5px;
  }
  .indicator span, .indicator span.active {
    width: 8px;
    height: 8px;
  }
}
</style>
