export const catFormFields = [
  { key: 'nickname', label: '昵称', type: 'input', required: true },
  { key: 'breed', label: '品种', type: 'select', required: true },
  { key: 'gender', label: '性别', type: 'select', required: true, options: ['男', '女','隐藏'] },
  { key: 'birthday', label: '生日', type: 'date', required: true },
  { key: 'weight', label: '体重', type: 'input', required: true },
  { key: 'device', label: '设备', type: 'select', required: false }
]
