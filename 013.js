// for( var i = 0; i<=10; i++){
//   console.log(i+`번째 반복스`);
// }


var homeTown = [
  {name:`수경`, place:`부산`, city:`경상도`},
  {name:`경수`, place:`울산`, city:`경상도`},
  {name:`수루`, place:`마산`, city:`경상도`},
  {name:`겨엉`, place:`양산`, city:`경상도`},
];

for (var i=0; i<homeTown.length; i++){
  var h = homeTown[i];
  if(!h || !h.city) continue;
  console.log(i +`번째 실행입니다`);
  if (h.name ==='수경'){
    console.log(h.name + `의 고향은` + h.city +``+h.place+`입니다`);
    break;
  }

}