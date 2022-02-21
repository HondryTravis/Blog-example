const { SyncBailHook } = require('tapable')


// SyncBailHook
// 遇到其中有返回值的就熔断执行，直接退出所有注册的任务队列

const hooks = new SyncBailHook(['arg1', 'arg2', 'arg3'])


hooks.tap('t1', (a1, a2, a3)=> {
  console.log('t1', a1, a2, a3)
  return true
})

hooks.tap('t2', (a1, a2, a3)=> {
  console.log('t2', a1, a2, a3)
})

hooks.call(1, 2, 3)