2021.11.03  

# 배열과 객체
## Why?
프로그래밍은 결국 많은 데이터를 잘 다루는 것이기도 하다. 알고보면 view계층의 작업역시 데이터에. 의해서 변경되고 렌더링 되는 것이다.  자바스크립트의 대표적인 자료형태는 객체와 배열을 통해 자료를 다양하게 처리하는 연습을 할 줄 알아야 한다.

## 학습 목표
함수 그리고 배열과 객체까지를 엮은 프로그래밍을 할 수 있다.

## 배경 지식
### 1. 객체 & 배열탐색
#### 객체(object)
* JavaScript로 데이터를 표현하기 위해서는 Array, Object를 사용해야 한다.
* object는 key, value 구조의 자료구조. (es2015에서는 Map이라는 자료구조도 추가됨)
* object는 {} 로 자료를 표현하며, 서버와 클라이언트 간에 데이터를 교환할때 Object형태와 비슷한 방법으로 JSON이라는 데이터 포맷으로 데이터를 교환한다

#### 객체선언
key값에는 따옴표가 필요하지 않다.
```javascript
const obj = { name : "crong", age : 20} 
```
참고 : [https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects#객체_생성하기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects#객체_생성하기)

#### 객체에 데이터 추가/삭제
```javascript
const myFriend = {key : "value"};

//value 출력 
console.log(myFriend["key"]);
console.log(myFriend.key);

//추가
myFriend.age = 34;

//추가한 정보 출력
console.log(myFriend.age);
```
점 표기법(dot notation)이 [] 를 사용한 방법보다 편의상 좀더 사용된다.

#### 객체 탐색
객체를 탐색하는 방법은 여러가지가 있다.  
아래 다음 방법을 자세히 찾아서 공부해보자.  
for - in 을 사용한 방법,  
Object.keys(), Object.values(), entries() 와 같은 메서드  
Object.keys()와 배열메서드(forEach)로 순회 하는 방법 등

#### 배열의 탐색
객체를 다루다보면, 배열과 함께 다루는 경우가 많다.  
따라서 배열의 탐색 방법과 배열의 다양한 메서드를 다시한번 학습해두자.
* forEach, map, filter, reduce
* 이 메서드들을 사용하면 번잡한 반복문을 쓰지 않고도 배열을 순회하면서 어떤 목적을 달성할 수 있다.
다른 함수를 받아서 처리하는 higher order function이다.  
reduce 메서드의 동작방식은 약간 차이가 있다.  
하지만 이 메서드는 서버에서도 클라이언트에서도 매우 유용하게 많이쓰는 메서드 임으로 잘 익히는게 좋다. 많은 예제를 돌리면서 reduce를 정복하고 넘어가길 바란다.  
참고(이런 사이트는 검색하면 많다)  
: [https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad)

## 정리
객체와 배열은 가장 많이 다루게 되는 자바스크립트 자료구조이다.  
프론트엔드와 백엔드 모두에서 골고루 이를 다루는 일이 비일비재하다. 특히 배열의 함수형메서드들에 대해서 잘 다루도록 많은 연습이 필요하다.  
점점더 그 유용성이 커지고 있는 함수형 프로그래밍을 하는데도 중요한 기초지식이 된다.  
혹시 아직도 foreach/filter/map/reduce를 잘 사용하지 못하겠는가? 더 많은 연습을 하자.

## 공부할 용어
* 컨벤션 (convention)
* git 기반 형상관리
* Algorithm
* API
* Arguments
* Object
* OOP (Object oriented programming)
* Class
* CLI (Command line interface)
* data types
* Exceptions
* Expression vs statements
* https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression
* Framework
* Front-end / Back-end

## 에러메시지
[https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error)