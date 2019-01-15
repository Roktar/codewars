# Remove duplicate words - 19. 01. 15

이 문제는 입력값을 사용하여 출력값의 형태로 변형한다.

- 기본 함수
  - removeDuplicateWords
    - 파라미터
      - s : 문자열

- 입력 <br>
  <pre> 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

 </pre>
 
- 출력 <br>
   <pre> 'alpha beta gamma delta' </pre>

<br>

- 추가함수
  - reduce
    - Set prototype에 지정했다.

- Set은 중복값을 허용하지않는다. 따라서 중복을 제거하기위해 Set 객체를 사용하였다.

> 순서
  - Set 객체에 입력문자열 s를 공백기준으로 나눈 배열을 인자로 줘서 중복값을 제거한다. (split 함수 사용)
  - 이후 중복이 제거된 문자열을 새 배열에 받고 그 배열을 문자열로 바꾼다. (reduce 함수 사용)