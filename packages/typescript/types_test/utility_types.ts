


// interface Props {
//   a?: number;
//   b?: string;
// }
// const obj: Props = { a: 5 };
// // const obj2: Required<Props> = { a: 5 };


// interface ITest {
//   id: number;
// }
// const todo: Readonly<ITest> = {
//   id: 6789,
// };
// todo.id = 434

/* Record: Record

type IBook = 'yuwen' | 'math'

interface IProp {
  price: number;
  page_number: number
}

const math: Record<IBook, IProp> = {
  yuwen: {
    price: 29,
    page_number: 200
  },
  math: {
    price: 49,
    page_number: 100
  }
}

math.yuwen;
*/


/* Record: Pick

interface IBook {
  title: string;
  description: string;
  price: number;
}
type IBuyBook = Pick<IBook, "title" | "price">;

const buy: IBuyBook = {
  title:'typescript',
  price: 55
}
*/

/* Record: Exclude<Type, ExcludedUnion>

type IPrice = Exclude< number | string | (()=> number ), Function>

type IName = Exclude< '小李' | '小张' | (()=> string), Function>

*/

/* Record: Extract<Type, Union>
type IName = Extract< '小李' | '小张' | (()=> string), '小张'| '小李' | boolean>

type IPrice = Extract< number | string | (()=> number ), string | boolean>

*/

/* Record: NonNullable<Type>
type IPrice = NonNullable< number | string | undefined | null>
*/

/* Record: Parameters
declare function f1(arg: { a: number; b: string }): void;
type T0 = Parameters<() => string>;
type T1 = Parameters<(s: string) => string>;
type T2 = Parameters< <K>(args: K) => K>;
type T3 = Parameters< typeof f1>
type T4 = Parameters<any>;
type T5 = Parameters<never>;
type T6 = Parameters<null>;
*/


/* Record: ConstructorParameters
type T0 = ConstructorParameters<FunctionConstructor>
type T1 = ConstructorParameters<ErrorConstructor>
type T2 = ConstructorParameters<StringConstructor>
type T3 = ConstructorParameters<RegExpConstructor>
type T5 = ConstructorParameters<any>
*/

/* Record: ReturnType
declare function fn(): { a: number; b: string, c: Function };

type T0 = ReturnType<() => string>;
type T1 = ReturnType<(s: string) => void>;
type T2 = ReturnType<<T>() => T>;
type T3 = ReturnType<<T extends U, U extends string[]>() => T>;
type T4 = ReturnType<typeof fn>
*/

/* Record: InstanceType
class K {
  constructor(){}
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof K>
*/