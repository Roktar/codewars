# Apply offset to subtitles - 20. 05. 31

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - subsOffsetApply(str: 문자열, offset: 정수)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(1)
  - TimeAppender(startTime: 문자열, endTime: 문자열, message: 문자열)
    - 입력값을 인자로 받아 결과값을 생성하여 반환한다.
  - 구성함수(5)
    - getTime() 
      - 입력값을 시(arr[0]), 분(arr[1]), 초 및 밀리초(arr[2]) 단위로 다시 쪼갠 후 getTimeMs 함수를 호출하여 전체 밀리초값을 반환한다.
    - getTimeMs(obj: 배열)
      - getTime에서 시(arr[0]), 분(arr[1]), 초 및 밀리초(arr[2]) 단위로 쪼갠 것을 활용하여 전체 밀리초값을 구한다.
    - getTimeObject(ms: 정수)
      - 밀리초값을 다시 시분초밀리초형태로 만들어 반환한다.
    - getTimeResult(offset: 정수)
      - 실제 반환값을 만든 후 반환한다.
    - process(offset: 정수)
      - getTimeResult 함수를 호출한 후 그 결과값을 최종반환한다.
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre> subsOffsetApply("01:09:02,684 --> 01:09:03,601 Run Forrest, run!", 3663655) </pre>
 
- 출력
  <pre> "02:10:06,339 --> 02:10:07,256 Run Forrest, run!" </pre>

> 문제
  - 이 문제는 주어진 문자열을 사용하여 결과값을 만든다.
  - startTime과 endTime에 offset만큼 더한 값을 최종반환한다.
  - 단, offset이 마이너스일 때 0초 이하로 내려가거나 100시간(359999,999)이 넘어갈 경우는 Invalid offset을 반환한다.

> 풀이 과정 및 결과
<pre>
처음 생각했던 것은 시:분:초,밀리초 단위로 쪼개서 시+시,분+분,초+초,밀리초+밀리초를 한 후 다시 밀리초부터 시까지 올라가며 초과값이 있는 경우 올림수를 주고 그 값을 사용하여 검증 및 반환하는 방향으로 하려했으나 번거로움과 타임오버가 뜰 것 같아서 차라리 입력값을 밀리초로 바꿔서 계산한 후 다시 시:분:초,밀리초로 바꾸는 방향으로 진행함.

먼저 정규식을 사용하여 시작시간과 종료시간, 메세지를 추출했다.
메세지는 공백문자를 기준으로 split이 된 상태로 추출돼서 다시 공백기준으로 join하였다. 
정규식 결과: [ '01:09:02,684', '-->', '01:09:03,601', 'Run', 'Forrest,', 'run!' ]

이후 작성한 TimeAppender 클래스의 객체를 생성하고, 생성할 때 위의 결과를 넘겨주고 process 함수를 실행한다. (subsOffsetApply > process)

process 함수에서는 getTimeResult 함수를 호출하며, 해당 함수에서는 검증 및 결과값을 생성하므로 검증 및 결과에 사용할 밀리초값을 만들기위해 다시 getTime 함수를 호출한다.
(subsOffsetApply > process > getTimeResult > getTime)

getTime 함수에서는 객체 생성 시 받았던 시작시간과 종료시간 문자열을 시:분:초,밀리초 형태로 분할한 후, getTimeMs 함수를 호출하고 그 결과를 반환한다.
(subsOffsetApply > process > getTimeResult > getTime > getTimeMs)

getTimeMs 함수에서는 getTime에서 분할했던 값을 사용하여 전체밀리초값을 구한다.
0번 인덱스에는 시간, 1번 인덱스에는 분, 2번 인덱스에는 초를 넣었고 길이문제로 밀리초는 따로 분리했다.(msValue로 분리)
이 문제는 밀리초도 사용하므로 시분초 결과에 1000을 곱했다. 

전체밀리초를 getTimeResult 함수에서 offset만큼 더하거나 뺀다.
이후 결과값이 0초0보다 작게 나오거나 100시간 이상으로 나오는 경우, Invalid offset을 반환하고 아닌 경우 밀리초로 된 결과값을 다시 시분초밀리초 형태로 만들어 반환한다.

시간 투자한 것 치곤 썩 맘에 들지 않는 결과물.
</pre>

>변경 이력
<pre>
</pre>