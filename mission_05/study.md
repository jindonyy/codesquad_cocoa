# 비동기 프로그래밍
## Why?
비동기 프로그래밍은 자바스크립트의 전부이다!  
물론 이말은 거짓말이다. 하지만 비동기 프로그래밍을 이해하는 것은 자바스크립트 개발자에게 매우 중요하다.  
싱글쓰레드로 동작하는 자바스크립트의 한계를 멋지게 해결하는 방법이다.  
database나 file에 접근하거나, 네트워크 통신이 필요한 경우 등의 작업이 필요하다면, 비동기 처리를 통해서 blocking하지 않고 효과적으로 처리할 수 있다. 이는 자바스크립트기반 애플리케이션의 한계를 넘어서게 하는 필수적인 기능이라고 볼 수 있다.

## 학습 목표
* 동기/비동기의 차이를 이해한다.
* 비동기가 섞여 있을때에도 디버깅을 잘 할 수 있다.
* 배열과 객체 조작에 익숙해진다.

## 배경 지식
#### 1. 동기(synchronous)
```javascript
const baseData = [1,2,3,4,5,6,100];

baseData.forEach((v,i) => {
    console.log("sync ", i);
});

baseData.forEach((v,i) => {
    console.log("sync 2", i);
});
```
동기적인 흐름은 순서대로 실행될 뿐이다. 원활한 프로그램 흐름을 유지해야 함으로 순서가 바뀔 수 없다.

#### 2. call stack
개발자도구의 call stack으로 확인해보기.
```javascript
const baseData = [1,2,3,4,5,6,100];

function foo() {
  baseData.forEach((v,i) => {
    console.log("sync ", i);
    bar();
  });
}

function bar() {
  baseData.forEach((v,i) => {
    //debugger;
    console.log("sync 2", i);
  });
}
```
call stack이 쌓이는 것을 시각적으로 표현해보라!

#### 3. setTimeout과 비동기
만약 setTIme이 동기적으로 실행되면 어떻게 되지?
```javascript
setTimeout( ()=>console.log(10), 10000);
```
setTimeout함수의 callback 함수는 함수의 인자로 들어가서, 즉시 또는 나중에 실행되는 녀석이다.  
어떻게 동작하는 걸까? 설명해보자.

#### 4. callstack & callback queue
* call stack 그리고, callback queue(또는 stack queue)
* event loop를 통해서 callback queue에 callback함수가 stack으로 올라감.

#### 5. 동기-비동기 순서 이해하기
결과값을 예상해보자.
```javascript
function plus() {
  let a = 1;
  setTimeout( ()=>console.log(++a), 1000);
  return a;
}

const result = plus();
console.log('result :', result);  //?
```

### 6. 비동기 상황 예
const baseData = [1,2,3,4
```javascript,5,6,100];

const asyncRun = (arr, fn) => {
 for(var i=0; i<arr.length; i++) {
   setTimeout( () => fn(i), 1000);
 }
}

asyncRun(baseData, idx =>console.log(idx));
```
'var'를 'let' 으로 변경하면??

#### 7. 비동기 상황 예 - forEach로 변경해보자.
```javascript
const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout( () => fn(i), 1000);
   });
}
asyncRun(baseData, idx =>console.log(idx))
```

#### 8. 비동기 상황 예 - 동기 + 비동기 + 동기
```javascript
const baseData = [1,2,3,4,5,6,100];

function sync() {
  baseData.forEach((v,i) => {
    console.log("sync ", i);
  });
}

const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout( () => fn(i), 1000);
   });
}
 

function sync2() {
  baseData.forEach((v,i) => {
    console.log("sync 2 ", i);
  });
}

asyncRun(baseData, idx =>console.log(idx))
sync();
sync2();
```

#### 9. 비동기 상황 예 - 비동기 + 비동기
순서를 예상해보기.  
call stack과 callback queue를 상상하자.
```javascript
const baseData = [1,2,3,4,5,6,100];

const asyncRun = (arr, fn) => {
   arr.forEach((v,i) => {
     setTimeout(() => {
       setTimeout(() => {
         console.log("cb 2");
         fn(i)
        },1000);
       console.log("cb 1");
     }, 1000);
   });
}

asyncRun(baseData, idx =>console.log(idx))
```

#### 10. Event Queue와 call stack 과의 관계
아래 매우 훌륭한 영상을 제대로 보고 이해하자.
[https://youtu.be/8aGhZQkoFbQ](https://youtu.be/8aGhZQkoFbQ)

#### 11. 이벤트 중심 개발
자바스크립트는 이벤트 중심으로 많이 개발한다.
```javascript
//브라우저 이벤트 등록
document.body.addEventListener("click", ()=> console.log("body clicked"));
```

#### 12. async 함수 맛보기
Promise를 통해서 thenable 방식의 비동기 제어
```javascript
function runAsync(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('서버에서 온 사람입니다');
		}, time);
	});
}


function runAsync2(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('3명입니다');
		}, time);
	});
}

const cb1 = result => {
	console.log('누구세요? :', result);
	return runAsync2(3000);
};

const cb2 = result2 => { 
	console.log('몇명이에요? :', result2);
}

function main() {
	const asyncObj = runAsync(1000);
	asyncObj.then(cb1).then(cb2);
	console.log('함수는 종료');
}

main();
```
'함수는 끝났어'를 마지막에 출력하게 하려면?  
async함수의 await 키워드는 promise로 만들어진 비동기를 blocking한다.  
결국 완전한 동기적인 수행을 하는 것처럼 보인다.
```javascript
async function main () {
    const str1 = await runAsync(1000);
    cb1(str1);

    const str2 = await runAsync2(1000);
    cb2(str2);
    console.log('함수는 종료');
}
```
main함수의 어떤 결과를 확인하려면?
```javascript
function run() {
    const result = main();
    console.log('함수는 종료');
}

run();
```
async 함수도 promise객체를 반환한다.  
따라서 then 메서드를 사용하거나, 또 다른 async함수를 사용해야 한다.
```javascript
async function run() {
    const result = await main();
    console.log(result);
}
```