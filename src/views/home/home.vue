<template>
    <div class="container">
        <div class="top">
            <div class="title">猫咪列表</div>
            <div class="btn_add">添加按钮</div>
        </div>

        <div class="cat-info">
            <div class="avator">
                <img :src="userInfo.avatar" class="avatar-img" />
            </div>
            <div class="cat-info-content">
                <div class="cat-name">{{ userInfo.catname }}</div>
                <div class="user">{{ userInfo.username }}</div>
            </div>
        </div>

        <div class="memo">
            <div class="title">猫咪备忘录</div>
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
    catname:'fmajka',
    avatar: '/public/assets/SVG/personal/avator.jpg'
})

</script>

<style scoped>
.container {
    width: 100%;
    min-height: 100vh;
    background: #f5fefe;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    margin: 30px 0 35px 16px;
    letter-spacing: 1px;
}

.avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;


}

.avatar-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}


.btn_add {
    display: flex;
    justify-content: center;
    margin: 45px 10px 0 10px;
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

.memo {
    width: 100%;
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
}

@media (max-width: 300px) {
    .daily-card {
        grid-template-columns: 1fr;
        /* 小屏幕变成单列 */
    }
}
</style>