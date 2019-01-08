# Moves in squared strings (II) - 19. 01. 08

이 문제는 입력값을 사용하여 출력값의 형태로 변형한다.

- 파라미터
  - oper 함수
    - fct : 사용할 함수
    - s : 입력값
  - rot, selfie_and_rot 함수
    - strng : 입력값

- 입력 <br>
  <pre> "abcd\nefgh\nijkl\nmnop" </pre>
 
 - 출력
   - rot 함수를 사용했을 시의 출력
   <pre>
   "ponm\nlkji\nhgfe\ndcba"
   </pre>
   - selfie_and_rot 함수를 사용했을 시의 출력
   <pre> "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba" </pre>

<br>
<br>
총 3가지의 함수를 사용하며 역할은 다음과 같다.

- oper 함수
  - 가장 먼저 호출되는 함수로 다른 함수를 인자로 받는다.
  - selfie_and_rot 혹은 rot 함수 중 사용할 함수를 인자로 받고 그 함수에 입력값을 넘겨주고 실행시키는 역할을 한다.
- rot 함수
  - 입력값을 180도 회전시킨다.
- selfie_and_rot 함수
  - 원래값과 180도 회전시킨 값을 합친다.

> 순서
- oper 함수 (line 15 - 17)
  - 인자로 받은 함수를 실행시키고 그 함수의 반환값을 반환한다. (line 16)
- rot함수 (line 1-6)
  - 입력값을 뒤집는다. (line 2-5)
    - 줄바꿈문자를 기준으로 뒤집어야할 문자를 배열 형태로 만든 후, 이 위치를 뒤집는다. (line 2)
    - 뒤집은 배열의 값을 다시 한 번 뒤집는다. (line 3)
    - 배열형태로 된 값을 문자열형태로 만든다. (line 5)
- selfie_and_rot 함수 (line 8-12)
  - 이 함수에서는 문자열길이만큼의 .을 붙여서 문자열을 완성하기때문에 .의 갯수를 미리 구한다.(line 9)
  - 기존 입력값에 위에서 구한 .을 추가하여 문자열을 재구성한다. (line 10)
  - line 10에서 구한 문자열과 이 문자열을 180도 뒤집은 값을 하나로 합쳐 출력값을 만들어 반환한다. (line 12)