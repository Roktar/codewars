# Equal Sides Of An Array - 20. 06. 25

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - findEvenIndex(arr: 배열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>findEvenIndex([20,10,30,10,10,15,35]</pre>
 
- 출력
  <pre>3</pre>

> 문제
  - 이 문제는 입력으로 주어진 배열에서 특정 인덱스를 기준으로 좌우로 나누고 각각 합계를 냈을 때, 양쪽의 값이 동일하면 그 중간값의 인덱스를 반환한다.
  - 배열의 길이가 0인 경우 0을 반환하고, 양쪽이 동일하지 않으면 -1을 반환한다.

> 풀이 과정 및 결과
<pre>
최대 반복횟수는 입력배열의 길이만큼이며, slice 함수를 사용하여 각 인덱스마다 좌우를 새로 나누고 그 합계를 구한 후, 양쪽의 합계가 같은지 그 여부를 찾는다.
</pre>

>변경 이력
<pre>
</pre>