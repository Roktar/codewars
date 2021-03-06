# Simple transposition - 19. 01. 28

이 문제는 입력값을 사용하여 출력값의 형태로 변형한다.

- 기본 함수
  - simpleTransposition
    - 파라미터
      - text : 문자열
        - 입력값

- 입력 <br>
  <pre> "Simple text" </pre>
 
- 출력 <br>
   <pre> "Sml etipetx" </pre>

<br>

- 추가함수
  - 없음

> 문제
  - 주어진 입력값에서 값을 하나씩 꺼내 출력값의 형태로 만든다.
  - 문제에서 주어진 예시는 다음과 같다.
    - Row 1 : [S, m, l,  , e, t]
    - Row 2 : [i, p, e, t, x,  ]
    - 위 예시를 보면 text에서 2(Row 개수)로 나눠 0인 경우 Row 1에, 1인 경우 Row 2에 포함시킬 수 있음을 확인할 수 있다.
  - Row 1에 Row 2를 연결한다.
    - 만들어지는 배열은 [S, m, l,  , e, t, i, p, e, t, x,  ]가 된다.
  - 이 배열을 문자열로 만든다.
    - 만들어지는 문자열은 "Sml etipetx"가 된다.

> 설명
  - 반복횟수를 지정한다. 두 곳에 나눠 저장하기때문에 전체 길이의 반만큼 반복한다. (line 2)
  - 현재 인덱스를 나타낼 변수를 선언한다. (line 3)
  - 입력 문자열을 배열로 만든다. (line 4)
  - Row 2에 해당하는 배열을 선언한다. (line 5)
    - Row 1에 해당하는 배열은 따로 만들지않고 기존 배열(orgn_arr)을 사용한다.
  - Row 2에 값을 넣는다. (line 7-8)
    - 원본 배열(orgn_arr)의 크기를 바꾸기위해 splice함수를 사용했다.
    - 여기서는 2로 나누지않고 다음과 같이 하였다.
      - 입력값 simple text의 길이는 11이다.
      - simple text에서 인덱스 1에 해당하는 위치의 값은 i다. 
        - i를 Row 2에 집어넣고 Row 1에서 뺀다.
          - Row 1의 크기는 10이 되고, 남은 문자는 [s, m, p, l, e,  , t, e, x, t] 가 된다.
          - Row 2는 [i]가 된다.
      - smple text에서 인덱스 2에 해당하는 위치의 값은 p다.
        - p를 Row 2에 집어넣고 Row 1에서 뺀다.
          - Row 1의 크기는 9가 되고, 남은 문자는 [s, m, l, e,  , t, e, x, t] 가 된다.
          - Row 2는 [i, p]가 된다.
      - smle text에서 인덱스 3에 해당하는 위치의 값은 e다.
        - e를 Row 2에 집어넣고 Row 1에서 뺀다.
          - Row 1의 크기는 8이 되고, 남은 문자는 [s, m, l,  , t, e, x, t] 가 된다.
          - Row 2는 [i, p, e]가 된다.
      - 이렇게 원본 배열의 크기를 1 낮추고 인덱스를 1 증가시키면 2만큼 이동한 효과를 볼 수 있다.
  - Row 1이 된 orgn_arr에 Row 2인 arr 배열을 연결시키고 문자열로 만들어 반환시킨다. (line 10)  