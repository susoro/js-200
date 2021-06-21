// 자료형 변환 이해하기

console.log(`5` + 1); //사칙연산에서는 항상 문자형으로 반환된다.
console.log(`5` - 1);
console.log(`5` * 2);
console.log(`there is ` + 5);
console.log(`five`*2);

console.log(`-연산자를 활용한 자료형 변환`);
var str = 5 +`1`;
console.log(str);
console.log(typeof str);


var num = +str; //단항 양수+ 를통해 문자형을 숫자형으로 변환할수가 있다.
console.log(num);
console.log(typeof num);

console.log(`- 함수를 활용한 자료형 변환`);
str = String(num);
console.log(str);
console.log(typeof str);

num = Number(str);
console.log(num);
console.log(typeof num);
