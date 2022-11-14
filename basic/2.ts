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
