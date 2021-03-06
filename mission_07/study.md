# OOP WITH ES Classes
## Why?
소프트웨어의 크기가 커지면 이를 객체 단위로 만들어서 큰 그룹을 지어 프로그래밍을 할 수 있다.  
Java나 C#과 같은 객체지향프로그래밍 언어에서는 이를 필수로 하지만, 자바스크립트는 객체지향언어라고 하기는 어렵다.(객체없이 프로그래밍이 가능함으로)  
하지만 자바스크립에서도 객체지향프로그래밍이 가능하며, 이를 활용해서 현업에서는 많은 프로그래밍을 만들어서 운영하고 있다.  
현대의 프로그래밍에서는 객체단위로 프로그래밍을 하는 것이 여러가지 선택지 중 하나이다.(참고로 자바스크립트에서도 함수형프로그래밍 방법이 많이 활용되고 있고, 객체지향과 함수형프로그래밍 패러다임을 섞는 경우도 많다.)

## 학습 목표
* 자바스크립트에서 객체는 어떻게 만드는가 안다
* OOP 라는 것은 무엇이고, 어떻게 프로그램을 설계 해야 하는지 기초적인 지식을 안다.

## 배경 지식
### 객체
모든 것이 객체다!?  
어떠한사물 === Object.  
현실세계를 인지하면서 프로그래밍을 하자!에서 출발  
=> 상상하고,볼수있고,만질수있는 것들은 모두 객체이다.

### 객체의 구성
모든객체는 속성(property)과 행위(method)를 가질 수 있음.
* 속성 : 사람의 키,나이,몸무게
* 행위 : 움직이다, 먹다, 자다, 공부하다
```javascript
Class {
  this.height = 180;  //property
  this.age = 22;  //property
  eat = function() {}  //method
}
```
업계에서 현실적으로 같이 쓰는 용어
* 속성, 필드, property는 같은말.
* 함수, 메서드도 같은말.

### 클래스와 객체
class는 어떠한 객체를 표현하기 위해, 일반화된 형태로 만든 것으로 볼 수 있다.  
어떠한 집합이나 분류에 가깝다.(사람, 동물, 자동차 등)  
객체는 인스턴스라고도 하며, class를 통해서 얻을 수 있는 것으로 볼 수 있다.  
따라서 유일한 사물이라고 볼 수 있으며, 꼭 그런것은 아니지만 실체에 가깝다(crong, 사자, 벤츠)  
우리가 자주 사용하는 console.log 에도 객체와 메서드가 있다.
* console => 객체(인스턴스)
* log => 메서드(함수)

### OOP 핵심 개념
객체지향언어에서는 다음의 항목을 중요하게 다룬다.
* Class
* 캡슐화(Encapsulation)
* 상속(Inheritance)
* 다형성(polymorphism)
* 추상화(abstraction)
이 부분을 JavaScript언어가 얼마나 지원하는지 부터 한번 살펴본다.

#### 1. Class
JavaScript는 class 없이 프로그래밍이 가능하다.  
또한 class가 존재하고 있지만, 함수가 일종의 클래스 역할을 한다고 할 수 있음.

#### 2. 캡슐화(Encapsulation)
내부에서만 알고 있으면 될 것을, 외부에 공개하지 않는다. 필요한 것은 외부에 접근을 허용한다.  
private, public 개념.  
JavaScript는 최근 ES Modules를 통해서 접근제어를 할 수 있다.  
참고로, ES Modules 방식이 아니여도, 함수를 활용한 module pattern으로 private자원을 보호할 수 있다.

#### 3. 상속(Inheritance)
공통부분을 분리해서 재사용하려는 목적.  
상위클래스와 하위클래스간에 연결을 짓는다.  
kind of 관계이다.  
* 크롱 ->사람, BMW -> 자동차, 포크레인->중장비
* 아들 -> 아빠(X)
자바스크립트에서는 prototype기반의 객체간 연결 chain을 통해 상속구조를 만들 수 있다.  
ES6 Classes 에서는 extend키워드를 통해 명시적으로 상속을 지원하는데, extend는 prototype을 통한 상속구조이다.

#### 4. 다형성(polymorphism)
다양한 성질로 동작하는 것을 말한다.  
overriding을 통한 재정의, overloading을 통한 메서드 중복정의를 할 수 있다.  
JavaScript는 prototype chain내에 동일한 메서드를 두고 overriding구현은 가능.  
하지만, interface가 없고, method overloading을 공식지원하지 않음.  
(다만,어떠한 타입을 체크해서, 다른 메서드를 호출해서 실행하도록 구현할 수는 있음)  
JavaScript에 다형성이 존재하냐?는 중요한 논쟁거리는 아님.  
다형성을 목적으로 구현할 필요는 없으나, 여러가지 객체가 비슷한 역할을 하는 같은 이름의 메서드를 만들어서 사용하는 경우, 이를 다형성이라고 할 수 있으며 (예를들어 여러종류의 자동차클래스들이 각각 '달린다' 라는 메서드를 만듬) 자바스크립 역시 그런점에서 다형성 지원은 당연히 된다고 할 수 있음.

#### 5. 추상화(abstraction)
필요한 부분만을 선택해서 클래스를 만드는 것.  
'차'는 '버스'클래스와 '중장비'클래스로 구분지을 수 있는데, 버스와 중장비는 서로 다른 속성과 행위가 필요하다. 이렇게 필요한 부분을 선택해서 클래스를 만들 수 있고, 이를 추상화라고 함.  
JavaScript에서도 이를 표현하는건 당연히 가능!

### JavaScript OOP표현방식 - ES Classes
JavaScript 에서는 OOP 프로그래밍 구조를 만들기 위해서 객체를 표현하는 다양한 방식이 존재한다.  
가장 친숙하고 현대화된 방식은 CLASS 문법을 사용하는 것이다. CLASS 문법은 ES2015에 추가된 것으로 ES Classes라고 일컫는다.  
JAVA 와 같은 객체지향프로그래밍 언어에서 표현하는 것처럼 ES Classes역시 class안에 property 와 method가 존재한다. 또한 constructor도 존재한다.  
constructor(생성자)는 class를 new키워드로 호출할때 자동으로 실행되고, 자동으로 객체(이렇게 생성되는 객체는 instance라고도 한다)를 반환한다.
```javascript
class Health {
  constructor(name, healthTime) {
    this.name = name;
    this.healthTime = healthTime;
  }

  showHealth(){
     console.log(this.name + "님, 오늘은 " + this.healthTime + "에 운동을 하셨네요");
  }

}

const ho = new Health("crong", "12:12");
ho.showHealth();
```

### JavaScript에서 객체나누기는 어떻게 해야할까?
UI개발에서는 객체(class)를 어떤것을 만들어야 할지, 그리고 어떻게 통신을 해야 할지 고민이 될 수 있다.  
보통 화면에 보이는 영역을 구분한 뒤에, 각각을 하나의 객체로 나누는 것이 좋다.  
객체의 크기를 어떻게 나눌지는 선택적인 문제다. 작은 크기로 역할을 나눠서 각각을 객체로 만들 수도 있고, 그렇지 않을 수도 있다.  
참고로 현대의 Framework개발에서는 UI요소를 component 단위로 작게 만들고 이를 객체 또는 함수로 표현해서 개발한다.