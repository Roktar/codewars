# Length Factorial Encryption - 20. 06. 10

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - decrypt(message: 문자열, key: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre> decrypt("snes@%jhrjsrawedoc", "p10[18-17-16-15-14-13-12-11-10-9-8-7-6-5-4-3-2-1]"); </pre>
 
- 출력
  <pre> "codewars" </pre>

> 문제
  - 이 문제는 주어진 문자열을 재조립하여 다른 문자열로 만들어 반환한다.
  - 키의 구조는 p숫자-숫자-숫자-.. 로 구성되어있으며, p숫자는 최종 결과 후 잘라낼 문자의 수를 의미하고 각 일반숫자는 해당 위치에 있는 문자를 순서대로 붙이라는 것을 의미한다.

> 풀이 과정 및 결과
<pre>
위 테스트케이스는 총 18자리의 문자열이 입력이고, p10이므로 최종결과값에서 뒤 10자리는 결과값에서 제외한다.
그 후 뒤 숫자대로 해당 자리에 있는 값을 결과값에 0번 인덱스부터 순차적으로 채운다.
즉, message의 18번째 자리가 결과값의 1번 자리, message의 17번째 자리가 결과값의 2번자리가 된다.
이렇게 값을 바꾸면 codewarsjrhj%@sens 가 나오며, 뒤에서 10자리를 제거하면 codewars만 남게 된다.
</pre>

>변경 이력
<pre>
</pre>