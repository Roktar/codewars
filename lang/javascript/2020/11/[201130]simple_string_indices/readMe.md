# Simple string indices - 20. 11. 30

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - solve(str: 문자열, idx: 정수)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>solve("(>_(va)`?(h)C(as)(x(hD)P|(fg)))",19)</pre>
 
- 출력
  <pre>22</pre>

> 문제
  - 이 문제는 괄호의 쌍이 맞을 경우 맞는 위치의 인덱스를, 맞지 않는다면 -1을 반환한다.

> 풀이 과정 및 결과
<pre>
  idx로 넘겨준 값을 기준으로 시작하게 되는데, 만약 이 값이 괄호가 아니라면 바로 -1을 반환한다.
  괄호로 시작하는 경우에는 여는 괄호와 닫는 괄호를 찾으면서 각각 값을 증가, 감소시키다가 0이 되는 경우 인덱스를 반환하고 아닌 경우에는 -1을 반환한다.
</pre>

>변경 이력
<pre>
</pre>