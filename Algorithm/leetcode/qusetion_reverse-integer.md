# Reverse integer
부호 있는 32비트 정수 x가 주어지면 숫자가 거꾸로 된 x를 반환합니다. x를 반전하여 값이 부호 있는 32비트 정수 범위[-2의 31승, 2의 31승 - 1]를 벗어나면 0을 반환합니다.  
**환경에서 64비트 정수를 저장할 수 없다고 가정합니다.**
  
### Example 1:
```
Input: x = 123
Output: 321
```

### Example 2:
```
Input: x = -123
Output: -321
```

### Example 3:
```
Input: x = 120
Output: 21
```

### Example 4:
```
Input: x = 0
Output: 0
```

### Constraints:
* -2의 31승 <= x <= 2의 31승 - 1