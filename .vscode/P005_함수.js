/*
함수 선언문 방식 
function abc(){}
    --호이스팅 가능

함수 표현식 방식 
var abc = function (){};
    --abc 변수는 함수 리터럴로 생성한 함수를 참조하는 변수이지 함수 이름이 아니다. (함수 변수)
    --function (){}은 이름이 없으므로 익명함수라고 부른다
    --세미콜론 사용 강력히 권고
    --호이스팅 불가능

기명 함수 표현식 방식 
var abc = function aaa(){}
abc() -- O 
      --자바스크립트 엔진이 var abc = function abc(){} 로 변경함 
      --함수 이름과 함수 변수의 이름이 abc로 같으므로, 함수 이름으로 함수가 호출되는 것처럼 보이지만, 
        실제로는 abc 함수 변수로 함수 외부에서 호출이 가능하게 된 것이다. 
      --재귀적으로 함수 호출이 가능하다. 

aaa() -- X --함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근이 불가능함 



------------------------------------------------------------------------------------------------------------------------------------------------



함수도 객체다. 

function add(a,b){
    return a+b; 
}

add.result = add(3,2)
add.status = 'OK'
add.hello  = 'KOREAN'

console.log(add.result) //  5
console.log(add.status) //  OK 
console.log(add.hello) //   KOREAN

함수를 생성할 때 함수 코드는 함수 객체의 [[Code]] 내부 프로퍼티에 자동으로 저장된다. 





변수나 프로퍼티의 값으로 할당 가능
var foo001 = 100; 
var bar    = function () {return 100;}; 

var obj = {}; 
obj.baz = bar; 
console.log(obj.baz()) // 100 


함수를 인자로 전달 가능 
var foo = function(func){
    func(); 
}

foo(function(){
    console.log('abc'); 
}).


함수의 프로토타입(__proto__)은 Function.prototype 이라고 한다
Function.prototype 객체가 가지는 프로퍼티 
    constructor 
    toString()
    apply()
    call()
    bind()

prototype 프로퍼티 
    모든 함수는 객체로서 prototype 프로퍼티를 가지고 있다. 
    __proto__ 와는 다른 것이다. 
    모든 객체에 있는 내부 프로퍼티인 __proto__는 객체 입장에서 자신의 부모 역할을 하는 프로토타입 객체를
    가리키는 반면, 함수 객체가 가지는 prototype 프로퍼티는 이 함수가 생성자로 사용될 떄, 이 함수를 통해 생성된
    객체의 부모 역할을 하는 프로토타입 객체를 가리킨다. 

*/

