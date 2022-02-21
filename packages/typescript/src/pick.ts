
// 取出一些类型形成新的类型
type MyPick<S, C extends keyof S> = {
  [K in C]: S[K]
}