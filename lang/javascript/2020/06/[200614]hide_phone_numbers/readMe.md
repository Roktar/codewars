# Hide phone numbers - 20. 06. 14

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - encryptNum(number: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre> encryptNum("1-212-420-0202") </pre>
 
- 출력
  <pre> "1-212-4XX-XXXX" </pre>

> 문제
  - 이 문제는 문제에서 주어진 접두어로 시작하는 문자열은 뒤에 나오는 6개의 숫자를 X처리하고 반환하고 다른 접두어로 시작하는 문자열은 false를 반환한다.
  - 주어진 접두어는 +39, 0039, 1이고 중간에 분리자(seperator)가 있을 경우 첫번째에 11이 나올 경우 false이며, 분리자가 없는 경우 11이 연속으로 나와도 false처리를 하지 않는다.

> 풀이 과정 및 결과
<pre>
정규식+replace로만 처리하려고 했으나 정규식은 아직 어려워서 결국 정규식+반복문으로 함.
3가지로 나누어 처리하였는데, 다음 기준으로 나눈 후 처리하였다.
1. 현재 문자열의 길이가 6이상일 때 - 뒤에서부터 6자로 나눠서 X표시
2. 현재 문자열의 길이가 6이 아닐 때 - 모자란 부분은 다음 반복에서 채울 수 있도록 6-현재 단계에서 처리한 문자열의 길이 만큼을 n에 저장해서 다음 반복문에서 쓴다.
3. 그 외의 경우 - 2의 경우는 다음 반복문을 돌아야하는데 if-else문 밖에 두면 한 번만 처리한 후 해당 반복문이 종료되므로 별도로 else로 빼서 break문을 넣음.
</pre>

>변경 이력
<pre>
</pre>