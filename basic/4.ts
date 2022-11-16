// 타입 선언이 되어 있지 않은 경우, 타입스크립트는 타입을 추론해 제공한다.

let someNum = 12;

// someNum = 'Hello Type!'; 에러가 뜬다.
// 숫자로 선언되었기에 number 타입으로 추론되었기 때문

let otherNum = 12; // 1.

function add(a: number, b = 2) {
  // 2. b는 number로 설정된다.
  return a + b; // 3. add 함수는 number로 설정된다.
}

// 타입 스크립트가 타입을 추론하는 경우는 3가지다.
// 1. 초기화된 변수
// 2. 기본값이 설정된 매개 변수
// 3. 반환 값이 있는 함수

function someFunc(val: string | number, isNumber: boolean) {
  if (isNumber) {
    // val.toFixed(2); 에러가 뜸, isNumber로 우리가 val이 number type인 걸 안다고 해도 컴퓨터는 이걸 모르기 때문
    (val as number).toFixed(2); // 1
    (<number>val).toFixed(2); // 2
  }
}

// val이 유니언 타입으로 문자열이거나 숫자일 수도 있을 때, 컴퓨터는 이를 추론할 수가 없음.
// 따라서 '타입 단언'을 이용하여 상황을 더 잘 이해하고 있는 프로그래머가 타입을 단언해주어야 함.
// 2. 방식은 JSX를 사용하는 경우 파싱에서 문제가 발생할 수 있고, tsx에서 사용이 불가능함

function fnE(x: number | null | undefined) {
  return x!.toFixed(2);
}

// '!'를 이용하는 Non-null 단언 연산자를 통해 피연산자 Nullish(null 혹은 undefined)가 아닌 것을 단언할 수 있음.

function otherFunc(val: string | number, isNumber: boolean) {
  if (isNumber) {
    (val as number).toFixed(2);
    isNaN(val as number);
  } else {
    (val as string).split('');
    (val as string).toUpperCase();
    (val as string).length;
  }
}

// 타입을 매번 보장하기 위해 단언을 여러 번 사용하는 경우가 있다.

function isNumber(val: string | number): val is number {
  return typeof val === 'number';
}
