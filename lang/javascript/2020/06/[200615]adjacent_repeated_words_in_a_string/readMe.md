# Adjacent repeated words in a string- 20. 06. 15

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - countAdjacentPairs(searchString: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')</pre>
 
- 출력
  <pre>2</pre>

> 문제
  - 이 문제는 인접 문자열이 반복되는 횟수를 모두 더하여 반환한다.
  - 단, 인접 문자열의 반복은 동일 단어의 경우 2개 이상이 나와도 1개로만 체크되며 중간에 다른 문자가 동일하게 나온 후 다시 기존에 나왔던 단어가 다시 2번 이상 반복되면 횟수를 1 증가시킨다.

> 풀이 과정 및 결과
<pre>
대소문자를 가리지않으므로 전부 소문자로 만든 후, reduce 메소드를 통해 현재 문자열과 다음 문자열, 현재 문자열과 이전 문자열을 비교한 후 횟수를 증가시킨다.
</pre>

>변경 이력
<pre>
</pre>