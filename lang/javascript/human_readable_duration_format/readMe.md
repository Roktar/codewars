# Human readable duration format - 19. 08. 18

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - formatDuration(seconds: 정수)
    - 초를 입력받아 연월일시분초 형태로 반환하는 함수
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(2) 
  - preprocess(val: 정수, conditions:배열, func1: 함수)
    - 클로저 용도로 만든 함수
  - getDuration(valueWrapper: 객체, conditions: 배열, func: 함수)
    - 초를 연월일시분초 형태로 만드는 함수.
- 추가클래스(0)
- 추가객체(0)

- 입력
  <pre> 253374061 </pre>
 
- 출력
  <pre> 8 years, 12 days, 13 hours, 41 minutes and 1 second </pre>

> 문제
  - 이 문제는 초를 입력받으면 다음과 같은 형태로 만들어 반환한다.
    - 3662초인 경우 : 1 hour, 1 minute and 2 seconds
  - 구분은 쉼표로 하나 마지막 2개의 구분은 쉼표가 아닌 "and"로 구분한다.

> 풀이
  - 구하고자하는 자리에 대한 초값은 검색을 통해 미리 구해둔 후 활용하였다.(standardTime 객체)
  - valueWrapper는 seconds값을 다른 함수에서 처리한 후 그 값을 반환시키지않아도 처리 후 값이 반영되도록 객체에 넣어서 사용하였다.
  - 현재 초값이 기준값(연도, 월 등)보다 큰 경우 그 시간을 증가시키고 기준값만큼 현재 초값에서 뺀다.
    - 초는 문자만 추가한 후 그대로 반환한다.

>변경 이력
