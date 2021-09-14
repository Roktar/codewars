# Range Extraction - 21. 09. 14

- 기본 함수 (1)
  - solution(list: 배열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(1)
  - rangeExtract(idx: 정수, arr: 배열, cnt: 정수)
    - 연속되는 수가 몇 개인지를 파악하는 함수
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]
  </pre>
 
- 출력
  <pre>
    "-6,-3-1,3-5,7-11,14,15,17-20"
  </pre>

> 문제
  - 이 문제는 주어진 배열에서 연속되는 수가 있으면 '해당범위의 최소수-해당범위의 최대수'로 묶고 없으면 그 자리의 값을 사용하여 결과값을 만든다.
  - 연속되는 수는 3자리 이상(ex 1,2,3 or -6,-5,-4)일 때만 묶으며 2자리 이하는 범위로 묶지 않는다.

> 풀이 과정 및 결과
<pre>
   전부 재귀로 해보려고했으나 재귀가 아직 익숙하지 않아 반복문+재귀로 풀이.
   반복문에서는 기준값을 넣어주고 재귀에서는 현재 인덱스의 값과 다음 인덱스의 값을 비교하면서 연속되는 수의 갯수를 체크한다.
</pre>

>변경 이력
<pre>
</pre>