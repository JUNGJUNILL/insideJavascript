//자바스크립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다. 
//이러한 부모 객체를 프로토타입(객체) 라고 부른다.

var foo = {
    name:'정준일',
    age : 31
}

console.log(foo.toString()); 

//자바스크립트의 모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]라는 숨겨진 프로퍼티를 가진다. 
//_proto_가 바로 숨겨진 [[Prototype]] 프로퍼티를 의미한다. 
//즉 foo 객체는 자신의 부모 객체를 _proto_라는 내부 프로퍼티로 연결하고 있는 것이다.

//객체 리터럴 방식으로 생성된 객체의 경우 Object.prototype 객체가 프로토타입 객체가 된다. 
//foo 객체의 __proto__ 프로퍼티가 가리키는 객체가 Object.prototype이며, 
//toString(), valueOf() 등과 같은 모든 객체에서 호출 가능한 자바스크립트 기본 내장 메서드가 포함되어 있다. 
//그 결과 foo 객체는 foo.toString()과 같이 자신의 프로토타입인 Object.prototype 객체에 포함된 다양한 
//메서드를 마치 자신의 프로퍼티인 것처럼 상속받아 사용할 수 있다. 


//배열 객체인 경우 Array.prototype 객체가 프로토타입 객체가 된다. 
//Array.prototype 객체는 배열에서 사용할 push(), pop() 같은 표준 메서드를 표함하고 있다. 
//Array.prototype 객체의 프로토타입은 Object.prototype 객체가 된다. 