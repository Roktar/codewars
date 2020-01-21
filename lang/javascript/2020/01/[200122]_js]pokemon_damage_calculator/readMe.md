# Pokemon Damage Calculator - 20. 01. 21

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - calculateDamage(yourType: 문자열, opponentType: 문자열, attack: 정수, defense: 정수)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(2)
  - getDamageType(yourType: 문자열, opponent: 문자열)
    - 상대 속성에 약한지 혹은 동등한지, 아니면 강한지 해당 문자(weak, strong, equal)를 반환하는 함수
  - addItem(target: Object, key: 문자열, obj: Object)
    - target에 key를 키값으로 obj를 value값으로 저장하는 함수
- 추가클래스(0)
- 추가객체(2)
  - compatibilityList : 현재 타입에 대한 상성 정보를 입력하여 보관하는 객체
  - effectiveList: 상성에 따른 대미지보정율을 입력하여 보관하는 객체
- 추가변수(0)

- 입력 or 호출
  <pre> calculateDamage("fire", "water", 100, 100) </pre>
 
- 출력
  <pre> 25 </pre>

> 문제
  - 이 문제는 주어진 배열을 결과형태로 만든다.
  - 입력값으로 주어진 타입으로 상대타입에 입힐 수 있는 대미지 수치를 계산한다.
  - 대미지 계산 공식은 문제에서 주어졌으며 다음과 같다.
    <pre> damage = 50 * (attack / defense) * effectiveness
 </pre>


> 풀이 과정 및 결과
<pre>
해당 문제에서 사용하는 속성은 4가지이며, 각각 속성은 문제에서 주어진 것을 사용하여 다음과 같이 지정했다.
- 불: 물에 약함. 풀에 강함. 전기와 동등
- 전기: 물에 강함. 풀, 불과 동등
- 물: 물과 전기에 약함. 불에 강함
- 풀: 불에 약함. 물에 강함. 전기와 동등
- 강할 시 보정은 2, 동등 시 보정은 1, 약할 시 보정은 0.5
- 모든 속성은 자신과 같은 속성에 대해 0.5의 보정율을 가짐.

위를 토대로 compatibilityList에 해당 정보를 저장하였으며, 상대 타입에 따라 해당 객체에서 꺼내 해당 타입에 대한 상성 정보를 사용하여 기본계산에 보정을 추가하여 반환한다.
</pre>

>변경 이력
