const { SyncHook } = require('tapable')

// 同步钩子函数调用
const hook = new SyncHook(['arg1', 'arg2', 'arg3']);

// 注册函数
hook.tap('t1', (a1, a2, a3)=> {
  console.log('t1', a1, a2, a3);
})

hook.tap('t2', (a1, a2, a3)=> {
  console.log('t2', a1, a2, a3);
})

hook.tap('t3', (a1, a2, a3)=> {
  console.log('t2', a1, a2, a3);
})

// 同步钩子函数通过 call 来调用
hook.call('1', '2', '3');