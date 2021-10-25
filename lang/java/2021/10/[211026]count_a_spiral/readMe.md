# Count a Spiral - 21. 10. 26

- 기본 함수 (1)
  - BigInteger sum(BigInteger size)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    Spiral.sum(BigInteger.valueOf(10));
  </pre>
 
- 출력
  <pre>
    59         
  </pre>

> 문제
  - 이 문제는 size*size의 배열 안에서 나선모양을 그렸을 때, 색칠되는 항목의 갯수가 몇 개인지를 센 후 반환한다.

> 풀이 과정 및 결과
<pre>
   나선의 갯수는 Round(size*size/2)+(size-1)으로 구할 수 있는데, BigInteger는 나누기 연산을 하면 소수점은 잘리고 반올림을 할 수 있는 메소드가 없어서 소수점도 남고 Round를 사용할 수 있는 BigDecimal로 임시변환해서 계산한 후 다시 BigInteger로 변환해서 반환함. 
   - double형으로 바꿔 계산하는 방법도 있었으나 BigInteger를 쓴만큼 아마 double 범위를 벗어나는 입력값이 들어올까봐 고려하지않음.
</pre>

>변경 이력
<pre>
</pre>