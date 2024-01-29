# +1 Array - 22. 10. 24

- 기본 함수 (1)
  - upArray(arr: Array<Number>)
    - 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 함수(0)
  - 변수(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    upArray([4,3,2,5])
    upArray([9,9])
  </pre>
 
- 출력
  <pre>
    [4,3,2,6]
    [1,0,0]
  </pre>

> 문제
  - 이 문제는 주어진 배열에서 가장 마지막에 있는 값에 1을 더한 후, 10 이상이 되면 해당 값에서 10을 뺀 후 앞 인덱스에 있는 값에 1을 다시 더하고 반복하여 최종 배열의 값을 만든다.

> 풀이 과정 및 결과
<pre>
  다음과 같이 두 경우로 나눌 수 있다.
  1. 1을 더했는데 10 미만인 경우
    - 앞 인덱스에 값을 더할 일이 없으므로 현재 배열을 그대로 반환한다.
  2. 1을 더했는데 10 이상이 된 경우
    - 앞 인덱스에 1을 넘겨주면서 현재 인덱스의 값을 10 뺀다.
    - 앞 인덱스에서 1을 더했을 때 다시 10 이상이 된 경우에는 반복한다.
    - 만약 가장 앞에 있는 값이 10이 됐을 때는 반복문을 나온 상태인데, 반복문이 끝난 후 가장 앞에 있는 값을 체크해서 10인 경우 똑같이 10을 빼고 배열의 가장 앞에 1을 추가한다.
</pre>

>변경 이력
<pre>
</pre>