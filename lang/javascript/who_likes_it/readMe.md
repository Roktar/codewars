# Who likes it? - 19. 04. 21

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - likes(names: 배열)
    - 입력값을 받아 처리하는 함수
- 문제에서 요구하는 다른 함수(0)
- 추가함수 (0)

- 입력
  <pre> ['Alex', 'Jacob', 'Mark', 'Max'] </pre>
 
- 출력
  <pre> 'Alex, Jacob and 2 others like this' </pre>

> 문제
  - 이 문제는 입력값 배열을 사용하여 출력값의 형태로 만들어 반환한다.
  - 입력값 배열의 크기에 따라 다음과 같은 출력값을 만들어야한다.
    - 길이 0의 배열인 경우 : 'no one likes this'
    - 길이 1의 배열인 경우
      - 입력값이 ['Peter'] 일 때 'Peter likes this'
    - 길이 2의 배열인 경우
      - 입력값이 ['Jacob', 'Alex'] 일 때 'Jacob and Alex like this'
    - 길이 3의 배열인 경우
      - 입력값이 ['Max', 'John', 'Mark'] 일 때 'Max, John and Mark like this'
    - 길이 4 이상의 배열인 경우
      - 입력값이 ['Alex', 'Jacob', 'Mark', 'Max'] 일 때 'Alex, Jacob and 2 others like this'
  - 즉, 길이가 4일때까지는 출력값들이 서로 미묘하게 다르다.

> 풀이
  - 각 길이에 맞춰 서로 다른 작업을 추가한다.
  - 길이가 1일 때는 입력값 + likes this를 붙인다.
  - 길이가 2일 때는 입력값 사이에 and를 붙인다.
  - 길이가 3일 때는 첫번째 입력값과 두번째 입력값 사이에 쉼표를 사용한 후 그 뒤 and를 붙이고 세번째 입력값을 붙인다.
  - 길이가 4일 때는 첫번째 입력값과 두번째 입력값 사이에 쉼표를 사용한 후 나머지 입력값은 갯수만 센 후 others를 붙인다.

>변경 이력