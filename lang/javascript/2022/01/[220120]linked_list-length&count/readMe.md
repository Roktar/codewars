# Linked Lists - Length & Count - 22. 10. 20

- 기본 함수 (3)
  - Node(data: Number)
    - Node 객체 생성
  - length(head: Node, len: Number)
    - 해당 리스트의 길이 반환하는 함수
  - count(head: Node, data: Number, cnt: Number)
    - 해당 리스트에서 data와 같은 값이 몇 개인지 찾아 반환하는 함수
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    var list = new Node(1), node1 = new Node(2), node2 = new Node(3);
    node1.next = node2;
    list.next = node1;

    length(list);
    count(list, 1);
  </pre>
 
- 출력
  <pre>
    3
    1
  </pre>

> 문제
  - 이 문제는 주어진 연결리스트를 사용하여 다음과 같은 기능을 가지는 함수를 만든다.
  - length: 해당 연결리스트의 전체 길이를 반환
  - count: 해당 연결리스트에서 주어진 data 값과 같은 요소가 몇 개인지를 반환

> 풀이 과정 및 결과
<pre>
   연결리스트는 head.next를 통해 다음 노드로 이동이 가능하므로 재귀함수를 사용하며 사용 시 현재 노드가 아닌 다음 노드를 넘겨준다.
</pre>

>변경 이력
<pre>
</pre>