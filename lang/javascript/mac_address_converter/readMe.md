# Mac address converter - 19. 02. 18

이 문제는 입력값을 사용하여 출력값의 형태로 만든다.

- 기본 함수 (1)
  - revOrderMark(address : 문자열)
    - 출력값 생성

- 문제에서 요구하는 다른 함수(0)
- 추가함수 (4)
  - toDecimal(v : 문자열)
    - 16진수를 10진수로 만드는 함수
  - replaceValue(v : 문자)
    - 문자인 경우 숫자로, 숫자인 경우 그대로 반환하는 함수
  - fillZero(v : 문자열, bit : 정수)
    - 매개변수 v의 길이가 매개변수 bit크기보다 작을 때, 맨 앞에 부족한만큼 0을 채우는 함수
  - coverZero(v : 문자열)
    - 매개변수 v의 길이가 1인 경우, 맨 앞에 0을 추가해주는 함수

- 입력 <br>
  <pre> "8A-EF-09-2F-4D-13" </pre>
 
- 출력 <br>
  <pre> "51-F7-90-F4-B2-C8" </pre>

> 문제
  - 이 문제는 다음과 같은 과정을 거쳐 출력값을 생성한다.
  1) 각 자리에 있는 16진수들을 2진수화한다.
  2) 해당 2진수값을 역순으로 돌린다.
  3) 해당 2진수값을 다시 16진수로 만든다.
  - 만약 잘못된 주소값이 들어온 경우, "00-00-00-00-00-00"을 반환한다. => 여기서는 배열의 크기가 6이 아닌 경우를 잘못된 주소값으로 판단한다.

> 풀이
  - 파라미터는 하나의 문자열로 들어오기때문에 '-'를 기준으로 6개의 16진수로 쪼갠다.
  - 16진수를 2진수화한다.
    - 2진수화하기 전, 먼저 10진수화를 진행한다.(toDecimal 함수)
      - 만약 문자값인 경우, 숫자로 바꾼다.(replaceValue 함수)
    - 10진수값을 2진수값으로 바꾼다.
      - toString 함수에 인자로 2를 주면 2진수값을 얻을 수 있다.
      - 하지만 원하는 길이로는 나오지않을 수 있기때문에 길이를 맞춘다.(fillZero 함수)
      - 길이는 8자리를 사용했다. 
    - 위에서 얻은 2진수를 10진수화된 2진수로 바꾼다.
      - 위에서 얻은 값을 바로 사용하여 toString을 통해 16진수로 바꾸려했는데 변환이 되지 않았다.
    - 10진수화된 2진수를 toString 함수를 사용하여 16진수화시킨다.
      - 단, 16진수화하여 얻는 문자는 대문자가 아닌 소문자기때문에 대문자로 변환시킨다. (replace함수)
    - 이렇게해서 16진수를 얻는다. 하지만 10 미만의 결과값이 나오는 경우, 2자리가 아닌 1자리로만 나온다. 따라서 1자리인 경우, 앞에 0을 추가해준다. (coverZero 함수)
    - 배열에 추가했던 각 16진수의 값을 join 함수를 통해 문자열로 만들어 반환한다.