# Guitar Tab Transcriber - 20. 11. 16

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - turnChordsIntoTab (chords: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>turnChordsIntoTab('G')</pre>
 
- 출력
  <pre>
  'e|---3---|\n' +
  'B|---0---|\n' +
  'G|---0---|\n' +
  'D|---0---|\n' +
  'A|---2---|\n' +
  'E|---3---|\n' +
  '     G';</pre>

> 문제
  - 이 문제는 주어진 문자열을 사용하여 결과값을 만든다.

> 풀이 과정 및 결과
<pre>
우선 결과를 쉽게 구하기 위해 2차원 배열을 사용하였다.
6개의 줄에 대한 배열 result와 하단에 어떤 코드인지 표시할 footer로 나눴으며, 각 코드에 대한 값은 문제에서 제시가 되어있으므로 그대로 객체로 만들어둔 후 각 코드에 맞게 값을 하나씩 꺼내서 각 줄 배열에 추가한다.
</pre>

>변경 이력
<pre>
</pre>