//for-in 속성문
//for(속성명 in 반복할 대상){}

var store = {snack: 1000, flower: 4000, coffee:5000};

for (var item in store){
  if (!store.hasOwnProperty(item)) continue;
  
  console.log(item+`는 가격이`+store[item] + `이다`);
}

