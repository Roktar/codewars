function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head, len=0) {
  return head === null ? len : length(head.next, len+1);
}

function count(head, data, cnt=0) {
  return head === null ? cnt : count(head.next, data, head.data === data ? cnt+1 : cnt);
}