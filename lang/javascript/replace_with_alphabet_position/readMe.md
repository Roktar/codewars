# Replace With Alphabet Position - 19. 05. 28

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - alphabetPosition(text:문자열)
    - 입력값을 사용하여 출력값 생성
- 문제에서 요구하는 다른 함수(0)
- 추가함수(4)
  - getDictionary()
    - 소문자 알파벳값을 키값으로 갖는 배열 생성 후 반환
  - preprocessor(array: 배열, dictionary: 객체)
    - 내부함수
      - run()
        - 출력값 생성 후 반환
    - 출력값 생성 후 반환
  - processor1(array: 배열, dictionary: 객체)
    - 내부함수
      - run()
        - 출력값 생성 후 반환
    - 출력값 생성 후 반환
  - processor2()
    - 내부함수
      - setValue(k:문자열, v:object)
        - processor2 객체에 새로운 키 및 값 추가
      - run(validList: 배열)
        - 출력값 생성 후 반환
    - 출력값 생성 후 반환

- 입력
  <pre> "The sunset sets at twelve o' clock." </pre>
 
- 출력
  <pre> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" </pre>

> 문제
  - 이 문제는 입력값 문자열의 숫자값(1~26)을 구한 후 반환한다.
  - 대문자는 제외하고 소문자만 사용한다.
  - 소문자 알파벳이 아닌 문자는 건너뛴다.

> 풀이
  - 먼저 입력값 문자열의 모든 문자들을 소문자화한다.(toLowerCase() 함수)
  - 이후 해당 문자열을 돌아보며 미리 생성해둔 dictionary 객체를 통해 숫자값을 구한 후 스페이스바 1칸을 기준으로 합쳐 그 결과를 반환한다.

>변경 이력