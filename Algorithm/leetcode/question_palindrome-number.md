# Palindrome Number
정수 x가 주어질 때 x가 회문 정수이면 true를 반환한다.  
정수는 앞으로 읽을 때와 뒤로 읽을 때 회문이다. 예를 들어, 121은 회문(palindrome)이고 123은 그렇지 않다.

### Example 1:
```
Input: x = 121
Output: true
```

### Example 2:
```
Input: x = -121
Output: false
Explanation: 왼쪽에서 오른쪽으로 -121로 표시됩니다. 오른쪽에서 왼쪽으로 121-이 된다. 그러므로 그것은 회문이 아니다.
```

### Example 3:
```
Input: x = 10
Output: false
Explanation: 오른쪽에서 왼쪽으로 01을 읽습니다. 그러므로 그것은 회문이 아니다.
```

### Example 4:
```
Input: x = -101
Output: false
```

### Constraints:
* -2의 31승 <= x <= 2의 31승 - 1