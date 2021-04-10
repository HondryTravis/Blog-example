
/* Record: keyof
type Point1 = { [x: number]: number, [y: string]: number };
type P1 = keyof Point1;
type Point1 = { x: number, [y: string]: number };
type P1 = keyof Point1;
// type P1 = number | string
*/

/* Record: typeof
function fn() {
  return {
    a: 1,
    b: 'name'
  }
}

let _name = '小李'

type T0 = typeof _name;

type T1 = ReturnType<typeof fn>
*/

/* Record: in keyof
type K = {
  x: string | number,
  y: string | number
}

type Point<O> = {
  [K in keyof O]: O[K]
}

var b: Point<K> = {
  x: 2,
  y: '32px',
  z: false // z error 不能将类型“{ x: number; y: string; z: boolean; }”分配给类型“Point<K>”。对象文字可以只指定已知属性，并且“z”不在类型“Point<K>”中。
}
*/
/*
class F {
  age: number
  name: string
}

type K1 = { [x: number]: number, b: string}

function prop<T extends object, K extends keyof  T>(obj:T, key:K){
  return obj[key];
}
*/