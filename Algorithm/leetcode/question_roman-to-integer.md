# Roman to Integer
로마 숫자는 I, V, X, L, C, D, M의 7가지 기호로 표현된다.  
  
|Symbol|Value|
|-|-|
|I|1|
|V|5|
|X|10|
|L|50|
|C|100|
|D|500|
|M|1000|
  
예를 들어, 로마 숫자로 2는 2로 쓰이고, 두 개를 더하면 1이 더해지고, 12는 간단히 X + II인 XII로 쓴다. 27번은 XXVII라고 적혀있는데, XX + V + II입니다.  
  
로마 숫자는 보통 왼쪽에서 오른쪽으로 가장 큰 것부터 작은 것까지 쓴다. 그러나 4를 나타내는 숫자는 IIII가 아닙니다. 대신에 숫자 4는 IV로 쓰여 있다. 왜냐하면 1은 5를 빼서 4를 만들기 때문이다. IX로 표기되는 숫자 9에도 같은 원리가 적용된다. 뺄셈이 사용되는 예는 6가지가 있다.  

* `I`를 `V`(5)와 `X`(10) 앞에 붙이면 4와 9가 된다.
* `X`를 `L`(50) 및 `C`(100) 앞에 붙이면 40과 90가 된다.
* `C`를 `D`(500)와 `M`(1000) 앞에 붙이면 400와 900이 된다.
  
로마 숫자가 주어지면 정수로 변환한다.

### Example 1:
```
Input: s = "III"
Output: 3
```

### Example 2:
```
Input: s = "IV"
Output: 4
```

### Example 3:
```
Input: s = "IX"
Output: 9
```

### Example 4:
```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

### Example 5:
```
IInput: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

## Constraints:
* 1 <= s.length <= 15
* s에는 문자('I', 'V', 'X', 'L', 'C', 'D', 'M')만 포함됩니다.
* s는 [1, 3999] 범위의 유효한 로마 숫자임을 보증합니다.