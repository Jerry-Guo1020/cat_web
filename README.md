# 🐾 猫咪管理系统

![Vue 3](https://img.shields.io/badge/Vue-3.x-42b883?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.x-646cff?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

一个基于 **Vue 3 + Vite** 打造的移动端猫咪智能管理系统，集猫咪信息、设备控制、商城购物、消息通知于一体，界面清爽，交互友好。

---

## ✨ 特色功能

| 功能 | 说明 |
| ---- | ---- |
| 🐱 **猫咪信息管理** | 新增 / 编辑猫咪资料（姓名、生日、品种、性别、头像…） |
| 📋 **设备管理** | 查看设备状态、历史消息、设备详情并进行远程操作 |
| 🛒 **会员商城** | 浏览商品、轮播推荐、加入购物车、下单结算 |
| 💬 **消息中心** | 设备实时消息 & 公告推送 |
| 👤 **个人中心** | 订单管理、客服反馈、会员服务等 |
| 🔒 **账号体系** | 手机号登录 / 注册，国际区号选择 |

---

## 🛠️ 技术栈

- **Vue 3** & **Vite** — 快速的单页应用开发体验  
- **Vue Router** — 前端路由管理  
- **Pinia / Composition API** — 现代化状态与逻辑组合  
- **原子化 CSS + 自定义样式** — 移动端优先的响应式布局  

---

## 📂 项目结构

```text
src/
├── components/         # 业务组件（设备卡片、消息卡片、导航栏…）
├── data/               # 静态数据（设备、商品、消息…）
├── router/             # 路由配置
├── views/              # 页面视图（首页、设备、商城、消息、个人中心…）
├── style.css           # 全局样式
├── main.js             # 项目入口
├── App.vue             # 根组件
public/                 # 静态资源

```
## ⚡ 快速开始
```
# 1. 克隆仓库
git clone https://github.com/Jerry-Guo1020/cat_web.git
cd cat_web

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev

# 4. 打包构建
pnpm build

# 5. 本地预览
pnpm preview
```

## 🎨 自定义
所有演示数据均放在 src/data/。样式可在对应组件的" style scoped" 或 src/style.css 中自定义修改。

## 📄 许可证
本项目基于 MIT License 开源发布。

## 📬 联系
