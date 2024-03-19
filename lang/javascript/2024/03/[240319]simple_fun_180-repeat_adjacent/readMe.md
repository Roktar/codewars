# Simple Fun #180: Repeat Adjacent - 24. 03. 19

- 기본 함수 (1)
  - repeatAdjacent(s: String)
    - 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(1)
  - getLength(s: String, str: String, idx: Number)
    - s가 str[idx] 부터 시작해서 연속으로 몇 번 나오는 지 그 값을 반환 
- 추가클래스(0)
  - 함수(0)
  - 변수(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    "ccccoodeffffiiighhhhhhhhhhttttttts"
  </pre>
 
- 출력
  <pre>
    3
  </pre>

> 문제
  - 이 문제는 주어진 문자열에서 2개 이상으로 나오는 문자열의 연속된 그룹이 몇 개까지 나오는 지 그 갯수를 반환한다.
  - 2개 이상의 문자열이 연속해서 등장하는 경우, 하나의 Big Group으로 묶는다
    - 위 예시의 경우 c 4번, o 2번이 연속으로 등장하기에 ccccoo 가 하나의 big group이 됨
    - 그 뒤 d, e는 하나씩 나오는데 이 부분에서 이전 big group은 끊긴다.
    - 그 다음 f 4번, i 3번이 나오는데 이 또한 하나의 big group이 된다.
    - 그 뒤 g가 하나 나오는 부분에서 big group이 한 번 더 끊김
    - 이후 반복

> 풀이 과정 및 결과
<pre>
  현재 문자가 2개 이상 연속적으로 나오는 문자일 때만 서브 그룹으로 묶고, 1개만 나오는 문자가 나올 때는 그 서브 그룹을 하나의 빅그룹으로 처리한다.
</pre>

>변경 이력
<pre>
24.03.19 신규 커밋
</pre>