# Hex to base64 - 22. 05. 29

- 기본 함수 (1)
  - hexToBase64(hex: String)
    - 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(1)
  - getIntValue(c: String)
    - 입력값에 따른 정수값을 반환한다.
- 추가클래스(0)
  - 함수(0)
  - 변수(0)
- 추가변수(1)
  - base64Table: Object
    - base64 테이블을 구성

- 입력 or 호출
  <pre>
    hexToBase64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d')
  </pre>
 
- 출력
  <pre>
    'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'
  </pre>

> 문제
  - 이 문제는 주어진 16진수 값을 base64로 인코딩한다.
  - base64 변환 시 16진수를 2진수로 먼저 바꿔서 하나로 붙인 후, 바꾼 2진수에서 6자리씩 끊어서 10진수값을 만들고 해당 값을 사용하여 base64 테이블에서 맞는 값을 찾아서 해당 값으로 치환한다.
  - 마지막 비트가 6비트가 안될 경우, 2비트 단위로 '=' 를 사용하여 패딩 문자열을 추가한다.

> 풀이 과정 및 결과
<pre>
  base64 테이블은 별도로 빼고 싶진 않았는데 아스키코드표로 대체가 안되서 그냥 별도 변수에 담음.
  주어진 값에서 각 값마다 2진수 값으로 만드는데, 16진수의 각 자리는 4비트이고 2진화 시 앞에 0이 붙지는 않아서 모자란 자리수만큼 앞에는 0으로 채운다.
  이후 하나의 문자열로 만들어서 다시 6비트단위로 쪼개고, 이 6비트값을 10진화해서 base64 테이블에 있는 값으로 바꾼다.
</pre>

>변경 이력
<pre>
</pre>