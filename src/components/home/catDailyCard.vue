<template>
    <div class="card">
        <div class="top">
            <div class="title">{{ title }}</div>
            <div class="status">{{ status }}</div>
        </div>
        <div class="data">{{ data }}</div>
        <div class="notion">{{ notion }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    data: String,
    status: String,
    notion: String
})
</script>

<style scoped>
.card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 24px #0001;
    display: flex;
    flex-direction: column;
    padding: 20px;
    min-height: 120px;
    box-sizing: border-box;
    width: 100%;
}


.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
}

.title {
    font-size: 1rem;
    color: #666;
    margin-left: 10px;
}

.status {
    background-color: #1fe6ec;
    border-radius: 25px;
    padding: 2px 10px;
    font-size: 0.85rem;
    text-align: center;
    color: #000;
    margin-right: 10px;
}

.data {
    font-size: 2rem;
    font-weight: bold;
    margin: 8px 0;
    margin-left: 10px;

}

.notion {
    font-size: 0.9rem;
    color: #777;
    margin-left: 10px;
}


@media (max-width: 700px) {
    .card {
        min-height: 150px;
        border-radius: 15px;
        padding: 20px 0 14px 0;
    }
}
</style>