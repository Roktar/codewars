# Tree to list - 22. 04. 05

- 기본 함수 (1)
  - treeToArray(tree: Node, ?ar)
    - 정수 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    treeToArray(new Node(1, [new Node(2, [new Node(3), new Node(4), new Node(5)]), new Node(3, [new Node(7)])]);
  </pre>
 
- 출력
  <pre>
    [1, 2, 3, 3, 4, 5, 7]
  </pre>

> 문제
  - 이 문제는 문제에서 주어진 Node 형식의 데이터를 사용하여 트리의 데이터를 배열 형식으로 바꾼다.
  - 각 노드의 레벨별 순서대로 값을 넣는다.

> 풀이 과정 및 결과
<pre>
  BFS로 각 노드를 탐색해서 배열을 채우고 반환한다.
</pre>

>변경 이력
<pre>
</pre>