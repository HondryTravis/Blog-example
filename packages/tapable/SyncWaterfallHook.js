const { SyncWaterfallHook } = require('tapable')

// 瀑布流钩子函数
// 函数的返回值可以一直按照参数传递
// 如果其中某个返回值发生改变，传递的值也发生改变
const hooks = SyncWaterfallHook(['arg1', 'arg2', 'arg3'])

hooks.tap('water1', (a1, a2, a3)=> {
  console.log('water1', a1, a2, a3)
  return 'w1'
})

hooks.tap('water2', (a1, a2, a3)=> {
  console.log('w2', a1, a2, a3)
  return 'water2'
})

hooks.tap('water3', (a1, a2, a3)=> {
  console.log('w3', a1, a2, a3)
})

hooks.call(1,2,3)