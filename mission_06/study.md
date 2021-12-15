# 웹UI개발 맛보기
웹개발에서는 HTML,CSS, JS 언어 세가지를 통해서 정적인 또는 동적인 웹사이트를 개발할 수 있다.  
세가지 모두 방대한 분량의 학습꺼리가 필요하지만 JS위주로 핵심적인 내용만 다뤄본다.

## DOM
html코드를 접근하거나 제어하기 위해서는 DOM API 익혀야한다.  
DOM의 특정 엘리먼트에 접근하기.
```javascript
//div 태그 찾기
const myElement = document.querySelector("div");

//myDiv라는 ID를 가진 엘리먼트 찾기
const myElement = document.querySelector("#myDiv");

//myDiv라는 class를 가진 엘리먼트 찾기
const myElement = document.querySelector(".myDiv");
```

## Event
addEventListener 이라는 메서드를 통해서 이벤트 등록을 할 수 있다.
```javascript
const myElement = document.querySelector("#myDiv");

myElement.addEventListener("click", (e)=> {
    console.log(`${e.target} 엘리먼트에 클릭이 발생했어요!`);
});
```

## DOM에 내용을 추가.
```javascript
const myElement = document.querySelector("#myDiv");
const content = document.querySelector(".content");

//myElment를 클릭하면 content엘리먼트에 myElement의 텍스트를 삽입.
myElement.addEventListener("click", (e)=> {
     content.innerHTML = `<li>${e.target.innerText}</li>`;
});
```
DOM에 내용을 추가할때는 위와 같이 innerHTML 을 통해서 문자열형태로 쉽게 HTML을 추가할 수 있다.  
또는 insertAdacentHTML 라는 함수를 사용해서 원하는 위치에 문자열방식으로 html 내용을 넣을 수도 있다.