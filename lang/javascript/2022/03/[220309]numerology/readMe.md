# Numerology - 22. 03. 09

- 기본 함수 (1)
  - solution(date: Date)
    - 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    solution(new Date('02/04/2010'))
  </pre>
 
- 출력
  <pre>
    9
  </pre>

> 문제
  - 이 문제는 주어진 date 객체에서 일월년 순의 값을 만든 후, 가장 왼쪽값을 기준으로 이전 값과 계속 더해서 한자릿수로 만든 후 마지막 덧셈값을 반환한다.
  - 02042010의 경우에는 0+0, 0+2, 2+0, 2+4, 6+2, 8+0, 8+1, 9+0 의 과정을 거치게 된다.

> 풀이 과정 및 결과
<pre>
  Date 객체에서 일월년 값을 꺼내서 문자열화한 다음 배열로 쪼갠 후, 그 값을 다시 정수화시켜서 계속 더한다.
  만약 더해서 10 이상의 값이 나온 경우에는 다시 쪼개서 그 값을 더한 후 한자릿수 값으로 만들어 반환한다.
</pre>

>변경 이력
<pre>
</pre>