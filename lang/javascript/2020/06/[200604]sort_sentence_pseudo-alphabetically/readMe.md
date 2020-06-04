# Sort sentence pseudo-alphabetically - 20. 06. 04

이 문제는 입력값을 출력값의 형태로 만들어 반환한다.

- 기본 함수 (1)
  - sort(sentence: 문자열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre> sort("Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!") </pre>
 
- 출력
  <pre> "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut" </pre>

> 문제
  - 이 문제는 주어진 입력값에서 각 단어 앞자리의 대소문자를 구분한 후 소문자는 오름차순, 대문자는 내림차순으로 정렬하고 하나의 문자열로 만든다.

> 풀이 과정 및 결과
<pre>
중간에 끼어있는 특수문자는 포함하지 않으므로 제거한 후(사용되는 특수문자는 .,! 3가지) 각 단어를 추출한다.
이후 아스키코드값으로 대소문자를 구분하고 각기 다른 배열에 넣은 후 각각 정렬하고 하나로 합친다.
</pre>

>변경 이력
<pre>
</pre>