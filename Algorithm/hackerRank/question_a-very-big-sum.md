# A Very Big Sum
이 과제에서는 배열의 요소 합계를 계산하고 인쇄해야 하며 이러한 정수 중 일부는 상당히 클 수 있습니다.

### 기능 설명
아래 편집기에서 aVeryBigSum 함수를 완료하십시오. 모든 배열 요소의 합계를 반환해야 합니다.
aVeryBigSum에는 다음과 같은 매개 변수가 있습니다.
* int ar[n]: 정수의 배열입니다.

### Return
* long: 모든 배열 요소의 합계

### 입력 형식
입력의 첫 번째 줄은 정수 n으로 구성됩니다.
다음 줄에는 배열에 포함된 공백으로 구분된 정수가 n개 있습니다.

### 출력 형식
배열에 있는 요소의 정수 합계를 반환합니다.

### 제약
* 1 ≤ n ≤ 10
* 0 ≤ ar[i] ≤ 10¹⁰

### 입력 예시
```
5
1000000001 1000000002 1000000003 1000000004 1000000005
```

### 출력 예시
```
5000000015
```

### 참고
32비트 정수의 범위는 (-2³¹)에서 (2³¹ - 1) 또는 [-2147483648, 2147483647]입니다.
여러 정수 값을 더하면 합계가 위의 범위를 초과할 수 있습니다. 이러한 합계를 저장하려면 long int C/C++/Java를 사용해야 할 수 있습니다.