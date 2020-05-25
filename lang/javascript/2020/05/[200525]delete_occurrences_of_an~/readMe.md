# Delete occurrences of an element if it occurs more than n times - 20. 05. 25

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - deleteNth(arr: 배열, n: 정수)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
- 추가객체(1)
  - counts
    - 특정값을 키값으로 해당 특정값의 등장횟수를 저장.
- 추가변수(0)

- 입력 or 호출
  <pre> deleteNth([1,1,3,3,7,2,2,2,2], 3) </pre>
 
- 출력
  <pre> [1, 1, 3, 3, 7, 2, 2, 2] </pre>

> 문제
  - 이 문제는 주어진 배열을 사용하여 결과값 형태로 만든다.
  - 입력값 배열에는 중복값이 포함되어있으며, 특정값의 중복수가 n 이상인 경우, 그 이후의 특정값은 결과값배열에 포함되지 않도록 한다.

> 풀이 과정 및 결과
<pre>
counts 객체를 활용하여 특정값의 현재 등장횟수를 저장하고 활용한다.
각 특정값마다 반복될 수 있는 수는 n까지므로, 등장횟수가 n 이내인 경우에는 결과값 배열에 포함시키고(push) 그 이상으로 등장하는 값은 포함시키지않는다.
</pre>

>변경 이력
<pre>
<b>(200525)</b> reduce 함수로 변경
</pre>