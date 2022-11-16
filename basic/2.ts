let tuple: [string, number];

// tuple = ['a', 1];
// tuple = [1, 1] 타입 에러
// tuple = ['a', 1, 2] 길이 에러
// tuple = [1, 'a']; 타입 에러 (순서 문제)

// 튜플은 배열과 유사하지만, 배열과 다르게 정해진 타입의 고정된 길이를 가진다.
// 단, .push(), splice() 등을 통해 값을 넣는 건 막을 수 없다.
// 물론 readonly도 사용할 수 있다.

enum Week {
  sun,
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
}

console.log(Week.sun); // 0
console.log(Week[0]); // sun

// 열거형 enum은 숫자, 문자열 값 집합에 이름을 부여할 수 있다. 0부터 시작하며 1씩 증가한다.

enum Week2 {
  sun,
  mon = 22,
  tue,
  wed,
  thu,
  fri,
  sat,
}

// 이 경우에는 월요일 값에서 1씩 증가해서 화요일의 값이 23이 된다.

let any: any = 123;
any = 'Hi';
any = {};
any = null;

// Any는 모든 타입을 의미한다. Any를 쓰면 사실상 타입스크립트의 의미가 없어진다고 한다.

let u: unknown = 123;

// 알 수 없는 타입을 의미하지만, 다른 타입에는 할당할 수 없다.
// 이 역시 명확한 타입을 사용하는 것이 좋다.

let obj: object = {};
let arr: object = [];
let fn: object = function () {};

// 여러 타입의 상위 타입이기 때문에 유용하지 않다.

let objA: { name: string; age: number } = {
  name: 'hi',
  age: 123,
};

// 정확하게 타입 지정을 하기 위해 객체 프로퍼티 타입을 개별적으로 지정할 수 있다.
// 반복적으로 사용할 때는 interface 혹은 type을 쓰자.

// null과 undefined는 모든 타입의 하위 타입으로, 각 타입에 할당할 수 있다.

function hello(msg: string): void {
  console.log(`something ${msg}`);
}

// void는 일반적으로 값을 반환하지 않는 함수에서 사용한다.
// : void 위치는 함수가 반환 타입을 명시하는 곳이다.
// 실제로 값을 반환하지 않는 함수는 undefined를 반환한다.

function error(message: string): never {
  throw new Error(message);
}

// never는 절대 발생하지 않을 값을 나타내며, 어떠한 타입도 적용할 수 없다.
