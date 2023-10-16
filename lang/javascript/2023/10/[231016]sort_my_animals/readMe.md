# Sort My Animals - 23. 10. 16

- 기본 함수 (1)
  - sortAnimal(animals: Array)
    - 결과값 반환
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 함수(0)
  - 변수(0)
- 추가변수(0)

- 입력 or 호출
  <pre>
    sortAnimal([{ name: "Cat", numberOfLegs: 4 },
                { name: "Snake", numberOfLegs: 0 },
                { name: "Dog", numberOfLegs: 4 },
                { name: "Pig", numberOfLegs: 4 },
                { name: "Human", numberOfLegs: 2 },
                { name: "Bird", numberOfLegs: 2 }])
  </pre>
 
- 출력
  <pre>
    [ { name: 'Snake', numberOfLegs: 0 },
      { name: 'Bird', numberOfLegs: 2 },
      { name: 'Human', numberOfLegs: 2 },
      { name: 'Cat', numberOfLegs: 4 },
      { name: 'Dog', numberOfLegs: 4 },
      { name: 'Pig', numberOfLegs: 4 }]
  </pre>

> 문제
  - 이 문제는 주어진 배열 내의 객체를 사용하여 정렬한 값을 반환한다. (원본 배열은 수정해서는 안되기에 복사본 생성 필요)
  - 정렬 순서는 1. numberOfLegs가 작은 것들을 우선 정렬, 2. 1에서 정렬한 값에서 name을 다시 기준으로 해서 재정렬 

> 풀이 과정 및 결과
<pre>
  먼저 복사본 배열을 Array.from을 써서 만들고 첫번째 sort에서는 주어진 배열 내 numberOfLegs를 기준으로 1차정렬하고 두번째 sort에서는 같은 numberOfLegs 내에서 name 값을 기준으로 재정렬.
</pre>

>변경 이력
<pre>
</pre>