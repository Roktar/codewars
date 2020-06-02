# The Vowel Code - 20. 06. 02

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (2)
  - encode(string: 문자열)
    - 결과값 출력
  - decode(string: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre> encode('How are you today?')
   decode('h2ll4') </pre>
 
- 출력
  <pre> 'H4w 1r2 y45 t4d1y?'
   'hello' </pre>

> 문제
  - 이 문제는 a,e,i,o,u를 각각 1,2,3,4,5로 바꾸고(encode) 다시 1,2,3,4,5를 a,e,i,o,u로 바꾼다.(decode)

> 풀이 과정 및 결과
<pre>
encode는 aeiou를 12345로 바꾼다. "aeiou" 문자열에서 12345 숫자가 몇 번 인덱스에 있는지 찾은 후 인덱스는 0번부터 시작이므로 1을 더한다.
decode는 12345를 aeiou로 바꾼다. [a,e,i,o,u] 배열에서 현재 정수값에서 -1한 값을 인덱스로 사용하여 배열에서 꺼낸다.
</pre>

>변경 이력
<pre>
</pre>