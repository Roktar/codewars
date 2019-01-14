# CamelCase Method - 19. 01. 14

이 문제는 입력값을 사용하여 출력값의 형태로 변형한다.

- 기본 함수
  - camelCase
    - String prototype에 선언한다.

- 호출 <br>
  <pre> "test case".camelCase(); </pre>
 
- 출력 <br>
   <pre> "TestCase" </pre>

<br>

- 추가함수
  - 없음

- 해당 문제는 String prototype에 함수를 선언하여 String 타입의 객체를 통해 함수를 호출한다. <br>
- prototype에 선언했기때문에 this를 통해 자신의 값을 가져올 수 있다.


> 순서
  - 빈 문자열을 통해 호출될 수도 있기때문에 빈 문자열인 경우, 빈 문자열을 반환한다.
    - 기준을 문자열의 길이로 잡았으며, 문자열의 길이가 0인 경우, 빈 문자열을 반환한다.
  - 빈 문자열이 아닌 경우, CamelCase로 만든다.
    - 공백을 통해 각 문자열을 분리할 수 있다. 따라서 공백을 기준으로 문자열을 나눠 배열로 만든다. (split 함수 사용)
    -  각 배열 요소의 첫번째 문자만 추출하여 대문자로 만든 후, 나머지 값은 그대로 연결시킨다. (map, substring, toUpperCase, join 함수 사용)
    - 결과값을 보면 공백이 포함되지않기때문에 문자열에 포함된 모든 공백을 제거시킨다. (replace 함수 사용)