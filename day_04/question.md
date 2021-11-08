# 해시맵 구현
해시맵(해시테이블)의 특징에 대해서 미리 학습한다.  
해시맵처럼 동작하는 코드를 구현한다.
* 문자열 키와 문자열 값을 저장하는 해시맵 라이브러리를 구현한다.
* 고유한 Hash 함수를 정한다.
    * put(String key, String value) 키-값을 추가한다.
    * remove(String key) 해당 키에 있는 값을 삭제한다.
    * containsKey(String) 해당 키가 존재하는지 판단해서 Bool 결과를 리턴한다.
    * get(String) 해당 키와 매치되는 값을 찾아서 리턴한다.
    * isEmpty() 비어있는 맵인지 Bool 결과를 리턴한다.
    * keys() 전체 키 목록을 [String] 배열로 리턴한다.
    * replace(String key, String value) 키-값으로 기존 값을 대체한다.
    * size() 전체 아이템 개수를 리턴한다.
    * clear() 전체 맵을 초기화한다.
* 객체 형태로 만든다.
    * 객체는 JavaScript prototype 속성을 활용한다.

```javascript
function Foo() {..}
Foo.prototype.put = function() {...}
Foo.prototype.remove = function() {...}
```
참고.  
JavaScript의 Map객체가 비슷하게 동작한다.  
이번미션에서 JavaScript의 Map객체를 사용할 수 없고 , 비슷한 것을 만들어야 한다.

## 추가미션
중복 방지를 위한 알고리즘을 적용한다.

## 학습 체크포인트
* 해시 자료구조를 이해한다.
* 해시 알고리즘의 충돌을 방지하는 몇가지 방법을 안다.
* prototype 속성을 활용해서 객체를 만든다.
