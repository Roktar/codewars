# Wave Sorting - 20. 11. 22

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - waveSort(arr: 배열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>let arr = [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4];
  waveSort(arr)</pre>
 
- 출력
  <pre>* 결과값이 균일하지 않을 수 있음. (방법에 따라 해당 배열의 값은 다수의 결과가 나올 수 있음)
  * isWaveSorted(arr) 함수에서 true/false를 반환하고, 이 값이 true인지를 체크.</pre>

> 문제
  - 이 문제는 다음과 같은 규칙을 제시했다.
    - 배열의 현재 짝수번째 인덱스의 값은 다음 홀수번째 인덱스의 값보다 크다.
    - 배열의 현재 홀수번째 인덱스의 값은 이전 짝수번째 인덱스의 값보다 작다.
    - ex) [4, 1, 7, 5, 6, 2, 3]
      - 4는 1보다 <u>크다</u>.
      - 1은 7보다 작다.
      - 7은 5보다 <u>크다</u>.
      - 5는 6보다 작다.
      - ...
  - 주어진 배열은 Wave Sorting이 적용되지 않은 상태로 넘어오고, 이 배열을 위 규칙에 맞춰서 값을 재배치한다.
  - 해당 함수에서 결과값은 반환하지 않는다고 명시하였기때문에 원본 배열을 사용하여 정렬한다.

> 풀이 과정 및 결과
<pre>
단순 반복문을 통해 값을 정렬한다.
현재 인덱스가 짝수인 경우, 다음 인덱스의 값보다 작은 경우 값을 서로 바꿔준다.
현재 인덱스가 홀수인 경우, 다음 인덱스의 값보다 큰 경우 값을 서로 바꿔준다.
</pre>

>변경 이력
<pre>
</pre>