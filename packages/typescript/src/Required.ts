// 将一个对象的所有key 变为必要类型
type MyRequired<Type> = {
  [K in keyof Type]-?: Type[K]
}