# New Cashier Does Not Know About Space or Shift - 20. 08. 02

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - getOrder(input: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(1)
  - menuList : (배열) 메뉴 목록을 보관하는 배열

- 입력 or 호출
  <pre>getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"</pre>
 
- 출력
  <pre>2</pre>

> 문제
  - 이 문제는 주어진 문자열에서 메뉴를 추출한 후 공백을 기준으로 문자열로 만들어 반환한다.

> 풀이 과정 및 결과
<pre>
메뉴명은 입력 문자열에 그대로 들어가있으므로 정규식을 통해서 메뉴를 추출한 후 문자열로 만들어 반환한다.
메뉴 표시 순서는 menuList 배열의 순서를 그대로 사용하면 된다.
</pre>

>변경 이력
<pre>
</pre>