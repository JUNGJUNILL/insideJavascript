//Object 생성자 함수르 객체 생성 하는 방식 
var foo =new Object(); 

foo.name = '정준일'; 
foo.age  =31; 
console.log(foo); 


//객체 리터럴 방식으로 객체 생성 하는 방식
var foo01 = {
    name: '정준일', 
    age :  '31', 
}
//프로퍼티 갱신
foo01['name'] = '주닐정'; 
console.log(foo01); 

for(var prop in foo01){
    console.log(prop ," : ", foo01[prop]); 
}

//객체 프로퍼티 삭제 
//객체의 프로퍼티만 삭제되고 객체 자체는 삭제못함
delete foo01['name']; 
console.log('delete name=>' , foo01); 