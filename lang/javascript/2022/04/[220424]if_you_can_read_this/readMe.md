# If you can read this... - 22. 04. 24

- 기본 함수 (1)
  - to_nato(words: String)
    - 정수 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    to_nato('If you can read')
  </pre>
 
- 출력
  <pre>
    "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta"
  </pre>

> 문제
  - 이 문제는 주어진 입력값을 NATO 음성 알파벳으로 변환한다.
  - 숫자는 사용되지 않으며, 각 알파벳별 필요한 NATO 음성 알파벳 목록은 NATO 객체에 정의되어있다.

> 풀이 과정 및 결과
<pre>
  NATO 객체에서는 키값이 전부 소문자이므로 입력값 문자열을 전부 소문자로 변환하고 공백을 제거한다.
  이후 문자열을 배열로 만든 후 각 문자를 돌면서 변환하고, 특수문자는 변환하지 않고 그대로 넣은 다음 마지막에 하나의 문자열로 만들어 반환한다.
</pre>

>변경 이력
<pre>
</pre>