# Coding Meetup #2 - Higher-Order Functions Series - Greet developers - 22. 02. 03

- 기본 함수 (1)
  - greetDevelopers(list: Array)
    - 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
   var list1 = [
      { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
      { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
      { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
    ];


    Test.assertDeepEquals(greetDevelopers(list1), answer);
  </pre>
 
- 출력
  <pre>
    [ { firstName: 'Sofia',
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java',
      greeting: 'Hi Sofia, what do you like the most about Java?' },
    { firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: 'Python',
      greeting: 'Hi Lukas, what do you like the most about Python?' },
    { firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby',
      greeting: 'Hi Madison, what do you like the most about Ruby?' } 
    ]
  </pre>

> 문제
  - 이 문제는 주어진 Array 내 객체에 greeting 항목을 추가하여 반환한다.

> 풀이 과정 및 결과
<pre>
   한줄로 처리하기 위해서 !(...) || object 를 사용했는데, 객체에 문자열을 넣으면 Truthy Value로 취급되서 해당 문자열만 반환되는 것 같은데, 해당 객체에 항목 추가 후 그 객체 자체를 반환하는 것이 목적이어서 not을 씌운 후 || 옆에 객체를 적어서 해당 객체를 내보내게 함.
   ( || 사용 시 좌측 값이 falsy value인 경우에는 우측 값을 사용하는 것 같음 )
</pre>

>변경 이력
<pre>
</pre>