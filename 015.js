// 반복문 while

var hometown =[  //변수 hometown 을 선언한다. 변수에는 객체 자료형 요소가 4개 들어있는 배열을 할당 
  {name:'수경', city:'찐경상도'},
  {name:'경수', place:'양산', city:'경상도'},
  {name:'수경수', place:'울산', city:'경상도'},
  {name:'수경경', place:'마산', city:'경상도'}
];

var isHometown = function(h , name){//인자값을 h, name을 받는 isHometown을 선언한다. 
  //h,name 이 다른경우, false를 반환하여 함수를 종료시킨다. 값이 동일하면 출력
  console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name}을 찾습니다.`);

  if (h.name == name){
    console.log(`${h.city}의 고향은 ${h.city} ${h.place}입니다.`);
    return true;
  }
  return false;
}


var h; //배열의 앞에서부터 값을 하나씩 빼내오는 함수이며, 
while(h = hometown.shift()){
  if(!h.name || !h.place || !h.city) continue;

  var result = isHometown(h, '수경');
  if(result) break;
}

var i = 0;
var names = [`수경`,`경수`,`수경수`,`수경경`];
var cities = [`부산`,`경남`,`경남`,`경남`];

do{
  hometown[i] = {name : names[i], city:cities[i]};
  i++;
}while(i<4);
console.log(hometown);