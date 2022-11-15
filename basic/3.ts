let union: string | number;

union = 'Hello type!';
union = 123;

// union = false; 에러가 뜬다.
// 2개 이상의 타입을 허용하는 경우 이것을 유니언이라고 한다. '|'를 통해 구분한다.

interface IUser {
  name: string;
  age: number;
}

interface IValidation {
  isValid: boolean;
}

const heropy: IUser = {
  name: 'Heropy',
  age: 36,
  // isValid: true 에러가 뜬다.
};

const neo: IUser & IValidation = {
  name: 'Heropy',
  age: 36,
  isValid: true,
};

// 2개 이상의 타입을 조합해서 쓰는 것을 인터섹션이라고 한다. 자주 사용하는 방법은 아니다.

let myFunc: (arg1: number, arg2: number) => number;

myFunc = function (x, y) {
  return x + y;
};

function otherFunc(arg1: number, arg2: number): number {
  return arg1 + arg2;
}

// 화살표 함수를 이용해 타입을 지정할 수 있다. 인수 타입과 반환 값의 타입을 입력한다.
