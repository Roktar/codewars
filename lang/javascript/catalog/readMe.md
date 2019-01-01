# Catalog - 19. 01. 01

이 문제는 입력값에서 출력값에 해당하는 문자열을 만들어서 반환한다.

- 파라미터
  - s : 입력값
  - article : 입력값에서 찾으려고하는 문자열

- 입력 <br>
  `
  &lt;prod&gt;&lt;name&gt;drill&lt;/name&gt;&lt;prx&gt;99&lt;/prx&gt;&lt;qty&gt;5&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;hammer&lt;/name&gt;&lt;prx&gt;10&lt;/prx&gt;&lt;qty&gt;50&lt;/qty&gt;&lt;/prod&gt; 

  &lt;prod&gt;&lt;name&gt;screwdriver&lt;/name&gt;&lt;prx&gt;5&lt;/prx&gt;&lt;qty&gt;51&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;table saw&lt;/name&gt;&lt;prx&gt;1099.99&lt;/prx&gt;&lt;qty&gt;5&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;saw&lt;/name&gt;&lt;prx&gt;9&lt;/prx&gt;&lt;qty&gt;10&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;chair&lt;/name&gt;&lt;prx&gt;100&lt;/prx&gt;&lt;qty&gt;20&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;fan&lt;/name&gt;&lt;prx&gt;50&lt;/prx&gt;&lt;qty&gt;8&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;wire&lt;/name&gt;&lt;prx&gt;10.8&lt;/prx&gt;&lt;qty&gt;15&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;battery&lt;/name&gt;&lt;prx&gt;150&lt;/prx&gt;&lt;qty&gt;12&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;pallet&lt;/name&gt;&lt;prx&gt;10&lt;/prx&gt;&lt;qty&gt;50&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;wheel&lt;/name&gt;&lt;prx&gt;8.80&lt;/prx&gt;&lt;qty&gt;32&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;extractor&lt;/name&gt;&lt;prx&gt;105&lt;/prx&gt;&lt;qty&gt;17&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;bumper&lt;/name&gt;&lt;prx&gt;150&lt;/prx&gt;&lt;qty&gt;3&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;ladder&lt;/name&gt;&lt;prx&gt;112&lt;/prx&gt;&lt;qty&gt;12&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;hoist&lt;/name&gt;&lt;prx&gt;13.80&lt;/prx&gt;&lt;qty&gt;32&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;platform&lt;/name&gt;&lt;prx&gt;65&lt;/prx&gt;&lt;qty&gt;21&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;car wheel&lt;/name&gt;&lt;prx&gt;505&lt;/prx&gt;&lt;qty&gt;7&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;bicycle wheel&lt;/name&gt;&lt;prx&gt;150&lt;/prx&gt;&lt;qty&gt;11&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;big hammer&lt;/name&gt;&lt;prx&gt;18&lt;/prx&gt;&lt;qty&gt;12&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;saw for metal&lt;/name&gt;&lt;prx&gt;13.80&lt;/prx&gt;&lt;qty&gt;32&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;wood pallet&lt;/name&gt;&lt;prx&gt;65&lt;/prx&gt;&lt;qty&gt;21&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;circular fan&lt;/name&gt;&lt;prx&gt;80&lt;/prx&gt;&lt;qty&gt;8&lt;/qty&gt;&lt;/prod&gt;
  
  &lt;prod&gt;&lt;name&gt;exhaust fan&lt;/name&gt;&lt;prx&gt;62&lt;/prx&gt;&lt;qty&gt;8&lt;/qty&gt;&lt;/prod&gt;

  &lt;prod&gt;&lt;name&gt;window fan&lt;/name&gt;&lt;prx&gt;62&lt;/prx&gt;&lt;qty&gt;8&lt;/qty&gt;&lt;/prod&gt;`
- 출력
  - article값이 "ladder"인 경우
    <pre>
    'ladder > prx: $112 qty: 12'
    </pre>
  - article값이 "saw"인 경우
    <pre>
    'table saw > prx: $1099.99 qty: 5\r\nsaw > prx: $9 qty: 10\r\nsaw for metal > prx: $13.80 qty: 32'
    </pre>

입력값 s에서 article과 관련된 모든 값을 사용하여 문자열 형태로 반환한다.
<br>
<br>

> 순서
- 필요한 변수들을 선언한다. (line 2-5)
  - 필요한 값만을 남기기위해 사용하지않는 값들을 제거한 후 배열 형태로 반환한다. (line 2)
    - ['  name  prx  qty   ', '  name  prx  qty   ' ...] 형태의 배열로 만들어진다. 
  - 입력값에서 추출된 값을 넣을 객체를 선언한다. (line 3)
  - 같은 카탈로그명이 여러개인 경우, 그 카탈로그들을 저장할 별도의 배열을 선언한다. (line 4)
    - 위 배열의 인덱스값으로 사용할 변수를 하나 선언한다. (line 4)
  - 카탈로그명이 중복될 경우, 다른 카탈로그명으로 저장될 수 있도록 카탈로그명 뒤에 숫자를 붙이기위한 변수를 선언한다.(line 5)
- 3번 라인에 선언한 객체에 카탈로그 정보를 입력한다. (line 7-17)
    - 배열에 빈 문자열값이 포함되어있는데 이 빈문자열값인 경우 continue한다. (line 8-9)
    - 꺼낸 값을 다시 한 번 split한다. (line 11)
      - ['', name, prx, qty, ''] 형태의 배열로 만들어진다.
    - 객체에 카탈로그 정보를 입력한다. (line 13-16)
      - 해당 카탈로그명으로 객체에 저장되지 않은 경우, 해당 카탈로그명으로 객체에 값을 저장한다. (line 13-14)
      - 해당 카탈로그명으로 이미 객체에 저장돼있는 경우, 5번 라인에서 선언한 변수를 사용하여 카탈로그명 뒤에 숫자를 붙여 객체에 저장시킨다. (line 15-16)
        - ex) 카탈로그명이 'saw'인 경우, 'saw0', 'saw1'같은 형식으로 저장시킨다.
- 해당 카탈로그명이 포함된 카탈로그가 몇 개 있는지 갯수를 센 후, 그 카탈로그명을 4번 라인에서 선언한 배열에 추가시킨다. (line 19-22)
  - ex) 찾으려는 카탈로그명이 'saw'인 경우, saw라는 카탈로그명이 포함된 모든 키값을 저장시킨다.
- 이후 결과값을 반환한다. (line 24-30)
  - 카탈로그명이 1개인 경우
    - 찾으려고 하는 카탈로그명을 기준으로 해당 객체에서 값을 꺼낸다.
      - 객체에서 해당 카탈로그를 못찾은 경우 "Nothing"를 반환한다.
      - 단, article이 'hammer'이고 객체에 저장된 관련 카탈로그는 'big hammer' 한개밖에 없을 때, article로 'big hammer' 카탈로그를 반환할 수 없기에 article을 사용하여 카탈로그가 있는 지 확인하고 있으면 article을 기준으로 반환, 없으면 idx_arr 배열에 있는 값을 사용하여 반환한다.
  - 카탈로그명이 2개 이상인 경우
    - idx_arr 배열에 있는 카탈로그명을 사용하여 객체에서 값을 꺼낸 후, 하나의 문자열로 만들어 반환한다.