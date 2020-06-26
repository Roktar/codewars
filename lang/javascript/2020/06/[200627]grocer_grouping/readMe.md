# Grocer Grouping - 20. 06. 27

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - solution(input: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>solution("fruit_banana,vegetable_carrot,fruit_apple,canned_sardines,drink_juice,fruit_orange")</pre>
 
- 출력
  <pre>"fruit:apple,banana,orange\nmeat:\nother:juice,sardines\nvegetable:carrot"</pre>

> 문제
  - 이 문제는 다음과 같은 전제조건이 주어진다.
  - 1. 각 요소는 앞에 (fruit_)같이 (영문자열_) 이 앞에 붙는다.
  - 2. 각 요소는 쉼표로 구분된다.
  - 3. 결과값에 사용되는 키값은 fruit, meat, other, vegetable 4개며 해당 순서로 구성한다.(순서나 요소가 바뀌지 않음)

> 풀이 과정 및 결과
<pre>
쉼표로 구분되므로 먼저 쉼표를 기준으로 split한 후 각 인덱스의 값에서 다시 언더바로 split한다.
reduce에 fruit, meat, other, vegetable을 순서대로 하여 배열을 만들어서 초기값으로 넘겨주고 각 반복에서 일치하는 배열에 값을 넣은 후, 그 값을 사용하여 결과값을 만든다.
</pre>

>변경 이력
<pre>
</pre>