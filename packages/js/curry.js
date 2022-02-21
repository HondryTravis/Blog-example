function curry(fn) {
  const paramsLength = fn.length;
  let params = [];

  return function innerFn(...args) {
    // 更新变量长度
    params = [
      ...params,
      ...args
    ]

    // 判断是否和当前参数数量相等
    if (params.length === paramsLength) return innerFn;
    // 相等执行
    else return fn.apply(this, params);
  }
}

function sum(a, b, c) {
  return a + b + c
}


var t = curry(sum)

t(1)(2)(3) // 6