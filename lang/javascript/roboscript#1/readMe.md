# RoboScript #1 - Implement Syntax Highlighting - 19. 04. 10

이 문제는 특정 값에 특정 색상을 입히는 span 태그를 부착한 문자열을 반환한다.

- 기본 함수 (1)
  - highlight(code: 문자열)
    - 입력값을 받아 처리하는 함수
- 문제에서 요구하는 다른 함수(0)
- 추가함수 (2)
  - getColorTag(v: 문자 혹은 문자열, valid: 함수)
    - 색상을 입힌 태그를 붙인 문자열을 반환한다.

- 입력
  <pre> "F3RF5LF7" </pre>
 
- 출력
  <pre> "&lt;span style=\"color: pink\"&gt;F&lt;/span&gt;&lt;span style=\"color: orange\"&gt;3&lt;/span&gt;&lt;span style=\"color: green\"&gt;R&lt;/span&gt;&lt;span style=\"color: pink\"&gt;F&lt;/span&gt;&lt;span style=\"color: orange\"&gt;5&lt;/span&gt;&lt;span style=\"color: red\"&gt;L&lt;/span&gt;&lt;span style=\"color: pink\"&gt;F&lt;/span&gt;&lt;span style=\"color: orange\"&gt;7&lt;/span&gt;" </pre>

> 문제
  - 이 문제는 기존 문자열에 색상을 입히는 태그를 부착한 후 반환한다.
  - 색상을 입힐 때 다음과 같은 기준을 갖는다.
    - 문자
      - 현재 문자와 다음 문자가 다를 경우 각각 다른 색상을 입힌다.
      - 현재 문자와 다음 문자가 같을 경우 한 태그 안에 같은 문자를 여러개 넣어서 한 번에 태그를 씌운다.
    - 숫자
      - 현재 숫자와 다음 숫자가 달라도 계속 연결하며 다음에 문자가 오는 경우 그 문자는 다른 색상을 씌운다. 


> 풀이
  - 먼저 연속된 문자 혹은 숫자를 만들기위해 별도의 변수를 만들었으며 위의 조건에 맞춰 연속된 문자열을 생성한다.
    - 숫자의 경우, 숫자인지 확인하는 것 외에 다음 문자가 숫자가 아닌지도 체크하였다.
      - 체크하지않으면 문자 뒤에 숫자가 붙고 숫자 뒤에 문자가 붙는 경우가 발생.
  - 색상을 추출할 때는 해당 문자를 키값으로 색상값을 저장시킨 객체를 사용하였다.
    - 단, 연속된 문자가 올 수 있으므로 기준은 맨 앞 글자로 잡고 색상을 적용한다.
    - 숫자의 경우 0~9가 서로 같은 색상(orange)를 가지므로 해당 입력값이 숫자인지 판별한 후 number라는 키값을 이용하여 숫자에 색상을 입힌다.

>변경 이력