# Consecutive Count - 21. 01. 12

- 기본 함수 (1)
  - Consecutive Count(items: 문자열|정수, key:문자열|정수)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>getConsectiveItems('ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii', 'i')</pre>
 
- 출력
  <pre>11</pre>

> 문제
  - 이 문제는 주어진 문자열에서 key로만 이루어진 가장 긴 문자열을 찾는다.
  - key 사이에 다른 문자가 들어간 경우에는 해당 문자를 기준으로 이전 key 문자열과 이후 key 문자열을 다르게 구분한다.

> 풀이 과정 및 결과
<pre>
   key로만 이루어진 문자열을 정규식을 통해서 모두 추출한 후, 가장 긴 문자열의 길이를 반환한다.
</pre>

>변경 이력
<pre>
</pre>