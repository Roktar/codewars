# Poetic rhythm - 19. 07. 14

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - identifvMeter(str:문자열)
    - 입력값 사용하여 출력값 생성
- 기본적으로 주어지는 객체(1)
  - syllables
    - short와 long에 각각 배열이 주어짐.
- 문제에서 요구하는 다른 함수(0)
- 추가함수(3) 
  - preprocessBackslash(v:문자열)
    - .과 / 앞에 \를 붙여주는 역할을 하는 함수.
  - makeCondition(arr:배열, option:문자열, functions:배열)
    - 정규식 객체를 만들어 반환하는 함수.
  - replace(origin:문자열, regs:배열, repVal:배열)
    - origin 문자열에 replace 함수를 사용하여 특정값을 변경.
- 추가클래스(0)
- 추가객체(1)
  - poeticList
    - 문제에서 구한 키값을 사용하여 결과값을 꺼낼때 사용하기위한 함수

- 입력
  <pre> // </pre>
 
- 출력
  <pre> Spondee </pre>

> 문제
  - 이 문제는 short와 long에 있는 값을 조합하여 정해진 4가지의 출력값 중 하나를 반환한다.
  - 제약조건은 다음과 같다.
    - short와 long 안에 없는 값이 들어오는 경우, "What is this?"를 반환한다.
    - 해당 문자열을 2로 나눠 1로 나누어떨어지거나 길이가 2보다 큰 경우 "Not a dissyllable."를 반환한다.

> 풀이
  - 쉬운 처리를 위해 short와 long의 값을 변경하는 작업을 진행하였다.
    - short에 있는 값들은 전부 "a"로 치환하고 long에 있는 값들은 전부 "b"로 치환하였다.
    - short와 long 내부의 값 추가, 삭제 등을 감안하여 정규식은 해당 배열의 크기만큼 돌아 그 값들을 전부 정규식에 포함시키기위해 별도 함수에서 정규식 객체를 만들어 반환하였다.(makeCondition 함수)
    - replace 또한 함수 하나를 사용하여 원하는 결과값을 얻기위해 대신 replace를 여러번 반복해주는 함수를 만든 후 replace 결과한 값을 반환한다. 위에서 만든 정규식은 이 함수에서 사용한다.(replace 함수)
  - 정규식을 사용하여 short에 포함되는 값들은 전부 a로, long에 포함되는 값들은 전부 b로 치환한 후 그 결과를 사용하여 poeticList 객체에서 결과값을 꺼낸다.
    - 치환결과는 aa, ab, ba, bb 4가지 중 하나이다.
  

>변경 이력
