# Inverted Ranges - 21. 07. 25

- 기본 함수 (1)
  - invertedRanges(ranges: 배열)
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
    invertedRanges([[25, 50]])
  </pre>
 
- 출력
  <pre>
    [[0, 24], [51, 100]]
  </pre>

> 문제
  - 이 문제는 주어진 배열을 사용해서 부분범위배열을 생성한다.
  - 범위는 0 ~ 100이며, 최초시작범위가 0일 때는 해당 부분배열의 종료범위가 시작이고 그 외의 경우에는 0이 시작범위가 된다.
  - 입력값이 빈 배열일 경우 [0, 100] 의 배열을 반환한다.
  - 입력값이 [0, 100] 일 경우 빈 배열을 반환한다.

> 풀이 과정 및 결과
<pre>
   길이가 1인 배열의 경우 for문으로 진입이 안되서 별도 if문으로 추가.
   각 부분범위배열의 시작값은 현재 배열의 종료값+1 이고 종료값은 다음 배열의 시작값-1 으로 부분범위배열의 값을 세팅.
</pre>

>변경 이력
<pre>
</pre>