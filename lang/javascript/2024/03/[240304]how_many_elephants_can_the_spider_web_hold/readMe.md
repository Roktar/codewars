# How many elephants can the spider web hold? - 24. 03. 04

- 기본 함수 (1)
  - breakTheWeb(strength: Number, width: Number)
    - 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 함수(0)
  - 변수(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    9200, 12
  </pre>
 
- 출력
  <pre>
    9
  </pre>

> 문제
  - 이 문제는 주어진 강도(Strength)에 최대 몇 마리의 코끼리를 놓을 수 있는 지를 구한다.
  - 가장 아래층은 코끼리 한마리당 강도 1000이고 width만큼 놓을 수 있으며, 한 층씩 위로 올라갈 때마다 코끼리의 무게는 +1000, 놓을 수 있는 코끼리의 수는 1씩 감소한다.
    - 강도 10000, 너비 3인 경우
      - 1층: 코끼리 3마리를 놓을 수 있다.(강도 1000 * 너비 3) => 잔여 강도 7000
      - 2층: 코끼리 2마리를 놓을 수 있다.(강도 2000 * 너비 2) => 잔여 강도 3000
      - 3층: 코끼리 1마리를 놓을 수 있다.(강도 3000 * 너비 1) => 잔여 강도 0

> 풀이 과정 및 결과
<pre>
  1층을 시작으로 너비만큼 놓으며, 이를 잔여 강도가 코끼리를 놓을 강도보다 낮아질 때까지 반복하여 놓은 코끼리 수를 구한다.
</pre>

>변경 이력
<pre>
24.03.19 신규 커밋
</pre>