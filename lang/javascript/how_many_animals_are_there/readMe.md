# How many animals are there? - 19. 01. 03

이 문제는 입력값에 포함된 숫자를 추출한 후 그 결과값을 반환한다.

- 파라미터
  - sentence : 입력값

- 입력 <br>
  <pre> "I see 3 zebras, 5 lions and 6 giraffes." </pre>
 
 - 출력
   <pre> 14 </pre>

입력값에서 포함된 숫자를 이용해서 합을 구한다음 반환한다.
<br>
<br>

> 순서
- 숫자만을 추출하기위해 정규식을 사용한다.
  - match 함수를 사용하여 문자열로 된 숫자 배열을 반환한다. (line 2)
    - 참고 : https://code.i-harness.com/ko-kr/q/98a4e3
- 입력값에 숫자가 하나도 없을 경우가 있는데, 이 경우에는 null이 반환되기때문에 null인 경우 0, 숫자가 하나라도 있는 경우에는 그 합을 구하여 반환한다. (line 3)