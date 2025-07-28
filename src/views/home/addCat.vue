<template>
    <div class="container">
        <!-- header -->
        <div class="header">
            <span class="header-btn" @click="goBack">←</span>
            <span class="header-title">添加猫咪</span>
            <span class="header-btn">⋯</span>
        </div>

        <!-- 头像 -->
        <div class="avatar">
            <img src="/logo.svg" class="avatar-img" />
            <div class="edit-icon">✎</div>
        </div>

        <!-- 表单 v-for -->
        <div class="form">
            <div class="form-item" v-for="field in fields" :key="field.key" @click="handleClick(field)">
                <span class="label">{{ field.label }}</span>

                <!-- input 输入框，右对齐、风格统一 -->
                <input v-if="field.type === 'input'" class="form-input" v-model="formData[field.key]"
                    :placeholder="field.required ? '必填' : ''" @click.stop />

                <!-- 选择/日期型显示内容（居右对齐） -->
                <span v-else class="value" :class="{
                    placeholder: !formData[field.key],
                    'right-align': true
                }">
                    <!-- 生日格式化显示 -->
                    <template v-if="field.key === 'birthday' && formData.birthday">
                        {{ formData.birthday }}
                    </template>
                    <template v-else>
                        {{ formData[field.key] || (field.required ? '必填' : '请选择') }}
                    </template>
                </span>

                <!-- 箭头仅选择型字段显示 -->
                <span class="arrow" v-if="field.type !== 'input'">›</span>
            </div>
        </div>

        <!-- 保存按钮 -->
        <div class="footer">
            <button class="save-btn" @click="saveData">保存</button>
        </div>

        <!-- 通用选择弹窗（如性别、品种、设备） -->
        <div class="popup-mask" v-if="showSelectPopup" @click="closePopup">
            <div class="popup-content" @click.stop>
                <div class="popup-option" v-for="opt in currentOptions" :key="opt" @click="selectOption(opt)">
                    {{ opt }}
                </div>
                <div class="popup-footer">
                    <button class="cancel" @click="closePopup">取消</button>
                </div>
            </div>
        </div>

        <!-- 生日日期弹窗 -->
        <div class="popup-mask" v-if="showBirthdayPopup" @click="closePopup">
            <div class="popup-content" @click.stop>
                <input type="date" class="date-picker" v-model="dateTemp" />
                <div class="popup-footer">
                    <button class="cancel" @click="closePopup">取消</button>
                    <button class="confirm" @click="confirmBirthday">确定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { catFormFields } from '/src/data/catFormFields.js'

const router = useRouter()
function goBack() { router.back() }

const fields = catFormFields
const formData = reactive({})

// 弹窗控制
const showSelectPopup = ref(false)
const showBirthdayPopup = ref(false)
const currentOptions = ref([])
const currentSelectKey = ref('')

// 日期临时变量
const dateTemp = ref('')

// 处理点击每一项
function handleClick(field) {
    if (field.type === 'select') {
        // 从配置读取 options
        currentOptions.value = field.options || []
        currentSelectKey.value = field.key
        showSelectPopup.value = true
    } else if (field.type === 'date') {
        dateTemp.value = formData.birthday || ''
        showBirthdayPopup.value = true
    }
}

// 通用选择弹窗选择
function selectOption(val) {
    formData[currentSelectKey.value] = val
    showSelectPopup.value = false
}

function confirmBirthday() {
    if (dateTemp.value) formData.birthday = dateTemp.value
    showBirthdayPopup.value = false
}

function closePopup() {
    showSelectPopup.value = false
    showBirthdayPopup.value = false
}

function saveData() {
    if ({ ...formData } == null) {
        alert("请你填写")
    } else {
        console.log('🐱 提交的数据:', { ...formData })
        alert('保存成功！请查看控制台输出')
    }
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    background: #f5fefe;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 14px 0 14px;
    width: 90%;
}

.header-btn {
    font-size: 1.7rem;
    color: #222;
    cursor: pointer;
    width: 36px;
    text-align: center;
}

.header-title {
    font-size: 1.32rem;
    font-weight: bold;
    flex: 1;
    text-align: center;
    color: #222;
}

.avatar {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto 20px;
    box-shadow: 0 2px 10px #0001;
}

.avatar-img {
    width: 70%;
    opacity: 0.6;
}

.edit-icon {
    position: absolute;
    right: 0;
    bottom: 0;
    background: #fff;
    border-radius: 50%;
    padding: 6px;
    font-size: 0.8rem;
    box-shadow: 0 2px 6px #0001;
}

.form {
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.form-item {
    background: #fff;
    border-radius: 8px;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 0.95rem;
    box-shadow: 0 2px 6px #0001;
    cursor: pointer;
}

.label {
    flex: 1;
    font-weight: 500;
    color: #222;
}


.form-input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 1rem;
    background: transparent;
    color: #222;
    text-align: right;
    font-weight: 500;
    padding-right: 0;
}


.value {
    min-width: 90px;
    text-align: right;
    flex: 1;
    font-size: 1rem;
    color: #222;
    font-weight: 500;
}

.placeholder {
    color: #aaa;
    font-weight: 400;
}

.arrow {
    position: absolute;
    right: 12px;
    font-size: 1.2rem;
    color: #ccc;
}

.footer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
}

.save-btn {
    width: 80%;
    max-width: 300px;
    padding: 12px 0;
    border: none;
    border-radius: 20px;
    background: #9af8ff;
    font-size: 1rem;
    color: #000;
    font-weight: bold;
    box-shadow: 0 4px 10px #0002;
    cursor: pointer;
}

.popup-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1000;
}

.popup-content {
    background: #fff;
    width: 100%;
    border-radius: 12px 12px 0 0;
    padding: 16px 0;
    animation: slide-up 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.popup-option {
    text-align: center;
    padding: 12px 0;
    font-size: 1rem;
    border-bottom: 1px solid #eee;
    width: 100%;
    cursor: pointer;
}

.popup-footer {
    display: flex;
    justify-content: space-around;
    padding: 12px 0 0;
    width: 100%;
    gap: 18px;
}

.cancel,
.confirm {
    border: none;
    background: #ddd;
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 1rem;
    min-width: 80px;
    cursor: pointer;
}

.confirm {
    background: #34c759;
    color: #fff;
}

.date-picker {
    width: 70%;
    margin: 10px auto 0;
    padding: 10px 0;
    font-size: 1.1rem;
    border-radius: 6px;
    border: 1px solid #eee;
    text-align: center;
}

@keyframes slide-up {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
}

@media (max-width: 600px) {
    .avatar {
        width: 100px;
        height: 100px;
    }

    .form-item {
        font-size: 0.9rem;
        padding: 12px 14px;
    }

    .save-btn {
        width: 90%;
        font-size: 0.95rem;
    }
}
</style>
