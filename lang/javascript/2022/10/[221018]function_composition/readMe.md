# Function composition - 22. 10. 18

- 기본 함수 (1)
  - compose()
    - 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 함수(0)
  - 변수(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    compose(multTwo, addOne)(5)
    compose(addOne, multTwo, addOne, addOne)(2)
  </pre>
 
- 출력
  <pre>
    12
    9
  </pre>

> 문제
  - 이 문제는 주어진 함수들을 합성(composition)하여 사용할 수 있는 compose 함수를 작성한다.
  - 문제에서 기본적으로 addOne, multTwo 함수를 제공한다.
  - compose 함수는 함수를 인자로 받으며, 최종적으로 정수값을 받아서 결과를 반환하는 함수를 반환한다.
  - compose 함수는 const compose = (f, g) => (a) => f(g(a)) 이다. 즉, 가장 마지막에 주어진 함수를 먼저 실행한 후 그 결과값을 그 다음 함수에서 받아서 다시 연산을 한다.

> 풀이 과정 및 결과
<pre>
  함수 실행 시 넘겨주는 모든 인자 arguments에 들어가기때문에 arguments에서 주어진 함수들을 꺼낸 후, 마지막에 주어진 함수부터 순차적으로 실행하여 주어진 값을 변화시킨다.
  그렇게 변화된 값은 다음 함수의 인자로 넘어가며, 주어진 함수의 갯수만큼 실행한 후 그 결과를 반환한다.
</pre>

>변경 이력
<pre>
</pre>