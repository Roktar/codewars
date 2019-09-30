# FIRE and FURY - 19. 09. 30

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - fireAndFury(tweet:문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(3)
  - makeString(obj: 객체, cnt: 정수)
    - 실제 결과값을 만들어 반환하는 함수
  - repeatText(cnt: 정수, delimeter: 문자 혹은 문자열)
    - String prototype에 추가한 함수로 현재 String의 문자열을 반복한 결과값 생성. delimeter를 구분자로 사용한다.
  - range(start: 정수, end: 정수)
    - Array prototype에 추가한 함수로 start부터 end만큼 반복한다.  
- 추가클래스(0)
- 추가객체(2)
  - messages : 결과값을 만들 때 사용하기 위해 추가한 객체
  - 익명객체(클로저) : range 함수에서 반환한 객체
    - apply(func: 함수)
      - range 함수에서 받은 start부터 end까지 반복문을 실질적으로 실행하고 각 루프마다 처리할 작업은 func로 받아와서 처리한다.
    - done(func: 함수)
      - 결과값을 반환하는데 어떤 결과값을 반환할 지에 대한 처리는 func로 받아와서 처리한다.

- 입력
  <pre> FIREYYFURYYFURYYFURRYFIRE </pre>
 
- 출력
  <pre> You are fired! I am really furious. You are fired! </pre>

> 문제
  - 이 문제는 주어진 문자열을 사용하여 결과값을 반환한다.
  - 사용되는 문자는 F, I, R, E, U, R, Y의 7개 문자이며 이 외 문자가 포함될 시 적절하지않은 입력값으로 판단한다.
  - 소문자는 허용하지 않는다.

> 풀이
  - 먼저 허용되지 않은 문자나 FIRE, FURY 라는 값이 포함되어있지 않거나 공백이 포함된 경우 "fake tweet"를 반환한다.
  - FURY, FIRE 문자를 사용하여 결과값을 만든다.
    - 인접한 동일 문자열이 2개 이상인 경우, 중간값은 새로 추가되고 동일 문자열의 수-1개만큼 중간값을 넣는다.
      - FIRE의 경우 : and you 가 반복된다.
      - FURY의 경우 : really 가 반복된다.
      - 즉, 2개 이상인 경우에는 messages 객체의 suffix 값을 반복시켜 값을 만든다.(repeatText 함수 사용)
      - 1개인 경우에는 prefix와 postfix만을 사용하면 된다. (중간값을 사용하지 않기 때문)

>변경 이력
