# 2021 코드스쿼드 마스터즈 코스 테스트

## 1단계: 지도 데이터 읽어서 2차원 배열에 저장하고 화면에 출력하기
### 입력
아래 내용을 문자열로 넘겨서 처리하는 함수를 작성한다.
```
Stage 1
#####
#OoP#
#####
=====
Stage 2
  #######
###  O  ###
#    o    #
# Oo P oO #
###  o  ###
 #   O  # 
 ########
```

위 값을 읽어 2차원 배열로 변환 저장한다.

|기호|의미|저장값|
|-|-|-|
|#|벽(Wall)|0|
|O|구멍(Hall)|1|
|o|공(Ball)|2|
|P|플레이어(Player)|3|
|=|스테이지 구분|4|

### 출력
아래와 같은 형태로 각 스테이지 정보를 출력한다.
* 플레이어 위치는 배열 [0][0]을 기준으로 처리한다.
  * 아래 출력 예시와 상관없이 기준에 맞춰서 얼마나 떨어진지 표시하면 된다.
* 스테이지 구분값은 출력하지 않는다.

```
Stage 1

#####
#OoP#
#####

가로크기: 5
세로크기: 3
구멍의 수: 1
공의 수: 1
플레이어 위치 (2, 4)

Stage 2

  #######
###  O  ###
#    o    #
# Oo P oO #
###  o  ###
 #   O  # 
 ########

가로크기: 11
세로크기: 7
구멍의 수: 4
공의 수: 4
플레이어 위치 (4, 6)
```

### 요구 사항
* 컴파일 또는 실행이 가능해야 한다. (컴파일이나 실행되지 않을 경우 감점 대상)
  * gist는 하위 폴더 구조를 지원하지 않기 때문에 컴파일 또는 실행에 필요한 소스 코드는 모두 포함하고, 프로젝트 파일 등은 포함하지 않아도 된다.
* 자기만의 기준으로 최대한 간결하게 코드를 작성한다.
* Readme.md에 풀이 과정 및 코드 설명, 실행 결과를 기술하고 코드와 같이 gist에 포함해야 한다.
* 제출시 gist URL과 revision 번호를 함께 제출한다.

### 구현 과정
1. 맵 문자열을 한 줄씩 분리하여 stage 문구 줄은 continue하고, ==== 문구 줄은 4를 push 한다. 나머지 문구 줄은 숫자 배열로 바꿔준다.
```javascript
[ [0, 0, 0, 0, 0], [0, 1, 2, 3, 0], [0, 0, 0, 0, 0], 4, [' ', 0, 0, 0, 0, 0, 0, 0, ' ', ' ']..., 4]
```
2. stage 분기점인 4를 기준으로 분리해준 다음 스테이지의 map을 이중 배열로 변환해준다.
```javascript
[ [ 0, 0, 0, 0, 0 ], [ 0, 1, 2, 3, 0 ], [ 0, 0, 0, 0, 0 ] ]
```
3. 앞의 이중 배열의 length와 숫자들을 통해 stage 정보를 분석해 출력해준다. 
```javascript
[{
  stageNum: 1,
  stageMap: [ [ 0, 0, 0, 0, 0 ], [ 0, 1, 2, 3, 0 ], [ 0, 0, 0, 0, 0 ] ],
  horizontalSize: 5,
  verticalSize: 3,
  holes: 1,
  ball: 1,
  player: { x: 3, y: 1 } // 출력은 (2, 4)
},
{
  stageNum: 2,
  stageMap: [ [' ', ' ', 0, 0, 0, 0, 0, 0, 0, ' ', ' '],
             [0, 0, 0, ' ', ' ', 1, ' ', ' ', 0, 0, 0],
             [0, ' ', ' ', ' ', ' ', 2, ' ', ' ', ' ', ' ', 0],
             [0, ' ', 1, 2, ' ', 3, ' ', 2, 1, ' ', 0],
             [0, 0, 0, ' ', ' ', 2, ' ', ' ', 0, 0, 0],
             [' ', 0, ' ', ' ', ' ', 1, ' ', ' ', 0, ' ', ' '],
             [' ', 0, 0, 0, 0, 0, 0, 0, 0, ' ', ' '] ],
  horizontalSize: 11,
  verticalSize: 7,
  holes: 4,
  ball: 4,
  player: { x: 5, y: 3 } // 출력은 (4, 6)
}]
```

### 코드 설명
* `MapDataManeger`: 맵에 관한 정보를 다루는 class
  1. `getMapDataArr`: 문자열로 들어온 값을 한줄 씩 분리한다.  
  stage 와 ==== 이 아닌 줄은 pushXPointArr 함수에 넘겨주어 숫자 배열로 바꿔준다.
  그럼 배열은 4와 x축이 숫자로 담긴 배열들이 담긴 이중 배열을 반환하게 된다.
  2. `pushXPointArr`: getMapDataArr 함수에서 인자로 넘어온 문구 줄을 for문을 돌려 switch문으로 x축의 정보가 담긴 배열을 반환한다.
  3. `divideStageMapArr`: getMapDataArr 함수에서 받은 이중 배열을 stage 분기점인 4를 기준으로 분리해준다. forEach로 요소가 배열일 경우, stageMap배열에 push하고, 분기점이 4가 요소로 들어올 경우, stageMap을 getStageMapInfo 함수에 넘겨주고, stageMap에서 해당 stage의 정보를 분석하여 객체로 다시 반환해준다. 그 반환 값을 전체 map정보를 담을 mapInfoArr 배열에 push 해준다. 그리고 stageMap을 빈배열로 초기화하여 다음 stage도 반복한다. 모든 스테이지를 push했으면 다른 controller에서도 사용할 수 있게 `this.mapInfoArr = mapInfoArr`로 저장해준다.
  4. `getStageMapInfo`: divideStageMapArr 함수에서 받은 stage좌표가 담긴 이중 배열을 바깥 배열의 length로 세로 사이즈, 안쪽 배열의 length로 가로 사이즈, forEach와 switch를 통해 숫자에 따라 구멍과 공, 플레이어의 정보를 분석하여 객체로 저장한 뒤, 반환시켜준다.

* `MapInfoViewHandler`: 맵에 관한 정보 console에 보여줄 형태를 정하는 class
  1. `printStageMap`: 인자로 들어온 mapInfo를 출력하고 싶은 형태를 지정하여 forEach를 통해 printText 변수에 +=을 하여 반환시켜준다.

* `MapInfoController`: MapDataManeger에서 가공된 정보를 출력할 형태로 바꾸어 MapInfoViewHandler에 넘겨주는 class
  1. `getCurrentStageMapStr`: MapDataManeger의 divideStageMapArr 함수에서 받은 mapInfo를 forEach를 통해 각 stage의 정보를 getMapStrArr함수의 인자로 넘겨주어 문자열로 변환한 값을 다시 받는다. 그리고 StageMapStr에 += 하여 최종으로 StageMapStr을 return 해준다.
  2. `changeToStringView`: getMapStrArr 함수에서 받은 값을 map과 switch문을 통해 문자열로 변환시켜 반환해준다.
  3. `initStageMapView`: MapDataManeger의 divideStageMapArr 함수에서 받은 mapInfo와 printStageMap 함수를 통해 받은 mapStrArr을 MapInfoViewHandler의 printStageMap 함수에 넘겨주어 최종 출력 형태로 다시 반환 받는다.

## 2단계: 플레이어 이동 구현하기
1단계 스테이지 2의 지도를 읽고 사용자 입력을 받아서 캐릭터를 움직이게 하는 프로그램을 작성하시오.

### 입력
```
- w: 위쪽
- a: 왼쪽
- s: 아래쪽
- d: 오른쪽
- q: 프로그램 종료
```

### 출력
* 처음 시작하면 스테이지 2의 지도를 출력한다.
* 간단한 프롬프트 (예: `SOKOBAN> `)를 표시해 준다.
* 하나 이상의 문자를 입력받은 경우 순서대로 처리해서 단계별 상태를 출력한다.
* 벽이나 공등 다른 물체에 부딪히면 `해당 명령을 수행할 수 없습니다` 라는 메시지를 출력하고 플레이어를 움직이지 않는다.

#### 출력 예시
```
Stage 2

  #######
###  O  ###
#    o    #
# Oo P oO #
###  o  ###
 #   O  # 
 ########

SOKOBAN> ddzw (엔터)

  #######
###  O  ###
#    o    #
# Oo  PoO #
###  o  ###
 #   O  # 
 ########
 
 D: 오른쪽으로 이동합니다.
 
  #######
###  O  ###
#    o    #
# Oo  PoO #
###  o  ###
 #   O  # 
 ########
 
 D: (경고!) 해당 명령을 수행할 수 없습니다!
 
  #######
###  O  ###
#    o    #
# Oo  PoO #
###  o  ###
 #   O  # 
 ########
 
 Z: (경고!) 해당 명령을 수행할 수 없습니다!
 
  #######
###  O  ###
#    o    #
# Oo  PoO #
###  o  ###
 #   O  # 
 ########
 
 W: 위로 이동합니다.
 
SOKOBAN> q
Bye~
```

### 요구 사항
* 너무 크지 않은 함수 단위로 구현하고 중복된 코드를 줄이도록 노력한다.
* 마찬가지로 Readme.md 파일과 작성한 소스 코드를 모두 기존 secret gist에 올려야 한다.
* 전역변수의 사용을 자제한다.
* 객체 또는 배열을 적절히 활용한다.

### 구현 과정
PS. 앞단계에서 새로 추가한 함수는 // + , 수정한 함수는 주석으로 // # 으로 표시 (3단계도)

1. 맵 문자열을 한 줄씩 분리하여 stage 문구 줄은 continue하고, ==== 문구 줄은 4를 push 한다. 나머지 문구 줄은 숫자 배열로 바꿔준다.
2. stage 분기점인 4를 기준으로 분리해준 다음 스테이지의 map을 이중 배열로 변환해준다.
3. 앞의 이중 배열의 length와 숫자들을 통해 stage 정보를 분석해 저장한다.
4. 숫자로 저장된 배열을 문자로 변환하여 stage 2의 맵이 보이도록 출력한다.
5. 출력한 다음 readline으로 사용자에 입력 값을 받는다.
6. 입력받은 값에 따라 이동할 좌표와 출력할 문구를 저장하여 기존의 맵 정보에 업데이트 시켜준다.
7. 업데이트 시킨 정보 중 map의 정보는 문자로 변환시켜 출력시켜줄 class의 함수에 넘겨준다.
8. q가 입력되면 close 시켜준다.

### 코드 설명
* `MapDataManeger`: 맵에 관한 정보를 다루는 class  
  1. (중복) `getMapDataArr`: 문자열로 들어온 값을 한줄 씩 분리한다.  
  stage 와 ==== 이 아닌 줄은 pushXPointArr 함수에 넘겨주어 숫자 배열로 바꿔준다.
  그럼 배열은 4와 x축이 숫자로 담긴 배열들이 담긴 이중 배열을 반환하게 된다.
  2. (중복) `pushXPointArr`: getMapDataArr 함수에서 인자로 넘어온 문구 줄을 for문을 돌려 switch문으로 x축의 정보가 담긴 배열을 반환한다.
  3. (중복) `divideStageMapArr`: getMapDataArr 함수에서 받은 이중 배열을 stage 분기점인 4를 기준으로 분리해준다. forEach로 요소가 배열일 경우, stageMap배열에 push하고, 분기점이 4가 요소로 들어올 경우, stageMap을 getStageMapInfo 함수에 넘겨주고, stageMap에서 해당 stage의 정보를 분석하여 객체로 다시 반환해준다. 그 반환 값을 전체 map정보를 담을 mapInfoArr 배열에 push 해준다. 그리고 stageMap을 빈배열로 초기화하여 다음 stage도 반복한다. 모든 스테이지를 push했으면 다른 controller에서도 사용할 수 있게 `this.mapInfoArr = mapInfoArr`로 저장해준다.
  4. (중복) `getStageMapInfo`: divideStageMapArr 함수에서 받은 stage좌표가 담긴 이중 배열을 바깥 배열의 length로 세로 사이즈, 안쪽 배열의 length로 가로 사이즈, forEach와 switch를 통해 숫자에 따라 구멍과 공, 플레이어의 정보를 분석하여 객체로 저장한 뒤, 반환시켜준다.따라 구멍과 공, 플레이어의 정보를 분석하여 객체로 저장한 뒤, 반환시켜준다.
  5. `updatePlayerSpot`: 사용자의 입력 값을 받아 switch문으로 구분하여 준다. 구분에 따라 움직일 x, y 값과 출력할 message을 저장한다.  
  switch문이 끝나고 공백이 아닌 부분으로 이동하려 할 시, {기존 맵 배열, 경고 메세지} 형태로 return하여 종료시킨다. 공백으로 이동할 시, {distinguishMoveSpotValue 함수에서 저장한 새로운 맵 배열, switch문에서 저장한 메세지} 형태로 return 시켜준다.
  6. `distinguishMoveSpotValue`: 움직일 방향의 좌표에 ' ' 이 있을 시에만 updatePlayerSpot를 실행시켜준다. updatePlayerSpot에서 구분하여 넘겨준 움직일 값(moveValue)과 현재 player의 위치인(position)에 따라 player의 좌표를 수정하고, 맵의 배열도 수정하여 저장한다.
  7. 저장한 값을 controller에 넘기고 controller가 view 클래스에 넘겨 화면에 출력한다.
  8. q가 입력되면 readline 종료.

* `OutputPrinter`: 입력 값을 화면에 출력해줄 class
  1. `printCurrentStage`: 초기 stage map을 출력해준다.
  2. `printMoveMap`: 사용자의 입력 값에 따라 Controller에서 가공해준 정보를 출력해준다.

* `MoveController`: MapDataManeger에서 가공된 정보를 출력할 형태로 바꾸어 OutputPrinter에 넘겨주는 class
  1. (중복) `getCurrentStageMapStr`: MapDataManeger의 divideStageMapArr 함수에서 받은 mapInfo를 forEach를 통해 각 stage의 정보를 getMapStrArr함수의 인자로 넘겨주어 문자열로 변환한 값을 다시 받는다. 그리고 StageMapStr에 += 하여 최종으로 StageMapStr을 return 해준다.
  2. (중복) `changeToStringView`: getMapStrArr 함수에서 받은 값을 map과 switch문을 통해 문자열로 변환시켜 반환해준다.
  3. `initView`: 초기 출력할 문구를 view 클래스에 넘겨주고 readline을 실행시켜줄 함수를 호출한다.
  4. `requireUserInput`: 사용자의 입력을 받을 readline을 실행시켜주고, 사용자에게 받은 answer을 updateStageMapStrArr에 넘겨준다. updateStageMapStrArr에 다시 받은 데이터를 출력 class의 printMoveMap에 넘겨 console에 출력하여 준다. answer로 q가 입력되면 readline을 종료시켜준다.
  5. `updateStageMapStrArr`: answer의 길이만큼 for of를 돌려 data 클래스의 updatePlayerSpot 함수에 넘겨주고 업데이트 한 정보를 다시 받아 changeToStringView에서 문자로 변환하여 출력시켜 줄 값을 requireUserInput에 넘겨 준다.

## 3단계: 소코반 게임 완성하기
* 정상적인 소코반 게임을 완성한다.
* https://www.cbc.ca/kids/games/play/sokoban 를 참고하자.

### 입력
* 난이도를 고려하여 스테이지 1부터 5까지 플레이 가능한 map.txt 파일을 스스로 작성한다.
* 지도 파일 map.txt를 문자열로 읽어서 처리하도록 개선한다.
* 처음 시작시 Stage 1의 지도와 프롬프트가 표시된다.

### 출력
#### 플레이어 이동조건
* r 명령 입력시 스테이지를 초기화 한다.
* 플레이어는 o를 밀어서 이동할 수 있지만 당길 수는 없다.
* o를 O 지점에 밀어 넣으면 0으로 변경된다.
* 플레이어는 O를 통과할 수 있다.
* 플레이어는 #을 통과할 수 없다.
* 0 상태의 o를 밀어내면 다시 o와 O로 분리된다.
* 플레이어가 움직일 때마다 턴수를 카운트한다.
* 상자가 두 개 연속으로 붙어있는 경우 밀 수 없다.
* 모든 o를 O자리에 이동시키면 클리어 화면을 표시하고 다음 스테이지로 표시한다.
* 주어진 모든 스테이지를 클리어시 축하메시지를 출력하고 게임을 종료한다.
* 기타 필요한 로직은은 실제 게임을 참고해서 완성한다.

#### 출력 예시
```
소코반의 세계에 오신 것을 환영합니다!
^오^

Stage 1

#####
#OoP#
#####

SOKOBAN> A

#####
#0P #
#####

빠밤! Stage 1 클리어!
턴수: 1

Stage 2
...

Stage 5
...

빠밤! Stage 5 클리어!
턴수: 5

전체 게임을 클리어하셨습니다!
축하드립니다!
```

### 요구 사항
* 가능한 한 커밋을 자주 하고 구현의 의미가 명확하게 전달되도록 커밋 메시지를 작성한다.
* 함수나 메소드는 한 번에 한 가지 일을 하고 가능하면 20줄이 넘지 않도록 구현한다.
* 함수나 메소드의 들여쓰기를 가능하면 적게(3단계까지만) 할 수 있도록 노력한다.

```javascript
function main() {
  for() { // 들여쓰기 1단계
    if() { // 들여쓰기 2단계
      return; // 들여쓰기 3단계
    }
  }
}
```

### 구현 과정
1. 맵 문자열을 한 줄씩 분리하여 stage 문구 줄은 continue하고, ==== 문구 줄은 4를 push 한다. 나머지 문구 줄은 숫자 배열로 바꿔준다.
2. stage 분기점인 4를 기준으로 분리해준 다음 스테이지의 map을 이중 배열로 변환해준다.
3. 앞의 이중 배열의 length와 숫자들을 통해 stage 정보를 분석해 저장한다.
4. 숫자로 저장된 배열을 문자로 변환하여 stage 2의 맵이 보이도록 출력한다.
5. 출력한 다음 readline으로 사용자에 입력 값을 받는다.
6. 입력받은 값에 따라 제한 조건을 두어 이동 여부를 정한다.
<pre>
벽(0) : 다음 위치가 벽일 때 이동 불가능  
구멍(1) : 통과 시, 다시 구멍이 보여야 하므로 구멍과 겹쳤을 시 1이 아니 -1이 들어가도록
공(2) : 공이랑 나란히 한칸씩 움직이기, 다다음 위치가 벽이 아닐 때만 가능, 공과 구멍이 겹쳤을 경우 숫자 0이 출력되야하므로 -2로 저장
</pre>
7. 이동할 좌표와 출력할 문구를 저장하여 기존의 맵 정보에 업데이트 시켜준다.
8. 업데이트 시킨 정보 중 map의 정보는 문자로 변환시켜 출력시켜줄 class의 함수에 넘겨준다.
9. q가 입력되면 close 시켜준다.

### 코드 설명
-- 중복 생략 --
`distinguishMoveSpotValue`: 함수에 이동 제한 부분 추가
`updatePlayerSpot`: 다음 스테이지로 넘어가는 기능 추가
`changeToStringView`: 공과 구멍이 겹칠 경우 -2, 구멍 위에 플레이어가 서있을 경우 -1 추가

## 4단계: 추가기능 구현
### 요구사항
다양한 추가기능을 구현해 본다.  
전부다 구현하지 않아도 무방하다.

### 저장하기 불러오기 기능
* 1 - 5: 세이브 슬롯 1 - 5 선택
* S 키로 현재 진행상황을 저장한다.
* L 키로 세이브 슬롯에서 진행상황을 불러온다.
```
S> 2S
2번 세이브 슬로 상태
2번 세이브에 진행상황을 저장합니다.
S> 3L
3번 세이브에서 진행상황을 불러옵니다.
```

### 지도 데이터 변환하기 프로그램
* 지도 데이터 map.txt 를 읽어서 일반 텍스트 에디터로 읽을 수 없는 map_enc.txt로 변환하는 프로그램을 추가로 작성한다.
* 3 단계에서 구현한 게임이 map.txt 가 아닌 map_enc.txt 를 불러와서 실행할 수 있도록 수정한다.

### 되돌리기 기능 및 되돌리기 취소 기능 구현
* u키를 누르면 한 턴 되돌리기, U키를 누르면 되돌리기 취소하기를 구현한다.