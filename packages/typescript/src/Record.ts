type MyRecord<P extends PropertyKey, V> = {
  [K in keyof P]: V
}