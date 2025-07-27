<template>
    <div class="container">
        <div class="top">
            <div class="title">商店</div>
        </div>
        <div class="carousel">
            <Carousel />
        </div>
    </div>
    <Navbar />
</template>

<script setup>
import Carousel from '../../components/mall/carousel.vue';
import Navbar from '../../components/Navbar/Navbar.vue';

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

.title {
    font-size: 2.3rem;
    font-weight: bold;
    color: #111;
    margin: 30px 0 35px 0;
    letter-spacing: 1px;
}

@media (max-width: 600px) {
    .title {
        font-size: 1.32rem;
        margin: 35px 0 13px 10px;
    }


}
</style>