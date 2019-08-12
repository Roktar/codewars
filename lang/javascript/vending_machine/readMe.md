# Vending Machine - 19. 08. 12

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (2)
  - VendingMachine(items:배열, money:실수)
    - 객체를 생성할 때 사용할 함수(클래스 역할)
  - vend(selection:문자열, itemMoney:실수)
    - 결과값을 반환하는 함수
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(1) 
  - get(selector:문자열)
    - 조건에 맞는 객체를 찾아 반환
- 추가클래스(0)
- 추가객체(0)

- 입력
  <pre> machine.vend("A01",10.0) </pre>
 
- 출력
  <pre>  "Vending Smarties with 9.40 change." </pre>

> 문제
  - 이 문제는 VendingMachine이라는 객체를 사용하여 결과값을 생성한다.
  - VendingMachine 객체는 생성시 item의 목록(items)과 초기보유비용(money)를 받아 유지한다.
    - items 내의 객체는 {name, code, quantity, price} 정보를 가지고있으며, selection은 여기서 code와 비교하고 quantity를 조작하여 재고변동, price만큼 보유비용을 증가시킨다.
  - 이후 vend 함수를 통해 내부 재고 및 보유금액을 변동시킨다.

> 풀이
  - 다음 과정을 통해 풀이하였다.
    - 해당 VendingMachine에서 취급하는 item일 경우
      - 투입금액이 해당 item의 price와 같거나 높을 때
        - 재고가 있을 때
          - 재고를 1개 감소시키고 해당 item의 가격만큼 현재 보유비용 증가
          - 투입금액이 item의 price보다 높을 때만 거스름돈을 표시한다.
        - 재고가 없을 때 : 재고없음을 알린다.
    - 취급하지않는 경우 : 잘못되었다고 알린다.

>변경 이력
