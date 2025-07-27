<template>
    <div class="container">
        <div class="top">
            <div class="title">猫咪列表</div>
            <div class="btn_add">
                <img src="/assets/SVG/home/加.svg" class="addicon" />
            </div>
        </div>

        <div class="cat-info">
            <div class="avator">
                <img :src="userInfo.avatar" class="avatar-img" />
            </div>
            <div class="cat-info-content">
                <div class="cat-name">{{ userInfo.catname }}</div>
                <div class="user">{{ userInfo.username }}</div>
                <div class="cat-old">
                    <img :src="userInfo.calendar" class="calendar-logo" />
                    <div class="date">{{ userInfo.catold }}</div>
                    <div class="cat-status">{{ userInfo.catstatus }}</div>
                </div>
            </div>
        </div>

        <div class="memo">
            <div class="memo-top">
                <div class="title">猫咪备忘录</div>
                <div class="all-memo" @click="toAllMemo">全部备忘></div>
            </div>
            <div class="meno-card">
                <div v-for="(item, idx) in notion" :key="idx" class="msg-row">
                    <div class="msg-time">{{ item.time }}</div>
                    <div class="msg-label" :title="item.label">{{ item.label }}</div>
                    <div class="msg-message" :title="item.message">{{ item.message }}</div>
                </div>
            </div>
        </div>

        <div class="cat-daily">
            <div class="title">猫咪的一天</div>
            <div class="daily-card">
                <CatDailyCard title="体重" status="良好" data="5.6kg" notion="昨天5.6kg" />
                <CatDailyCard title="体重" status="良好" data="5.6kg" notion="昨天5.6kg" />
                <CatDailyCard title="体重" status="良好" data="5.6kg" notion="昨天5.6kg" />
                <CatDailyCard title="体重" status="良好" data="5.6kg" notion="昨天5.6kg" />
            </div>
        </div>
    </div>
    <Navbar />
</template>

<script setup>
import CatDailyCard from '../../components/home/catDailyCard.vue';
import Navbar from '../../components/Navbar/Navbar.vue';
import { ref } from 'vue';

const notion = [
    {
        time: "14:00",
        label: "打疫苗",
        message: "记得去医院"
    },
    {
        time: "14:00",
        label: "猫咪的水盆",
        message: "喊猫咪去喝水哦."
    }
]

const userInfo = ref({
    username: '我爱我的猫咪',
    catname: '猫咪小可爱',
    avatar: '/assets/SVG/personal/avator.jpg',
    catold: "4年3个月",
    catstatus: "良好",
    calendar: '/assets/SVG/home/日历.svg'
})

</script>

<style scoped>
.container {
    width: 100%;
    max-width: 960px;
    min-height: 100vh;
    background: #f5fefe;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: calc(104px + env(safe-area-inset-bottom, 24px));

}

.top {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.title {
    font-size: 2.3rem;
    font-weight: bold;
    color: #111;
    margin: 30px 0 35px 0;
    letter-spacing: 1px;
}

.all-memo {
    font-size: 1.18rem;
    color: #b1b6b9;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.18s;
    user-select: none;
    /* 右侧字更浅更细一点 */
    display: flex;
    align-items: center;
    margin-right: 15px;
    margin-bottom: 15px;
}

.all-memo:hover {
    color: #888;
    /* 悬停时更深一点 */
}

.avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.avatar-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 25px;
}

.calendar-logo {
    width: 25px;
    height: 25px;
    margin-right: 10px;
}

.date {
    color: #969696;
    margin-right: 5px;
}

.btn_add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    /* 固定按钮大小 */
    height: 40px;
    margin: 0;
}

.addicon {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.cat-info {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 24px #0001;
    width: 95%;
    margin: 15px auto;
    padding: 34px 0 34px 0;
    display: flex;
    gap: 0;
    height: 80px;
    align-items: center;
}

.cat-info-content {
    margin: 20px;
}

.cat-name {
    font-size: 1.3rem;
    font-weight: bold;
    color: #111;
    /* margin: 30px 0 35px 16px; */
    letter-spacing: 1px;
}

.user {
    letter-spacing: 1px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.cat-old {
    display: flex;
    margin-top: 10px;
}

.cat-status {
    background-color: #1fe6ec;
    border-radius: 25px;
    padding: 2px 10px;
    font-size: 0.85rem;
    text-align: center;
    color: #000;
    margin-right: 10px;
}

.memo {
    width: 100%;
    margin-top: 8px;
}

.memo-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 6px;
}



.meno-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 24px #0001;
    width: 95%;
    margin: 15px auto;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0;
    height: 100%;
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

.cat-daily {
    width: 100%;
}

.daily-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
}


.daily-card>* {
    width: 100%;
    box-sizing: border-box;
}



@media (max-width: 600px) {
    .title {
        font-size: 1.32rem;
        margin: 35px 0 13px 10px;
    }

    .btn_add {
        margin: 23px 10px 0 10px;
        align-items: center;
        justify-content: flex-end;
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
    .memo-title {
        font-size: 1.25rem;
    }

    .all-memo {
        font-size: 1rem;
    }
}

@media (max-width: 300px) {
    .daily-card {
        grid-template-columns: 1fr;
        /* 小屏幕变成单列 */
    }
}
</style>