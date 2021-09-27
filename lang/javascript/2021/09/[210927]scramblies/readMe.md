# Scramblies - 21. 09. 27

- 기본 함수 (1)
  - scramble(str1: 문자열, str2: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    scramble('aabbcamaomsccdd','commas')
  </pre>
 
- 출력
  <pre>
    true
  </pre>

> 문제
  - 이 문제는 str1에 있는 문자를 사용하여 str2의 문자열을 만들 수 있는 지 그 여부를 체크한다.
  - str2에는 같은 문자가 2개 이상 들어갈 수 있으며, str1에 해당 수 만큼의 문자가 있어야한다.

> 풀이 과정 및 결과
<pre>
   예전에 풀었던 문제를 다시 풀이(파이썬 풀이: https://github.com/Roktar/codewars/blob/master/lang/python/S%25/Scramblies.py)
   2중 for문 돌리니 timeout이 떠서 각 문자별 갯수 먼저 구한 후 str2에 있는 문자 하나마다 그 갯수를 줄이고 every로 중간에 없는 문자가 발견되거나 특정 문자가 다 사용되었는데 또 나온 경우면 즉시 종료시킬 수 있도록 함.
</pre>

>변경 이력
<pre>
</pre>