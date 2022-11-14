let isBoolean: boolean;
let isDone: boolean = false;

// true / false

const num: number = 10;
const float: number = 3.14;
const hex: number = 0xf00d;

// 숫자, 부동 소수점 값, 2진수, 8진수 리터럴도 지원한다.

const str: string = 'hello';

// 문자열, ', ", 템플릿 문자열도 지원한다.

const sports: string[] = ['soccer', 'baseball', 'basketball'];
// or
const anotherSports: Array<string> = ['soccer', 'baseball', 'basketball'];

// 배열을 나타낸다. 위와 같이 두가지 방법이 있다.

const sportsAndNumber: (string | number)[] = ['soccer', 1];

// 유니언 타입 (|)를 이용해 해당 타입들을 동시에 가지는 배열도 선언할 수 있다.

const something: any[] = [1, 2, 'string', false];

// 무엇이 들어갈지 단언할 수 없다면 any를 사용하여 모든 타입을 넣을 수 있다 (근데 자주 쓰면 타스의 의미가 퇴색되는 걸로 알고 있음)

interface ISports {
  name: string;
  remainTickets: number;
  soldOut: boolean;
}

const sportsArr: ISports[] = [
  {
    name: 'soccer',
    remainTickets: 0,
    soldOut: true,
  },
  {
    name: 'baseball',
    remainTickets: 10,
    soldOut: false,
  },
  {
    name: 'basektball',
    remainTickets: 20,
    soldOut: false,
  },
];

// interface를 이용하여 새로운 타입을 만들 수 있다.

let anotherNum: readonly number[] = [10, 20];

// readonly를 이용하여 읽기만 할 수 있는 배열 혹은 튜플을 만들 수 있다
