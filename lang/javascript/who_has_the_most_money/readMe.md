# Who has the most money? - 19. 12. 11 ~ 12

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - mostMoney(students: 배열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(3)
  - Student
    - addMoneyType(typeName: 문자열, typeValue: 정수)
      - Student 클래스 내 type 변수에 typeName 이름을 키값으로 사용하여 typeValue를 지정한다.
    - findMostMoney(students: 배열)
      - 결과값 계산
  - Student prototype
    - calculate()
      - 해당 객체의 지폐 총합계를 계산하여 name:money 형태의 객체를 반환한다.
- 추가클래스(0)
- 추가객체(1)
  - Student
    - type
      - 사용가능한 지폐와 그 지폐의 금액을 정수로 저장
- 추가변수(0)

- 입력 or 호출
  <pre> 
  const andy = new Student("Andy", 0, 0, 2);
  const stephen = new Student("Stephen", 0, 4, 0);
  const eric = new Student("Eric", 8, 1, 0);
  const david = new Student("David", 2, 0, 1);
  const phil = new Student("Phil", 0, 2, 1);

  mostMoney([andy, stephen, eric, david, phil]) 
  </pre>
 
- 출력
  <pre> Eric </pre>

> 문제
  - 이 문제는 주어진 배열과 정수를 사용하여 결과값을 출력한다.
  - Student 타입의 객체를 받아 그 객체 중 가장 많은 금액을 가진 객체의 이름을 반환한다.

> 풀이 과정 및 결과
<pre>
사용하는 지폐의 종류는 3종류(5, 10, 20)으로 객체 생성 시 해당 값들은 자동으로 지정된다.(테스트케이스에서 지정됨)
인자는 배열로 받으며, 각 배열 요소에서 총계를 구한 후 max 변수와 비교하여 max 변수에 있는 총계보다 현재 요소의 총계가 더 큰 경우 대체하는 방식으로 가장 많은 금액을 가진 학생을 찾는다.
단, 모든 학생들이 같은 금액을 보유하는 경우 all을 반환해야하는데, 이 경우는 cnt 변수를 사용하였다.

* cnt의 초기값은 1로, 최소 1명은 최대 금액을 보유한 것을 의미한다.
* max값과 현재 학생의 금액을 비교하여 같은 금액인 경우 cnt를 증가시키며, 이는 결국 cnt와 학생의 수가 동일하면 모두가 같은 금액을 가진 것으로 볼 수 있다.
</pre>

>변경 이력
