# Simple frequency sort - 20. 11. 23

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - solve(arr: 배열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>solve([1,2,3,0,5,0,1,6,8,8,6,9,1])</pre>
 
- 출력
  <pre>[1,1,1,0,0,6,6,8,8,2,3,5,9]</pre>

> 문제
  - 이 문제는 주어진 배열에서 가장 많이 나오는 수를 앞에 나열하고 적게 나오는 수를 뒤에 나열한다.
  - 특정 수의 반복횟수가 동일한 경우, 해당 반복 내에서는 작은 수를 앞에 배치한다.

> 풀이 과정 및 결과
<pre>
각 수의 등장횟수를 먼저 카운트한 경우, 길이와 값을 사용하여 정렬했다.
sort 메소드를 쓰긴 했는데 sort를 한 번 더 쓰고싶지않아서 인자로 길이만 비교하는 것을 줬다가 뒤에 or 값 을 추가로 줬는데 동작하는 이유는 모르겠지만 잘 동작함.
</pre>

>변경 이력
<pre>
</pre>