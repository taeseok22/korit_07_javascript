document.write('자바스크립트 js 파일에 위치<br>')

// var greeting = 'Hello, World';

// console.log('Hello, JavaScript')
// console.log(greeting);

// var x = 5;
// var y = 6;
// var z = x + y;    // 11이 저장된다.
// console.log(z);

// var x = 7;
// z = x + y;      // 13이 저장된다.
// console.log(z);

// console.log(a);
// var a = 10;
// console.log(a);

// let car;    // 변수 선언
// console.log(car);

const person = {
  firstName: 'Jone',
  lastName: 'Doe',
  age: 20,
  eyeColor: 'blue'
};

// 객체의 출력
console.log(person);

// 객체의 property 수정 방법 # 1 
person.firstName = '일';    // 이건 Java에서의 field 수정법인거 같다
person.lastName = '김';   // access modified 배우기 이전에
console.log(person);

// 객체의 property 수정 방법 # 2
person['eyeColor'] = '검은색';    // 이건 Java에서의 Map 수정 방법인 것 같다.
console.log(person);

console.log(typeof x);    // string
console.log(typeof y);    // number

console.log(typeof {x:1, y:2});   // object
// console.log(typeof {1, 2, 3});   // object

// let x = 2;
// let y = 3;
// z = x ** y;     // 2의 3제곱을 의미한다. 2^3
// console.log(z);   // 8

// 비교 연산자 부분
let a = 3;
let b = '3';

console.log(a == b);    // true
console.log(a === b);    // false

let point = 92;
let grade = (point >= 90) ? 'A' : (point >= 80) ? 'B' : 'C';
console.log(grade);