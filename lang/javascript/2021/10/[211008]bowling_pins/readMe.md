# Bowling Pins - 21. 10. 08

- 기본 함수 (1)
  - bowlingPins(arr: 배열)
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
    bowlingPins([1,2,10]
  </pre>
 
- 출력
  <pre>
    "I I I  \n I I I \n    I  \n       "
    =>
    I I I  
     I I I 
        I  
               
  </pre>

> 문제
  - 이 문제는 입력값에 들어온 위치에 해당하는 핀을 제거한 핀 상황을 만들어 반환한다.
  - replace는 사용 불가능

> 풀이 과정 및 결과
<pre>
   replace 사용이 가능했다면 핀을 핀번호로 두고 배열의 핀번호에 해당하는 건 전부 정규식으로 찾아서 공백으로 replace 시키면 금방 풀릴 것 같으나 아쉬울 따름.

   따로 생각나는 방법이 없어서 그냥 미리 핀 레벨별 배열을 만들어 둔 후 반복문을 통해 해당 위치의 값을 변경.

</pre>

>변경 이력
<pre>
</pre>