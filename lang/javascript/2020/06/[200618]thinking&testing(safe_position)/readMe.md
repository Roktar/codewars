# Thinking & Testing : Safe position - 20. 06. 18

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - testIt(top: 문자열, bottom: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>var top= "■■■■■■" + "\n"+
           "　■　■　■";
  var bottom= "■　■　　　" +"\n"+
              "■■■■■■";
  testIt(top,bottom)</pre>
 
- 출력
  <pre>5</pre>

> 문제
  - 이 문제는 top과 bottom을 합쳤을 때 발생하는 빈 공간(safe position)의 위치를 구하여 반환한다.

> 풀이 과정 및 결과
<pre>
각 배열의 길이가 짝수인 경우, 합쳤을 때 길이가 1 증가하여 각각 배열을 하나씩 늘리고, 홀짝이 섞인 경우 가장 짧은 길이의 배열의 길이를 1 늘린다.
그 후 반복문을 돌며 상하 배열에 있는 블록의 갯수를 하나로 합친다. (상하 블록은 중복되지 않는다.) 
현재 높이의 블록의 수와 전체 높이가 같은 경우(blockCnt === h, blockCnt < h) 중간에 빈 공간이 있다는 의미이므로 이곳이 safe position이 되어 해당 인덱스를 반환한다.
시작지점은 배열은 0부터 시작이나 문제에선 1번부터 시작되도록 지정하였으므로 인덱스 반환 시 1을 더한 값을 반환한다.
</pre>

>변경 이력
<pre>
</pre>