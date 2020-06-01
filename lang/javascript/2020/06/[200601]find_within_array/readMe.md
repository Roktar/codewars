# Find within array - 20. 06. 01

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - subsOffsetApply(str: 문자열, offset: 정수)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre> ["trueIfEven", "neverTrue", "trueIfValueEqualsIndex", "trueIfLengthEqualsIndex"] 함수는 미리 정의됨

  findInArray([1,3,5,6,7], trueIfEven)</pre>
 
- 출력
  <pre> 3 </pre>

> 문제
  - 이 문제는 주어진 입력배열에서 iterator로 넘겨주는 함수를 사용하여 가장 먼저 true값이 나오는 index를 반환한다.
  - 해당 배열을 끝까지 돌면 가장 마지막에 true값이 나온 index를 반환하게 되므로 중간에 끊을 수 있어야한다.

> 풀이 과정 및 결과
<pre>
반복문 도중 끊어야하므로 some 함수를 사용하였다. 그냥 일반 for문을 돌려도 됨.

 return true | (idx = i); 부분은 어떤 원리로 동작하는 건지는 모르겠지만 두 개 다 실행이 되어서 사용함. (idx에 i를 대입하는 것과 true를 반환하는 것이 실행됨)
</pre>

>변경 이력
<pre>
</pre>