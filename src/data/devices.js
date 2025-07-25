export const devices = [
  {
    id: 1,
    name: '猫砂盆',
    img: '/assets/catbox.png',   // 图片路径请根据你的项目调整
    temperature: 23.8,
    humidity: 82,
    status: '不足',
    desc: '猫砂余量',
    actions: [
      { icon: '🐱', label: '感应0', active: true },
      { icon: '👆', label: '手动1' },
      { icon: '⏰', label: '定时0' },
      { icon: '🗑️', label: '清仓0' }
    ],
    records: [
      { time: '18:00', event: '自动清理', count: '1次' },
      { time: '17:00', event: '手动清理', count: '1次' },
      { time: '14:00', event: '猫咪来过', count: '1.9kg', extra: '16s' },
      { time: '12:00', event: '定时清理', count: '2次' },
      { time: '11:00', event: '清仓', count: '1次' }
    ],
    notion:"今天加水4次"
  },
  {
    id: 2,
    name: '猫咪的饭碗',
    img: '/assets/bowl.png',
    temperature: 22.5,
    humidity: 80,
    status: '20g',
    desc: '猫粮余量',
    actions: [
      { icon: '🥣', label: '加粮', active: true },
      { icon: '🔄', label: '换粮' },
      { icon: '⏰', label: '定时0' },
      { icon: '🗑️', label: '清仓0' }
    ],
    records: [
      { time: '13:00', event: '加粮', count: '20g' },
      { time: '09:00', event: '换粮', count: '1次' }
    ],
    notion:"今天加水4次"
  },
  {
    id: 3,
    name: '猫咪的饮水机',
    img: '/assets/drink.png',
    temperature: 21.8,
    humidity: 76,
    status: '正常',
    desc: '循环水源',
    actions: [
      { icon: '🚰', label: '检测', active: true },
      { icon: '⏰', label: '定时0' },
      { icon: '🗑️', label: '清仓0' }
    ],
    records: [
      { time: '15:00', event: '检测', count: '1次' },
      { time: '08:00', event: '换水', count: '1次' }
    ],
    notion:"今天加水4次"
  }
]
