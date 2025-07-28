<template>
  <div class="contanier">
    <div class="login-main">
      <!-- 顶部LOGO/图片和名称 -->
      <div class="logo-box">
        <img src="" class="logo-img" alt="logo" />
        <div class="app-name">猫享智控</div>
      </div>

      <!-- 表单区域 -->
      <form class="form" @submit.prevent="handleLogin">
        <div class="input-row phone-row">
          <div class="area-code" @click="showAreaPicker = true">
            {{ areaCode }}
            <span class="arrow">&#9662;</span>
          </div>
          <input type="tel" class="input-account" v-model="phone" placeholder="请输入手机号" maxlength="11" />
        </div>

        <div class="input-label">密码</div>
        <input type="password" class="input-password" v-model="password" placeholder="请输入密码" />

        <button class="login-btn" type="submit">登录</button>
      </form>

      <!-- 底部快捷区 -->
      <div class="bottom-links">
        <span class="left" @click="onForget">忘记密码</span>
        <span class="right" @click="onRegister">注册账号</span>
      </div>
    </div>

    <!-- 区号选择弹窗 -->
    <div v-if="showAreaPicker" class="popup-mask" @click="showAreaPicker = false">
      <div class="popup-content" @click.stop>
        <div class="popup-title">选择区号</div>
        <div class="popup-option" v-for="code in areaCodeList" :key="code" @click="chooseArea(code)">
          +{{ code }}
        </div>
        <div class="popup-footer">
          <button @click="showAreaPicker = false">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const phone = ref('')
const password = ref('')
const areaCode = ref(86)
const showAreaPicker = ref(false)
const areaCodeList = [86, 852, 853, 886]

function handleLogin() {
  alert(`登录：+${areaCode.value} ${phone.value} / ${password.value}`)
}

function onForget() {
  alert('跳转到忘记密码页面')
}

function onRegister() {
  router.push('register')
}

function chooseArea(code) {
  areaCode.value = code
  showAreaPicker.value = false
}
</script>

<style scoped>
.contanier {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #f2fdff 0%, #c5effe 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-main {
  width: 100%;
  max-width: 370px;
  background: #fff;
  border-radius: 28px;
  box-shadow: 0 8px 36px #44bfff12, 0 2px 4px #99ebff18;
  padding: 44px 28px 32px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.logo-img {
  width: 88px;
  height: 88px;
  border-radius: 18px;
  background: linear-gradient(180deg, #b3e4ff, #90e0ff);
  box-shadow: 0 4px 16px #8ce6ff55;
  margin-bottom: 14px;
  object-fit: cover;
}

.app-name {
  font-size: 1.32rem;
  font-weight: bold;
  color: #222;
  letter-spacing: 1px;
  text-align: center;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-row {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  padding: 2px 0 2px 0;
  border-bottom: 1px solid #989898;
}

.phone-row {
  margin-bottom: 0;
}

.area-code {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  margin-right: 8px;
  cursor: pointer;
  min-width: 50px;
  user-select: none;
}

.area-code .arrow {
  font-size: 0.95em;
  margin-left: 3px;
}

.input-account {
  flex: 1;
  border: none;
  background: none;
  font-size: 1rem;
  padding: 10px 0;
  outline: none;
}

.input-password {
  flex: 1;
  border: none;
  background: none;
  font-size: 1rem;
  padding: 10px 0;
  outline: none;
  border-bottom: 1px solid #989898;
}

.input-label {
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  margin-top: 18px;
  margin-bottom: 2px;
}

.login-btn {
  width: 100%;
  margin: 32px 0 0 0;
  padding: 14px 0;
  background: linear-gradient(90deg, #b9faff 60%, #a4e8ed 100%);
  color: #111;
  font-size: 1.15rem;
  font-weight: bold;
  border: none;
  border-radius: 18px;
  box-shadow: 0 4px 18px #b9faff33;
  transition: background .18s;
  cursor: pointer;
  letter-spacing: 1px;
}

.login-btn:active {
  background: #a4e8ed;
}

.bottom-links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 0.98rem;
  color: #999;
  margin-top: 22px;
  padding: 0 3px;
}

.bottom-links .left {
  color: #b3b3b3;
  cursor: pointer;
}

.bottom-links .right {
  color: #1ec6e6;
  cursor: pointer;
  font-weight: 500;
}

/* 区号弹窗 */
.popup-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.18);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 999;
}

.popup-content {
  width: 100%;
  max-width: 380px;
  background: #fff;
  border-radius: 18px 18px 0 0;
  box-shadow: 0 -2px 24px #0001;
  padding: 18px 0 10px 0;
  animation: slide-up .24s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.popup-option {
  width: 100%;
  text-align: center;
  font-size: 1.07rem;
  padding: 14px 0;
  border-bottom: 1px solid #f3f3f3;
  color: #222;
  cursor: pointer;
}

.popup-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 7px 0 0 0;
}

.popup-footer button {
  border: none;
  background: #f3f3f3;
  color: #666;
  border-radius: 7px;
  padding: 7px 38px;
  font-size: 1rem;
  cursor: pointer;
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .login-main {
    max-width: 98vw;
    margin: 15px;
  }

  .popup-content {
    max-width: 99vw;
  }
}
</style>
