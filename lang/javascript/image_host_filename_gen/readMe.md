# Image host filename generator- 19. 02. 13

이 문제는 출력값을 만든 후, 한 출력값마다 3개의 assert를 거친다.

- 기본 함수 (1)
  - generateName()
    - 출력값 생성

- 문제에서 요구하는 다른 함수(0)
- 추가함수 (0)

- 입력 <br>
  <pre> ABCDEF </pre>
  <pre> BBCDEF </pre>
 
- 출력 <br>
  <pre> true </pre>
  <pre> false </pre>

> 문제
  - 이 문제는 6자리 이내의 고유한 파일명을 만든다.
  - 서로 다른 문자열이 만들어져야한다.

> 설명
  - 문자열 생성에 사용할 문자를 보관할 배열을 선언한다. (line 3)
  - 랜덤의 범위를 지정한다. 여기서는 위에서 생성한 문자열의 길이를 범위로 지정한다. (line 4)
  - 문자를 담을 배열의 주소를 담을 변수를 생성한다. (line 5)
  - 문자열을 생성한다. (line 7 - 13)
    - 문자를 담을 배열을 위에서 만든 변수에 할당한다. (line 8)
    - 반복문을 통해 3번 라인에서 선언한 배열에서 문자를 하나씩 꺼낸다. 위치는 random함수를 사용하여 랜덤하게 꺼낸다.(line 9-12)
    - 이미 등록된 문자열인 경우, 반복문을 다시 돌려 새로운 문자열을 만든다.