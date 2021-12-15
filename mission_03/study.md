2021.11.08  

# 해시맵
## hashing!
<img src="./hash_img1.png">

## hash function ?
* 동일한 키는 동일한 값을 생성해야 한다.
* 시간복잡도가 O(1)이다.
* 배열의 범위를 골고루 활용되야 한다.
**특징 : 데이터 관리에 유용한 자료구조.**

## 과연 어디에 쓸까?
* 중복없는 유니크한 정보가 필요할 때.
    * 깃 commit 정보.
    * 블록체인(어마어마한 모든 거래 기록을 어떻게 보관하지?)) - 용량도 작아짐.
* 데이터가 훼손되지 않음을 보장해야 할때 (무결성)
    * 전자서명
    * 인증용 토큰(JWT)에서의 서명(signature)
* 브라우저 로컬스토리지

## hash function 구현은?
* 일반적으로 중복된 데이터가 없어야 한다.
* 일정한 크기로 hashcode생성.
* 다양한 연산을 조합해서 해쉬함수를 만듦.
    * ASCII 값과 소수(prime number)를 활용한 방법

## 충돌방지는?
* Chaining
    * 버킷하나에 여러개의 entry 가 존재. (이중배열)
* Linear Probing (선형탐색)
    * 빈곳을 찾아서 계속 증가시키며 탐색
    * Quadratic. probing(제곱탐사)이라는 방법도 있음.
    * 이중해싱도 존재(같은 해쉬결과라도 이동폭(h2)의 차이를 두고서. 충돌을 방지하는 기법)

## hashMap에서 최대값이나 최소값을 구하는 것은 효율적일까요?
* 다 돌려본다?
* binary search 등이 좀더 유리할 듯

## JavaScript map APIs
Map collections에 접근하기 위해서, 아래와 같은 method를 제공한다.
* has, get, set, delete, clear, size(property)...
* 어떻게 동작하는지 사용해보자.

## MAP(hashTable) vs. Object
* 전체 탐색하는 일을 해야 하는 경우 매우 느림. (최대값, 정렬, 재배치 등)
* set, get 등의 작업은 아무래도 MAP이 상대적으로 유리.

# Prototype 객체
아래 내용은 (객체지향프로그래밍 설명) 의 일부 내용임

## 객체표현방식 prototype pattern
(가장 중요한 부분으로 내용이 길다. 🚂)  
constructor 패턴과 유사하나,  
메서드를 prototype객체에 보관해서 constructor pattern보다는 메모리 효율 성에서 매우 유리함.
```javascript
const Health = function(name, healthTime) {
  this.name = name;
  this.healthTime = healthTime;
}

Health.prototype.showHealth = function() {
  console.log(this.name + "님, 오늘은 " + this.healthTime + "에 운동을 하셨네요");
}

const ho = new Health("crong", "12:12");
ho.showHealth();
```
ho 라는 객체를 열어서 prototype의 어떻게 실제 존재하는지도 들여다 보자.  
또한 ho2로 만들어진 prototype객체의 메서드와 ho의 prototype객체의 메서드가 서로 같은 메모리 주소를 참조하는지도 확인해보자. (=== 으로 비교)

#### 이렇게 만들어진 객체 들여다보기.
myHealth 개발자도구의 콘솔창에서 열어보면 다음과 같다.
```javascript
myHealth => 
    name : "달리기", 
    lastTime : "23:10", 
    > __proto__ : Object
        showHealth: ()
        > __proto__: Object  
```
proto 는 prototype객체를 표현한 것이고,  
모든 객체는 prototype으로 연결되어 있어, prototype안에 있는 어떠한 메서드를 사용하면, prototype을 타고 올라가면서 찾는다.  
이것을 prototype체인이라고 한다.

#### 왜 prototype?
prototype은 효과적으로 동작.  
생성자를 통해 생성된 객체(인스턴스)들이 여러개 있어도,  
prototype에 연결된 객체들(movieObject)는 동일한 메모리 공간에서 효율적으로 재사용 됨.  
즉, 두 객체의 prototype은 같음.
```javascript
myHealth.__proto__ === myHealth2.__proto__  //true
myHealth2.__proto__ === myHealth3.__proto__  //true
//__proto__ 객체는 자바스크립트 내부에서만 사용되는 속성이다.
```
prototype객체는 최상위 Object까지 연결되어 있음.  
prototype연결고리를 만들어서 객체간의 상속관계를 만들 수 있음.

#### prototype을 사용한 예제
두 개의 모듈을 생성자 역할을 하는 함수를 만들고, 각각 생성자에 prototype속성에다가 메서드를 추가하는 예제이다.  
이처럼 class없이도 구현할 수 있다.
```javascript
//VM 모듈
var VM = function(elBase) {
   this.elBase = elBase;
	 this.init();
}

VM.prototype = {
  init : function() {
	  this.elBase.addEventListener("click", this.clickListener);
    this.xxx.addEventListener("click", this.xxxxListener);
  }
}

//Wallet 모듈
var Wallet = function(elBase) {
   this.elBase = elBase;
	 this.init();
}

Wallet.prototype = {
  init : function() {
	  this.elBase.addEventListener("click", this.clickListener);
    this.xxx.addEventListener("click", this.xxxxListener);
  },
	run : function() {
    //blah....
  }
}
```

#### 객체표현 - prototype 기반 상속
Object.create는 직접적으로 prototype키워드를 사용하진 않지만, Prototype object를 만드는 것과 동일.
```javascript
const healthObj = {
  showHealth : function() {
    console.log(this.name + "님, 오늘은 " + this.healthTime + "에 운동을 하셨네요");
  }
}

const ho = Object.create(healthObj, {
   name: { value: "crong" },
   healthTime: { value: "12:22" } 
})

ho.showHealth();
```
Object.create는 prototype기반 객체연결(상속형태)을 좀더 매끄럽게 사용하기 위해 탄생했다고 이해할 수 있음.  
Object.create를 사용하면 객체연결구조가 잘 만들어짐.  
하지만 이 방법은 많이 쓰이지 않고 있는데 이유는, ES6 Classes의 extend를 사용해서 이제 보다 쉽게 클래스간 상속 구조를 만들 수 있게 됐기 때문.

# 수업-1108
## 시간 복잡도란 ?
* 입력값이 증가할때마다 시간이 얼마나 걸리는 지.
* 값이 커질수록 소프트웨어의 성능이 어떤지 판단.
* 이중 루프의 시간 복잡도는?
* 정렬된 이진 트리 검색의 시간 복잡도는?

## 공부할 용어
* API
* CLI
* 디버깅
* database
* Mysql
* 인터프리터
* 파서 , 파싱
* 런타임
* 의존성
* 결합도
* 콜스택
* 렌더링
* 캐시
* 웹서버, 웹 애플리케이션 서버

## hashing!
어떤 문자열(key)를 받아서 index로 사용할 수 있는 정수형 숫자로 변환 생성하는 함수
### 1. hash function 특징
* 동일한 키는 동일한 값을 생성한다.
* 해시된 값은 알고리즘이 좋다면 고유한 값이 될 수 있다.
* 해시된 값은 그 길이가 고정이다.
* 역으로 원본값을 알아낼 수 없다.
* 데이터 검색이 빠르다. 검색/삭제시에 시간 복잡도가 보통 O(1)이다.
### 과연 어디에 쓸까?
* 동일한 키는 동일한 값을 생성한다.
    * 무결성이 필요한 곳
    * block chain 의 거래 장부.
    * 전자서명
    * 인증용 토큰(JWT)에서의 서명(signature)
* 해시된 값은 알고리즘이 좋다면 고유한 값이 될 수 있다.
    * git commit id
* 해시된 값은 그 길이가 고정이다.
    * Block chain
    * 전자서명
    * git commit id
* 역으로 원본값을 알아낼 수 없다.
    * block chain
    * 전자서명
    * 비밀번호 저장
* 데이터 검색이 빠르다. 검색/삭제시에 시간 복잡도가 보통 O(1)이다.
    * Map 자료구조

### hash function 구현은?
* 일반적으로 중복된 데이터가 없어야 한다.
* 일정한 크기로 hashcode생성.
* 다양한 연산을 조합해서 해쉬함수를 만든다.
    * ASCII 값과 소수(prime number)를 활용한 방법

### 충돌 방지는?
이런 상황에서 충돌이 발생한다.
* 해시함수는 다른 해시결과값 임에도 동일한 index를 갖게 될 수 있다.
* 해시함수는 다른 key값 임에도 같은 해시 결과가 나올 수도 있다.
같은 index일때 아래와 같이 메모리의 빈 자리를 찾아서 할당해야 한다.
* Linear Probing (선형탐색)
    * 빈곳을 찾아서 계속 증가시키며 탐색
    * Quadratic. probing(제곱탐사)이라는 방법도 있음.
    * 이중해싱도 존재(같은 해쉬결과라도 이동폭(h2)의 차이를 두고서. 충돌을 방지하는 기법)
* Chaining
    * 버킷하나에 여러개의 entry 가 존재. (이중배열)

### hashMap에서 최대값이나 최소값을 구하는 것은 효율적일까요?
* 다 돌려본다? O(1) ~ O(n)
* 검색만보면 정렬이 되어 있는 binary search 가 더 빠르게 검색이 된다.

### Map APIs (JavaScript기준 )
Map collections에 접근하기 위해서, 아래와 같은 method를 제공한다.
* has, get, set, delete, clear, size(property)...

### Map(hashTable) vs. Object
* 전체 탐색하는 일을 해야 하는 경우 매우 느림. (최대값, 정렬, 재배치 등)
* set, get 등의 작업은 아무래도 Map이 상대적으로 유리.

### prototype

### 객체란?

### 객체에 prototpye 속성은 왜 필요할까?