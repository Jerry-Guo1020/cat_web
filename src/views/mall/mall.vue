<template>
    <div class="container">
        <div class="top">
            <div class="title-wrap">
                <div class="title">商店</div>
            </div>
            <div class="icons">
                <!-- 搜索按钮 -->
                <button class="icon-btn" aria-label="搜索">
                    <!-- 放SVG，直接复制即可 -->
                    <svg width="22" height="22" viewBox="0 0 22 22">
                        <circle cx="10" cy="10" r="7" stroke="#333" stroke-width="2" fill="none" />
                        <line x1="16" y1="16" x2="21" y2="21" stroke="#333" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
                <!-- 购物车按钮 -->
                <button class="icon-btn" aria-label="购物车">
                    <svg width="22" height="22" viewBox="0 0 22 22">
                        <circle cx="8" cy="19" r="2" fill="#333" />
                        <circle cx="17" cy="19" r="2" fill="#333" />
                        <path d="M3 3h2l2 11h9l2-7H6" stroke="#333" stroke-width="2" fill="none" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="carousel">
            <Carousel />
        </div>
        <div class="content">
            <div class="title">会员专享</div>
            <div class="title-info">黑金会员全店商品尊享75折</div>
        </div>
        <div class="commodity-list">
            <CommodityCard v-for="item in commodity" :key="item.title" :img="item.img" :title="item.title"
                :price="item.price" />
        </div>
    </div>
    <Navbar />
</template>

<script setup>
import Carousel from '../../components/mall/carousel.vue';
import Navbar from '../../components/Navbar/Navbar.vue';
import CommodityCard from '../../components/mall/commodity.vue'
import { commodity } from '/src/data/commodity.js'

</script>

<style scoped>
.container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    min-height: 100vh;
    background: #f5fefe;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0;
    padding-bottom: calc(104px + env(safe-area-inset-bottom, 24px));

}

.carousel {
    width: 95%;
    margin: 15px auto;
}

.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.title-wrap {
    display: flex;
    align-items: center;
    height: 100%;
}

.title {
    font-size: 2.3rem;
    font-weight: bold;
    color: #111;
    margin: 30px 0 35px 0;
    letter-spacing: 1px;
}

.title-info {
    margin: 0 0 13px 10px;
}

.icons {
    display: flex;
    align-items: center;
    gap: 18px;
    /* 图标间距 */
    margin-right: 8px;
    /* 和右边有些距离 */
}

.icon-btn {
    background: none;
    border: none;
    padding: 3px;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.15s;
    outline: none;
}

.icon-btn:active {
    background: #eee;
}

.icon-btn svg {
    display: block;
    width: 24px;
    height: 24px;
}

.commodity-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 默认3列 */
    justify-items: center;
    gap: 18px;
    margin: 0 0 24px 0;
    width: 100%;
}

@media (max-width: 600px) {
    .title {
        font-size: 1.32rem;
        margin: 35px 0 13px 10px;
    }

    .title {
        font-size: 1.32rem;
    }

    .icons {
        gap: 12px;
    }

    .icon-btn svg {
        width: 20px;
        height: 20px;
    }

    .commodity-list {
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        gap: 12px;
    }

}

@media (max-width: 400px) {
    .commodity-list {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>