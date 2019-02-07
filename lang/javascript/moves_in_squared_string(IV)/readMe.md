# Moves in squared strings (IV) - 19. 02. 07

이 문제는 입력값을 사용하여 출력값의 형태로 변형한다.

- 기본 함수 (4)
  - oper
    - fct : 함수, 실행할 함수를 인자로 받는다.
    - s : 문자열, 입력값
  - diag2Sym
    - strng : 문자열, 입력값
  - rot90Counter
    - strng : 문자열, 입력값
  - selfieDiag2Counterclock
    - strng : 문자열, 입력값

- 추가함수 (2)
  - make 함수
    - 반복 작업을 묶기위한 함수
  - retrieve 함수
    - split 함수를 덜쓰기위해 추가한 함수
  - 그 외 익명함수 2개

- 입력 <br>
  <pre> "abcd\nefgh\nijkl\nmnop" </pre>
 
- 출력 <br>
  - diag2Sym 함수
    <pre> "plhd\nokgc\nnjfb\nmiea" </pre>
  - rot90Counter 함수
    <pre> "dhlp\ncgko\nbfjn\naeim" </pre>
  - selfieDiag2Counterclock 함수
    <pre> "abcd|plhd|dhlp\nefgh|okgc|cgko\nijkl|njfb|bfjn\nmnop|miea|aeim" </pre>

> 문제
  - 주어진 입력값을 사용하여 출력값의 형태로 만든다.
  - oper 함수는 단순 다른 함수를 호출하기위해 사용되는 기본함수이며 다른 3개의 함수는 결과값이 서로 다르다.
  - 입력값은 다음과 같다.
    <pre>
    abcd
    efgh
    ijkl
    mnop
    </pre>
  - diag2Sym 함수
    - 이 함수는 다음 형태로 만든다.
      <pre>
      plhd
      okgc
      njfb
      miea
      </pre>
    - 첫째줄은 입력값의 마지막열을 뽑아 역순으로 만들어져있다.
      - p는 [3][3], l은 [2][3], h는 [1][3], d는 [0][3] 위치에 있다.
    - 둘째줄은 입력값의 마지막 바로 앞 열을 뽑아 역순으로 만들어져있다.
      - o는 [3][2], k은 [2][2], g는 [1][2], c는 [0][2] 위치에 있다.
  - rot90Counter 함수
    - 이 함수는 다음 형태로 만든다.
      <pre>
      dhlp
      cgko
      bfjn
      aeim
      </pre>
    - 첫째줄은 입력값의 마지막열을 뽑아 만들어져있다. diag 함수처럼 뽑은 값을 역순으로 만들지않았다.
      - d는 [0][3], h는 [1][3], l은 [2][3], p는 [3][3]에 있다.
    - 둘째줄은 입력값의 마지막 바로 앞 열을 뽑아 만들어져있다. 
      - c는 [0][2], g는 [1][2], k는 [2][2], o는 [3][2]에 있다.
  - selfieDiag2Counterclock 함수
    - 이 함수는 다음 형태로 만든다.
      <pre>
      abcd|plhd|dhlp
      efgh|okgc|cgko
      ijkl|njfb|bfjn
      mnop|miea|aeim
      </pre>
    - 첫째줄은 원본입력값의 0번인덱스, diag 함수 결과값의 0번인덱스, rot 함수 결과값의 0번인덱스의 값을 |을 사용하여 하나의 문자열로 만들어져있다.
    - 둘째줄은 원본입력값의 1번인덱스, diag 함수 결과값의 1번인덱스, rot 함수 결과값의 1번인덱스의 값을 |을 사용하여 하나의 문자열로 만들어져있다.

> 설명(#2)
  - oper 함수 (line 70-72)
    - 적절한 함수를 호출한다. 
  - diag2Sym 함수 (line 44-50)
    - oper함수로부터 입력값을 받아 출력값의 형태로 만든다. (line 45-49)
      - 별도로 만든 make 함수에 해당 함수에서만 할 작업을 익명함수로 전달하여 원하는 값을 얻는다.
  - rot90Counter 함수 (line 60-68)
    - oper함수로부터 입력값을 받아 출력값의 형태로 만든다. (line 53-57)
      - 별도로 만든 make 함수에 해당 함수에서만 할 작업을 익명함수로 전달하여 원하는 값을 얻는다.
  - selfieDiag2Counterclock 함수 (line 60-68)
    - oper함수로부터 입력값을 받아 출력값의 형태로 만든다. (line 61-67)
  - make 함수 (line 73-79)
    - diag와 rot 함수에서 중복되는 코드를 별도로 빼낸 함수로 전달받은 익명함수를 실행하여 결과값을 만든다.
  - retrieve 함수 (line 82-84)
    - selfie 함수에서 split("\n") 함수를 빼기위해(#1의 selfie 함수 확인) 추가한 함수로 true값을 받으면 배열로, false값을 받으면 문자열로 만들어 반환한다.