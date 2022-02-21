
// 将一个类型变为可选类型
type MyPartial<TypeA> = {
  [K in keyof TypeA]?: TypeA[K]
}