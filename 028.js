// 객체 이해하기-1
// 객체는 값들을 그룹으로 묶은 데이터 모음
//키 와 값을 한쌍으로 정의하며 이를 속서잉라 부른다
var family = {
    'address': 'busan', 
    //`` 백틱으로 넣으면 에러발생 :Uncaught SyntaxError: expected property name, got template literal
    
  members: {},
  addFamily: function(age, name, role){
    this.members[role] = {
      age : age,
      name: name
    };
  },
  getHeadcount : function(){
    return Object.keys(this.members).length;
  }
};

family.addFamily(30, `chloe`, `aunt`);
family.addFamily(3, `lyn`, `niece`);
family.addFamily(10, `gangagi`, `dog`);
console.log(family.getHeadcount());

//객체와 json  매우 유사한 구조를 지닌 데이터 교환 형식이다.