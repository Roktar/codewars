# Simple Web Framework #1: Create a basic router - 19. 02. 10

이 문제는 입력값을 사용하여 출력값을 꺼낸다.

- 기본 함수 (1)
  - Router
    - 작업을 처리할 객체를 생성해서 반환하는 역할을 하는 함수

- 문제에서 요구하는 다른 함수(2)
  - bind
    - URL과 요청형식과 해당 요청형식에 대한 결과를 반환하는 함수를 인자로 받아 객체에 넣는 함수
  - runRequest
    - bind 함수를 통해 객체에 넣어뒀던 함수를 실행하는 함수

- 입력 <br>
  <pre>
    var router = new Router;
    router.bind('/hello', 'GET', function(){ return 'hello world'; });
    router.runRequest('/hello', 'GET')
  </pre>
 
- 출력 <br>
  <pre> hello world </pre>

> 문제
  - 작업을 처리할 객체를 정의하는 Router 함수를 완성시켜야한다.
  - Router 객체는 bind 함수와 runRequest 함수를 가진다.
  - bind 함수는 url, 요청형식, 함수를 인자로 받는다.
  - runRequest 함수는 url, 요청형식을 받아 bind에서 추가했던 함수를 실행시킨다.

> 설명
  - 내부 객체 router를 선언한다. (line 2)
  - router 객체에 bind 함수를 통해 추가시킬 객체를 추가한다. (line 3)
  - router 객체에 요청한 url과 형식에 대한 값이 없을 경우 오류문구를 출력하기위해 미리 추가해둔다. (line 4)
  - bind 함수를 router 객체에 추가한다. (line 6-10)
  - runRequest 함수를 router 객체에 추가한다. (line 12-18)
  - 해당 객체를 반환하여 해당 함수를 호출한 쪽에서 router객체를 사용할 수 있도록 한다. (line 20)