# Delete occurrences of an element if it occurs more than n times - 22. 03. 13

- 기본 함수 (1)
  - deleteNth(arr: Array[Number], n: Number)
    - 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    deleteNth([1,1,3,3,7,2,2,2,2], 3)
  </pre>
 
- 출력
  <pre>
    [1, 1, 3, 3, 7, 2, 2, 2]
  </pre>

> 문제
  - 이 문제는 주어진 배열 arr에서 각 요소마다 n번만 등장하도록 제한한다.
  - 결과값의 순서는 기존 배열과 동일하다.

> 풀이 과정 및 결과
<pre>
  해당 요소가 몇 번 등장했는지 횟수를 저장하는 cnts 변수를 만들고 그 변수의 값을 통해 n번 등장하지 않은 요소만 결과 배열에 추가한다.
</pre>

>변경 이력
<pre>
</pre>