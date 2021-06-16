# Tracking Sums in a Process - 20. 12. 01

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - trackSum(arr: 배열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>var arr = [-3, -5, 8, -11, 22, 16, -11, 22, -8, 8];
  trackSum(arr);</pre>
 
- 출력
  <pre>[[38, 19, 33, 30], [6, 8, 11, 2, 3]]</pre>

> 문제
  - 이 문제는 다음과 같은 과정을 거쳐 결과값을 구한다.
  - 첫번째로, 입력 배열값의 합을 구한 후 입력 배열에서 중복값을 제거한다.
  - 두번째로, 중복값을 제거한 배열의 총계를 구한다.
  - 세번째로, 중복값을 제거한 배열을 내림차순으로 정렬한다.
  - 네번째로, 반복문을 돌려서 현재 인덱스의 값과 다음 인덱스의 값을 뺀 값을 구하고 이 값들의 합을 구한다.
  - 마지막으로, 네번째에서 구한 배열에서 다시 중복을 제거하고 총계를 구한다.
  - 반환은 [각 단계에서 더했던 합의 값 배열, 마지막에서 구한 중복을 제거한 배열] 이다.

> 풀이 과정 및 결과
<pre>
  위 순서대로 처리한 다음 반환하면 된다.
</pre>

>변경 이력
<pre>
</pre>