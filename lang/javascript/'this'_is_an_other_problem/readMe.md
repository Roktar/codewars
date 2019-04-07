# "this" is an other problem - 19. 04. 07

이 문제는 출력값이 원하는대로 나오도록 기존에 주어진 객체의 기능을 변경한다.

- 기본 함수 (1)
  - NameOne(first: 문자열, last: 문자열)
    - firstName, lastName, fullName을 저장하고 출력하는 객체
- 문제에서 요구하는 다른 함수(0)
- 추가함수 (2)
  - setValue(obj: 객체, name: 문자열, fullYn: 문자)
    - 익명함수(value: 문자열)
      - obj에 name이란 키값의 value값을 익명함수로부터 받아오는 value로 설정하는 함수.
    - fullYn은 fullName 프로퍼티가 호출되었을 경우에만 Y값을 넣는다.
  - getValue(obj: 객체, name: 문자열)
    - 익명함수()
      - obj에 name이란 키값의 value값을 반환한다.

- 입력
  <pre> var namedOne = new NamedOne("Naomi","Wang") </pre>
 
- 출력
  <pre> 
    namedOne.firstName : "Naomi" 
    namedOne.lastName : "Wang"
    namedOne.fullName : "Naomi Wang"
  </pre>

> 문제
  - 이 문제는 이미 구현되어있는 객체의 기능을 변경한다.
  - 기존에 구현되어있던 소스는 다음과 같다.
    <pre>
    function NamedOne(first, last) {
    // -- SHOULD be changed --
        this.firstName = first;
        this.lastName = last;
        this.fullName = this.firstName + ' ' + this.lastName;
    }
    </pre>
  - 처음 객체를 만들면 인자로 주어졌던 값을 사용하여 firstName, lastName, fullName에 값을 넣는다.
  - 이후 firstName이나 lastName의 값을 변경하면 firstName과 lastName의 값은 정상적으로 변경되나 fullName의 값은 변경되지 않는다.
    - firstName과 lastName이 변경될 때도 fullName의 값이 변경되어야한다.


> 풀이
  - 문제 하단의 hint를 보고 defineProperty 함수를 사용하여 기능을 개선하였다.
    - ( Hint: in this kata you'll try to define properties of an object )
  - defineProperty 함수에 총 3개의 인자를 넘겨서 프로퍼티를 정의한다.
    - 첫번째 인자는 대상 객체, 두번째 인자는 키값, 세번째 인자는 옵션이다.
  - 해당 프로퍼티가 실행될 때 바뀌어야할 기능은 setter와 getter이므로 옵션에 set, get에 대한 옵션을 넘겨준다.
    - setter만 바꾸려했으나, 해당 프로퍼티 내부에서 다시 자기 자신에 값을 넣으려하면 또다시 해당 프로퍼티가 호출이 되어 재귀호출이 계속 되어버린다. 따라서 재귀호출을 막기 위해 _를 붙인 키값을 사용하였다.
         - { set : function(value) { this.firstName = value; }} 에서 this.firstName에 값을 넣으려하면 해당 set 함수가 다시 실행이 되는 것이다. 
    - getter는 _를 붙인 키값에 담겨있는 값을 반환한다.
  - firstName과 lastName의 값을 변경하려 할 때, fullName도 같이 변경되도록 하고 fullName을 변경하려할 때 firstName과 lastName도 변경되도록 하였다.
  - fullName에 값을 넣을 때, firstName과 lastName을 _가 붙은 것이 아닌 일반 프로퍼티로 호출하려했으나 순환호출이 되고 있어서 부득이하게 _를 붙인 것으로 사용하였다.
  - #2는 set과 get의 기능이 공통적이어서 해당 익명함수를 유명함수로 분리하여 setter와 getter에 해당 함수를 넘겨주었다.