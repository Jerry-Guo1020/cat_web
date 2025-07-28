<template>
  <div class="card">
    <div class="photo">
      <img :src="img" class="photo-img" alt="商品图片" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="price">
      <span class="yuan">￥</span>
      <span class="main">{{ price }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: String,
  title: String,
  price: [Number, String]
})
</script>

<style scoped>
.card {
  width: 168px;
  min-height: 180px;
  background: #f7fefe;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  padding: 16px 8px 14px 8px;
  box-sizing: border-box;
}
.photo {
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px #0001;
}
.photo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.title {
  font-size: 1.08rem;
  color: #222;
  margin: 8px 0 6px 0;
  font-weight: 500;
}
.price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #222;
}
.yuan {
  font-size: 1.02rem;
  vertical-align: baseline;
  color: #555;
}
.main {
  font-size: 1.28rem;
  font-weight: bold;
  color: #222;
  margin-left: 2px;
}
</style>
