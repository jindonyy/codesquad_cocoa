2021.11.01  

# Node.JS와 개발환경
## Why?
프로그래밍은 사실 디버깅의 연속이다. 디버깅은 학습을 통해서 배울 수 있다.

## 학습 목표
node.JS로 프로그래밍 하는 방법을 배운다.
node.JS의 모듈방식 프로그래밍(require, export)을 사용할 수 있다.
node.JS의 디버깅을 배운다.

## 배경 지식
### 프로그래밍 언어와 JavaScript
Compiled와 Interpretered 의 차이점은 무엇이지?  
다양한 프로그래밍 언어들은 각각의 특징을 따라 다양한 패러다임을 가지고 있다. 명령형,함수형, 객체지향 등등  
JavaScript언어는 script언어형태인데, 다양한 방식의 프로그래밍 패러다임을 가진 멀티패러다임 언어이다.
* imperative (명령형)
* functional (함수형)
* declarative (선언적)
* event-driven(이벤트중심)

### JavaScript는 어떻게 배울 수 있지?
API(Application Protocol Interface)는 다른 프로그래밍 간의 관계를 정의 하는 방법으로 알려져 있다.  
라이브러리(library)의 경우 그 메서드(method)에 대한 설명을 API Documents라고 한다. 줄여서 API Docs라고 많이 부른다.  
검색방법에 대한 몇 가지 노하우다.
* 구글에서 영어 검색.
* 영어권의 최신 버전의 문서를 본다.
* MDN이라는 사이트가 JavaScript에 대한 설명으로 유용하다.
* 메서드사용법(어떤 타입의 파라미터가 필수고, 옵션이지? 메서드는 어떤것을 반환하지?)을 정확히 알고 써야 한다.
* 영어 읽는게 어렵다면 example을 먼저 실행해보자.
* API Docs에서는 브라우저 지원(browser compatibility)범위에 대해서도 관심있게 보자.
* Stackoverflow 사이트에 친숙하자.

### NodeJS
NodeJS를 통해서 JavaScript를 브라우저 이외의 공간에서 실행할 수 있음. NodeJS는 v8엔진을 통해서 동작됨.  
ECMAScript문법에 따라서 구현가능. (ECMAScript는 JavaScript문법에 대한 명세)  
NodeJS를 통해서 JavaScript코드를 CLI를 통해서 실행할 수 있음.

### IDE
IDE는 통합개발환경이다. 무슨 약자일까?  
언어별로 어떤 IDE가 있는지 살펴보자. 또한 JavaScript에서 가장 인기 있는 IDE가 무엇인지 알아보자. VSCode이외에 또 어떤 것이 있을까?  
VSCode에서도 javascript코딩을 할 수 있고, nodejs를 통해서 javascript소스를 실행시킬수도 있음.  
VSCode 프로그램에서 개발하는 것을 추천한다.  
VSCode를 실행해서 javascript코드를 구현하고, 이를 vscode의 터미널 환경에서 실행해보자.

### 온라인 에디터
FE개발을 하다보면 코드를 간단히 테스트하고, 다른사람과 공유할 필요가 있을 수 있다.(stack overflow에서도 활용한다.)  
Codepen.io나 sandbox와 같은 사이트에서 프로그래밍 코딩연습을 해보자.

### VSCODE-NODEJS debugging
vscode에서 nodejs디버깅 방법을 익혀보자.  
공식홈페이지의 디버깅 방법을 공부한다.  
[https://code.visualstudio.com/docs/editor/debugging](https://code.visualstudio.com/docs/editor/debugging)  
[https://code.visualstudio.com/docs/editor/debugging#nodejs-articles](https://code.visualstudio.com/docs/editor/debugging#nodejs-articles)  

### NodeJS 의 module 방식의 프로그래밍에 대해서 공부해보자.
Modular programming 은 모듈방식으로 프로그램을 나누고, 이를 통해 복잡한 애플리케이션의 역할을 나눠서 문제를 해결한다. NodeJS에서도 이를 지원하다.
* require, exports !!
* 참고 : [https://nodejs.org/api/modules.html](https://nodejs.org/api/modules.html)
* 공식사이트의 튜터리얼을 따라해서 export 와 require를 사용해보자.

## 정리
개발환경은 개발자에게 아주 어려운 일이고 번거로운 일일 수 있다. 하지만 효율적인 개발을 위해서는 환경을 꾸준히 업그레이드 하면서 잘 만들어놔야 한다. 환경이 쾌적하고 효율적이면 코딩도 그만큼 즐겁다.  
디버깅과정을 통해서 프로그래밍의 특성을 더 빨리 배울 수 있다.

# 자바스크립트 함수
## Why?
커다란 문제를 잘게 나누는 것은 프로그래밍을 좀더 작은 단위로 나눠서 해결하는 관점에서 유용하다.  
가장 기본적인 단위가 함수라고 볼 수 있다. 함수를 중심으로 잘 나누는 것이 중요하다.

## 학습 목표
자바스크립트의 다양한 문법을 익히고, 함수단위로 프로그래밍 할 수 있다.

## 배경 지식
### 자바스크립트의 버전
* 자바스크립트 버전은 ECMAScript(줄여서ES)의 버전에 따라서 결정되고, 이를 자바스크립트실행 엔진이 반영한다.
* ES5, ES6(ES2015).. 이런식으로 버전을 일컫는다.
* ES6는 ES5문법을 포함하고 있어 하위호환성 문제가 없다. 2019년 현재 ES2015를 기준으로 개발하는 상황이다.
* Front-end의 경우, ES6와 같은 문법을 을 사용하고 싶지만, 브라우저 호환성문제가 있다면 코드를 transpiling 해서 배포하는 경우도 많다.

### 변수
변수는 var, let, const 로 변수를 선언할 수 있다. 어떤 것을 사용하는 가에 의해서 scope라는 변수의 유효범위가 달라진다.
우선 var를 사용해서 변수를 선언한다.
여러가지 type의 변수 선언방법을 확인해보자.
```javascript
var a = 2;
var a = "aaa";
var a = 'aaa';
var a = true;
var a = [];
var a = {};
var a = undefined;
```

### 연산자
연산자 우선순위를 표현하기 위해서는 ()를 사용하면 된다.  
수학연산자는 +,-,*,/,%(나머지) 등이 있다.  
논리 연산자, 관계연산자, 삼항연산자도 있음.
```javascript
//or 연산자 활용
const name = "crong";
const result = name || "codesquad";
console.log(result);
const name = "";
const result = name || "codesquad";
console.log(result);
```

### && 연산자
```javascript
var result = false && true;
```
이 코드의 결과는 false.  
이 결과에서 알 수 있듯이 &&연산자는 모든 값이 true인지를 확인하지만, 첫번째가 이미 false라면 그 이후의 값은 확인할 필요가 없음.

### 연산자 - 삼항연산자
간단한 비교와 값 할당은 삼항연산자를 사용할 수 있음.
```javascript
const data = 11;
const result = (data > 10) ? "ok" : "fail";
console.log(result);
```
주의 : 삼항연산자를 너무 긴 로직에서 사용하지 않도록 한다.

### 연산자 - 비교연산자
비교는 == 보다는 ===를 사용한다. ==로 인한 다양한 오류 상황이 있는데 아래 결과를 참고하자.
```javascript
0 == false;
“” == false;
null == false;
0 == “0”;
null==undefined;
```
이런 현상에 대해서는 자바스크립트를 이해하는데 어려움을 느낄 수 있다.  
이런 부분도 자바스크립트의 특징중 하나이며, 이유에 대해서 궁금해 할 필요가 있다.  
이 부분을 좀더 알기 위해서 암묵적인 형변환에 대해서 알아보자.

### 자바스크립트의 Type
자바스크립트 타입에는 다양한 것이 존재.
```javascript
> undefined, null, boolean, number, string, object, function, array, Date, RegExp, Symbol
```
타입은 선언할때가 아니고, 실행타임에 결정된다. 함수안에서의 파라미터나 변수는 실행될때 그 타입이 결정된다.  
타입을 체크하는 또렷한 방법은 없다. 정확하게는 toString.call 을 이용해서 그 결과를 매칭하곤하는데, 문자,숫자와 같은 기본타입은 typeof 키워드를 사용해서 체크할 수 있다.  
배열의 경우 타입을 체크하는 isArray함수가 표준으로 있다.(브라우저 지원범위를 살펴보고 사용해야 함)

### 비교문, 분기문, 반복문
이부분에 대해서 MDN의 문서를 찾아서 공부하도록 한다.

### for, while 이외의 반복문
배열의 경우 forEach와 같은 메서드를 통해서 좀더 쉽게 탐색할 수 있다.  
for-of를 통한 탐색도 자주 사용된다.  
(for-of를 따르는 타입은 배열이외에도 문자열등 더 많다. iterable object인 경우에 for-of를 사용할 수 있는데 이부분은 나중에 더 공부한다.)  
for-in은 객체를 탐색할때 사용한다.

### 문자열 처리
자바스크립트의 문자와 문자열은 같은 타입으로 취급.
```javascript
typeof "abc";  //string
typeof "a";    //string
typeof 'a';    //string. single quote도 사용가능.
```

### 문자열에 다양한 메서드가 있음.
```javascript
"ab:cd".split(":"); 		//["ab","cd"]
"ab:cd".replace(":", "$"); 	//"ab$cd"
" abcde  ".trim();  		//"abcde"
"뺉".charCodeAt(); 			//뭘까? 
```

### express & statements
expression(식) 과 statements(문) 의 차이는 용어이긴 하지만 그 차이를 알아둘 필요가 있다.  
expression은 값(value)를 생산해내고,  
statements는 프로그램 로직을 만들어낸다(조건문, 반복문 등)  
아래 내용을 참고하면 좋다.  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
[http://2ality.com/2012/09/expressions-vs-statements.html](http://2ality.com/2012/09/expressions-vs-statements.html)

### 함수 - 함수의 선언
함수는 여러개의 인자를 받아서, 그 결과를 출력한다.  
파라미터의 갯수와 인자의 갯수가 일치하지 않아도 오류가 나지 않는다.  
파라미터가 1개일때, 인자의 갯수가 0개라면, 파라미터(매개변수)는 undefined이라는 값을 갖게 된다. 값이 할당되지 않았기 때문이다.
```javascript
function test() { 
	console.log(printName()); 
	function printName() {
		return 'anonymouse';
	}
}
test() //anonymouse
```
위 함수 선언코드는 함수선언문이라고 한다.

### 함수 - 함수표현식
함수는 아래 printName과 같이 표현할 수도 있다. (함수가 표현식으로 표현한다는 것은 '값'으로 함수가 표현된다고 생각할 수 있다.)  
이렇게 표현하면 함수선언문과 달리 선언과 호출순서에 따라서 정상적으로 함수가 실행되지 않는다.
```javascript
function test() { 
	console.log(printName()); 
	var printName = function() {
		return 'anonymouse';
	}
}

test();
//TypeError: printName is not a function
```
오류내용을 보면 function이 아니라고 나왔다. 이유는 printName이 실행되는 순간 'undefined'으로 지정됐기 때문이다.  
자바스크립트 함수는 실행되기 전에 함수안에 필요한 변수값들을 미리 다 모아서 선언한다. 함수 안에 있는 변수들을 모두 끌어올려서 선언한다고해서, hoisting이라고 한다.  
따라서 아래 코드역시 함수를 값으로 가지지만 어쨋든 printName도 변수임으로 끌어올려지게 되고, 값이 할당되기 전에 실행됐음으로 undefined이 할당된 상태이다.
```javascript
printName(); //아직, printName이 undefined으로 할당된 상태이다. 
var printName = function(){}
```
printName이라는 변수가 존재하고 아직 값이 할당되기 전임으로 printName에는 'undefined'이라는 기본 값이 할당된 셈이다.  
const와 let을 사용하면 또 달라진다. 이번에는 ReferenceError 가 발생한다.  
const, let을 가급적 사용해서 이와 같이 명확하게 오류를 발생시키는 것이 더 좋다.
```javascript
function test() { 
	console.log(printName()); 
	const printName = function() {
		return 'anonymouse';
	}
}

test();
//ReferenceError: printName is not defined
```
### 함수 - 반환값과 undefined
아래 함수의 반환값은 무엇일까?
```javascript
function printName(firstname) {
   const myname = "jisu";
   const result = myname + " " +  firstname;
}
```
정답은 undefined이다. 자바스크립트 함수는 반드시 return값이 존재하며, 없을때는 기본 반환값인 'undefined'이 반환된다.

### 함수 - arguments 속성
함수가 실행되면 그 안에서 arguments라는 특별한 지역변수가 존재한다.  
자바스크립트 함수는 선언한 파라미터보다 더 많은 인자를 보낼 수도 있다. 이때 넘어온 인자를 arguments로 배열의 형태로 하나씩 접근할 수가 있다.  
arguments는 배열타입은 아니다. 따라서 배열의 메서드를 사용할 수가 없다.
```javascript
function a() {
 console.log(arguments);
}
a(1,2,3);
```
자바스크립트의 가변인자를 받아서 처리하는 함수를 만들때 등에서 arguments속성을 유용하게 사용할 수가 있다.  
해볼만한 것(1~무한대까지 인자를 받아 합을 구하는 함수를 만들어보자)

### arrow function
ES2015에는 arrow function이 추가됐다. 간단하게 함수를 선언할 수 있는 문법으로 처음에는 꽤 낯설다.
```javascript
function getName(name) {
   return "Kim " + name ;
}

//위 함수는 아래 arrow함수와 같다.
const getName = (name) => "Kim " + name;
```
arrow 함수는 어디서쓸까?  
자바스크립트는 함수의 인자로 함수를 넣을 수 있고, 반환값으로 함수를 사용할 수 있다.  
arrow 함수를 이때 사용하면 코드가 보기가 좀더 낫다.  
이런 경우에 arrow 함수를 활용해보도록 하자.

### 유용한 native 함수들
Date나 Math와 같은 native객체를 사용한 JavaScript 함수를 사용할 수 있다.  
MDN사이트를 통해서 자바스크립트를 함수를 어떻게 사용할 수 있는지 도움을 받을 수 있다.  
실제로 구글검색을 통해서 자바스크립트 레퍼런스를 찾아보면 대부분 MDN사이트가 상위에 노출된다.  
관련검색어를 MDN과 함께 검색하면 정확히 원하는 결과를 얻을 수 있다. ('mdn javascript math')  
Math관련한 정보를 찾는다고 가정하자.  
Math는 객체라서 다양한 메서드 설명이 나온다.  
Math.floor 과 같은 메서드를 검색해도 비슷하긴하다.  
Math.floor 설명은 아래와 같다.

## 참고 지식들
ES2015에 추가된 기능중, default parameter 와 rest parameter는 무엇인가? 알아본다.  
call by value, call by reference의 차이를 이해한다.

## 정리
함수의 다양한 표현방식을 잘 이해하고 있어야 한다. 자바스크립트는 객체와 함수가 가장 중요하다.  
자바스크립트 문법은 미리 외워두는 것이 좋긴하다. 하지만 어디에 쓰이는지 의미를 모른 상태로 외울필요는 없다.  
이미 자바스크립트의 기본문법에 익숙하다면, ES2015에 추가된 기능들을 찾아서 살펴보자.

## 개발환경
* git
* 터미널명령어

## 자바스크립트 검색은 어디서?
* 더 좋은 구글링은?
* MDN 사이트 보기

## JavaScript
* ECMAScript와는 어떤 관계인가?
* Node.js 와는 어떤관계인가?

## 중요한 자바스크립트 문법들
* function
    * 표현식/화살표함수/선언문
    * 여러개로 나누기
    * 파라미터/인자
    * 반환값
    * 네이밍
* 배열 다루기
* 변수
* 네이밍