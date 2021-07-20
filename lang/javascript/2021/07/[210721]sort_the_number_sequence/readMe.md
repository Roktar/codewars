# Sort the number sequence - 21. 07. 21

- 기본 함수 (1)
  - sortSequence(sequence: 배열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]
  </pre>
 
- 출력
  <pre>
    [1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0]
  </pre>

> 문제
  - 이 문제는 0을 기준으로 하여 sub sequence를 생성하고 각 sub sequence 내 오름차순 정렬, 이후 모든 sub sequence에 대해 각 sub sequence별 합계값을 기준으로 재정렬한다.
  - 합계값이 동일한 경우에는 정렬하지 않고 원형 그대로 둔다.

> 풀이 과정 및 결과
<pre>
   sub sequence들을 뽑은 후 정렬해서 임시 배열 sub에 넣어두고 각 sub sequence별로 합계값을 사용하여 재정렬한 후 1차원 배열로 만들어서 반환한다.
</pre>

>변경 이력
<pre>
</pre>