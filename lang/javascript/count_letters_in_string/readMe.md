# Count letters in string - 19. 10. 16

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - letterCount(s:문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
- 추가객체(0)

- 입력
  <pre> "codewars" </pre>
 
- 출력
  <pre> {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1} </pre>

> 문제
  - 이 문제는 주어진 문자열을 사용하여 결과값을 반환한다.
  - 해당 문자열에 포함된 각 알파벳의 갯수를 센 후 a-z 순서대로 정렬하여 반환한다.

> 풀이
  - 반복문을 사용하여 a부터 z까지 돌아보면서 해당 문자가 등장한 횟수를 구한다.(정규식 활용)
  - match 함수는 조건에 만족하는 결과값이 없을 경우 null을 반환하므로 정상적으로 length 프로퍼티를 활용할 수 있도록 nullObject라는 객체를 생성하였다.(length만 추가함)
  - match 함수를 통해 나온 결과값이 truthy value인 경우 결과를 저장하는 객체에 해당 알파벳을 키값으로 등장한 횟수를 밸류값으로 사용하여 보관한다.

>변경 이력
