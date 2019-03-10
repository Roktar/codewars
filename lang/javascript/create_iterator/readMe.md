# Create Iterator - 19. 03. 10

이 문제는 특정 객체를 만든 후 그 객체로부터 결과값을 추출한다.

- 기본 함수 (1)
  - createIterator(array : 배열)
    - 입력값을 받아 특정 작업을 하는 객체를 만들어서 반환
- 문제에서 요구하는 다른 함수(1)
  - next()
    - 현재 인덱스와 완료여부를 객체로 만들어 반환하는 함수
- 추가함수 (0)

- 입력 <br>
  <pre> ['One', 'Two'] </pre>
 
- 출력 <br>
  <pre> 
  iterator.next() => {value:'One', done:false}, index : 0
  iterator.next() => {value:'Two', done:false}, index : 1
  iterator.next() => {value:undefined, done:true}, index : 2
  </pre>

> 문제
  - 이 문제는 주어진 1차원 배열을 사용하여 {value, done} 형태를 가지는 객체를 만들어 반환한다.
  - 현재 배열 길이보다 작거나 같은 경우 done은 false, 그 이상이 되는 경우 true가 되나 index는 더이상 증가해서는 안된다.

> 풀이
  - 내부 객체를 만들고 필요한 변수와 함수를 넣는다.
    - 필요 변수
      - index : 객체의 현재 index를 넘긴다. 0부터 순차적으로 증가하며 입력값의 길이+1 보다 커지지않는다.
      - done : 입력값의 길이보다 작거나 같으면 false, 크면 true값을 갖는다.
  - 반환할 객체를 만들고 value와 done을 설정한 후 반환한다. (line 6, 13)
