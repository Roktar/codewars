# Build Tower - 20. 05. 17

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - towerBuilder(nFloors: 정수)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre> towerBuilder(3) </pre>
 
- 출력
  <pre> ["  *  "," *** ","*****"] </pre>

> 문제
  - 이 문제는 주어진 배열을 사용하여 결과값 형태로 만든다.
  - 길이가 1인 배열은 *가 하나담긴 길이 1의 배열을 반환하며, 2 이상의 배열은 *의 수가 1, 3, 5, 7, 9.. 처럼 2씩 증가하는 문자를 담아 반환한다.

> 풀이 과정 및 결과
<pre>
new Array(n)을 하면 n의 크기를 갖는 배열을 생성한다.
- 해당 배열은 공백문자를 생성하는 데에 사용한다.
- 공백문자는 만약 n이 6인 경우, 5부터 0까지 감소한다.
- 즉, ['12345*12345'] 처럼 *의 앞 뒤에 붙일 공백 문자를 만든다.
*는 1부터 시작하여 2개씩 증가한다. 이 문자 옆에 위에서 선언한 배열을 문자열로 만들어 좌우에 붙인다.

- new Array(nFloors).fill(null).map(...) 는 원래 fill을 빼고 하려했으나 배열의 각 인덱스에 값이 없어서인지 map이 실행이 되지 않아 넣었으며 null을 넣은 이유는 배열 내에 있는 값을 사용할 것이 아니기때문에 아무 값을 넣어도 상관없어서 넣음.
</pre>

>변경 이력
