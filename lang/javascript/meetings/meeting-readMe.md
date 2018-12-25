# Meetings - 18. 12. 25 

이 문제는 주어진 문자열을 출력값과 같은 형태로 변형한다.
- 입력 : s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
- 출력 : "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

입력값 s를 보면 초대된 사람들은 세미콜론으로 구분될 수 있음을 확인할 수 있다.<br>
따라서 먼저 초대된 사람들을 먼저 구한 다음, 출력 형태에 맞도록 변형시킨다.
<br>
<br>

> 순서
- 초대된 사람들을 구분하기 위해 세미콜론을 사용하여 문자열을 잘라서 배열형태로 만든다.(split함수 사용)
- 문제에 초대된 사람들의 이름을 대문자로 바꾼다는 항목이 있었으므로 대문자로 바꾼다.(toUpperCase함수 사용)
- 문제에 이름순으로 정렬한다는 항목이 있었으므로 정렬시킨다.(sort함수 사용)
- swap함수는 https://stackoverflow.com/questions/4011629/swapping-two-items-in-a-javascript-array 해당 링크의 댓글에 작성된 내용을 활용하였다.
- 이후 출력 형태에 맞게 위 단계에서 나온 값들을 사용하여 구성한다.