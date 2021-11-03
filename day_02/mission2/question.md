## 1. factorial 함수
임의의 숫자(m)를 입력받아 1부터 m까지의 factorial 값을 배열로 담아서 반환하는 함수 만들기.
<pre>
calculate(4)
> [1,2,6,24]
</pre>

## 2. 배열 거르기
주어진 사람들 중 아래 조건을 만족하는 사람들로 구성된 배열을 만들어서 반환하는 함수 만들기.
* 특수기호가 없는 아이디 제외
* 아이디에서 숫자를 제거
* 2 가지 iteration을 처리하는 버전을 만든다.
    * for/while문을 사용한 버전 만들기.
    * forEach,filter, map등의 고차함수를 사용한 버전 만들기
<pre>
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
filterId(peoples);
> ["honux", "head", "zello", "lucas"]
</pre>

## 3. 평균 구하기
아래 예시는 네 명의 학생에 대한 과목 점수이다.  
각 학생은 3가지 과목에 대한 점수를 가지고 있다.
* 각 학생의 평균점수(1)와 모든 학생의 최고점수의 평균점수(2)를 출력하라.
<pre>const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];</pre>

## 4. 배열 만들기
아래 데이터를 확인한다.
<a href="https://gist.github.com/crongro/ade2c3f74417fc202c8097214c965f27">https://gist.github.com/crongro/ade2c3f74417fc202c8097214c965f27</a>  
숫자타입으로만 구성된 요소를 뽑아 배열만들기
<pre>
//실행결과
["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]
</pre>

## 5. 배열 결과 출력
아래 링크를 눌러서 데이터를 확인한다.  
type이 sk인, name으로 구성된 배열만 출력해본다.  
<a href="https://gist.github.com/crongro/a9a118977f82780441db664d6785efe3">https://gist.github.com/crongro/a9a118977f82780441db664d6785efe3</a>
<pre>
["Yong", "hary", "solvin", "hani", "chulsu"]
</pre>

## 6. reduce 만들기.
Array 의 reduce 메서드처럼 동작하는 myReduce 메서드를 만들자.
<pre>
const myReduce = (arr, callback, initialValue) => {
    //여기에 구현
}

const result = myReduce(arr, (next,prev) => {...}, []);
</pre>

## 7. 추가미션
* JavaScript set & map 에 대해서 알아보고 정리해보자.
    * 어떻게 사용하는것인가?
    * object/array와는 어떤 점이 다르지?
    * 언제 유용하게 쓰일 수 있을까?
* higher order functions은 어떻게 메서드 체이닝이 가능할까? 그 이유를 알아보자.

## 학습. 체크포인트
* 고차함수가 무엇인지 안다.
* for,while문을 사용하지 않고 배열을 iteration할 수 있다.
* reduce 메서드를 직접 만들 수 있다.
* JavaScript 객체를 iteration하고 객체의 속성에 접근해서 추가/변경할 수 있다.