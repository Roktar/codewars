# regex pattern to check if string has all characters - 20. 05. 26

- 기본 함수 (1)
  - regexContainsAll(str: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
  const abc = "abc";
  const pattern = regexContainsAll(abc); 

  1 - new RegExp(pattern).test("bca")
  2 - new RegExp(pattern).test("ac")
  </pre>
 
- 출력
  <pre>
  1 - true
  2 - false
  </pre>

> 문제
  - 이 문제는 regexContainsAll 함수에서 정규식 객체를 만든 후 그 정규식 객체를 사용하여 조건에 맞는지 여부를 boolean으로 반환한다.
  - test 함수를 실행시킬 문자열에 regexContainsAll 함수에 주어진 str에 있는 모든 문자가 포함되어있는지를 찾는다.
    - str이 "abc"이고 대상 문자열이 "bca"인 경우, a와 b와 c가 전부 있으므로 true를 반환한다.
    - str이 "abc"이고 대상 문자열이 "bc"인 경우, b와 c는 있으나 a가 없으므로 false를 반환한다.

> 풀이 과정 및 결과
<pre>
해당 문제는 풀기 위해 시도는 했으나 실패하고 검색을 통해 해결하였음.
- 솔루션 링크 : https://stackoverflow.com/questions/33856104/how-to-check-if-a-string-contains-all-of-the-characters-of-a-word/33856329 (작성자: M.kazem Akhgary)
</pre>

>변경 이력
<pre>
</pre>