


interface Props {
  a?: number;
  b?: string;
}
const obj: Props = { a: 5 };
// const obj2: Required<Props> = { a: 5 };


interface ITest {
  id: number;
}
const todo: Readonly<ITest> = {
  id: 6789,
};
// todo.id = 434

/* Record

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


/* Pick

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