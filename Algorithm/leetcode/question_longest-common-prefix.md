# Longest Common Prefix
문자열 배열 중에서 가장 긴 공통 접두사 문자열을 찾는 함수를 작성합니다.
공통 접두사가 없으면 빈 문자열 "을 반환해라.

Example 1:
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2:
```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

Constraints:
* 1 <= strs.length <= 200
* 0 <= strs[i].length <= 200
* strs[i]는 영문 소문자로만 구성되어 있다.