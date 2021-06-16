# Common directory path - 21. 06. 17

- 기본 함수 (1)
  - getCommonDirectoryPath(pathes: 배열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(1)
  - getDirectory(subPathSet: 배열, idx: 정수, len: 정수, arr: 배열)
    - 결과값 생성
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png']);
    getCommonDirectoryPath(['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf']);  
  </pre>
 
- 출력
  <pre>
    '/web/images/'
    ''
  </pre>

> 문제
  - 이 문제는 주어진 경로들 사이에서 전부 일치하는 경로를 찾아 반환한다.
  - 시작경로는 /가 붙을 수도, 안붙을 수도 있고 전체 경로가 아닌 일부만 붙어있는 경우 빈 문자열을 반환한다.

> 풀이 과정 및 결과
<pre>
   먼저 시작경로가 전부 /가 붙었는지, 안붙었는지 확인한다. 일부만 붙었을 경우 빈 문자열 반환.
   이후 재귀함수를 사용해서 각 경로 레벨별로 경로명이 일치하는지 확인하고 일치하지 않는 경우, 현재 일치된 목록을 가지고 있는 배열을 반환한다.
   반복문으로 하려다가 재귀함수로 해도 될 것 같아서 별도로 분리.
</pre>

>변경 이력
<pre>
</pre>