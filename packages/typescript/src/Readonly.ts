type MyReadonly<Type> = {
  readonly [ K in keyof Type ] : Type[K]
}