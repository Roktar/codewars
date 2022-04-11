# Consonant value - 21. 11. 16

- 기본 함수 (1)
  - solve(s: 문자열)
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
    solve("zodiac")
  </pre>
 
- 출력
  <pre>
    26
  </pre>

> 문제
  - 이 문제는 주어진 영문자열에서 모음을 기준으로 각 자음을 분리한 후, 그 자음의 값을 숫자로 치환해서 더한 값이 가장 큰 값을 찾는다.
  - a=1, b=2, ..., z=26 의 값을 가지며 분리된 값의 길이는 1 이상이다.

> 풀이 과정 및 결과
<pre>
   예제 "zodiac"의 경우, 모음을 기준으로 분리하면 ["z", "d", "c"]로 분리가 된다.
   각 값을 숫자로 치환하면 z=26, d=4, c=3이 되고 가장 높은 값은 26이므로 정렬을 한 후 26을 반환한다.
</pre>

>변경 이력
<pre>
</pre>