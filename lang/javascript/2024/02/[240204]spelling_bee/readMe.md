# Spelling Bee - 24. 02. 04

- 기본 함수 (1)
  - howManyBees(s: String)
    - 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(1)
  - find(x: Number, y: Number, depth: Number, arr: Array, maxX: Number, maxY: Number, dir: String, px: Number, py: Number)
    - 현재 값을 기준으로 상하좌우 탐색하며 결과값을 찾는 재귀 메소드
- 추가클래스(0)
  - 함수(0)
  - 변수(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
      [
        ['b', 'e', 'e','.', 'b', 'e','e'],
        ['.', 'e', '.','.', 'e', '.','.'],
        ['.', 'b', '.','.', 'e', 'e','b']
      ]
  </pre>
 
- 출력
  <pre>
    5
  </pre>

> 문제
  - 이 문제는 주어진 배열에서 'bee'라는 문자열을 몇 개나 만들 수 있는지 그 갯수를 구한다.
  - 방향은 최초 시작점부터 정해지며, 고정이다. 좌측-우측/상단-하단 이런 방향으로만 생성되며 좌측-우측-하단/우측-상단-좌측 이렇게 방향이 게속해서 바뀔 수는 없다.

> 풀이 과정 및 결과
<pre>
  현재 문자를 기준으로 재귀를 통해 문자열을 찾는다.
  1) b인 경우: 첫번째 문자열이므로 최초 방향은 여기서 지정한다. 상하좌우 무작위 탐색이어서 방향 지정을 하지 않으면 좌-우-상/좌-우-하 등 중간에 다른 방향으로 이동해서 문자열이 만들어지는 경우, 해당 건도 체크가 됨
  2) e이면서 depth가 1인 경우: 'be' 까지 만들어졌다고 가정을 하며, 1)에서 지정한 방향을 그대로 사용한다.
  3) e이면서 depth가 2인 경우: 'bee'를 다 만들어졌다고 가정을 하는데, 무작위 탐색이다보니 방향 체크를 하지 않으면 원치 않은 건도 체크가 되기 때문에 실질적인 방향 확인은 여기서 진행하고 정상적인 방향으로 생성된 경우 건수를 반환한다.
</pre>

>변경 이력
<pre>
24.02.04 신규 커밋
</pre>