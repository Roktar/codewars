# Where my anagrams at? - 21. 06. 09

- 기본 함수 (1)
  - anagrams(word: 문자열, words: 배열)
    - 결과값 출력
- 기본적으로 주어지는 객체(0)
- 문제에서 요구하는 다른 함수(0)
- 추가함수(0)
- 추가클래스(0)
  - 구성함수(0)
- 추가객체(0)
- 추가변수(0)

- 입력 or 호출
  <pre>solution('ab', [ 'aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'cc', 'cd' ])</pre>
 
- 출력
  <pre>[ 'ab', 'ba' ]</pre>

> 문제
  - 이 문제는 word 입력값을 사용하여 words 안에 word의 anagram 값이 있는지 확인한 후 anagram이 되는 값만 모아서 반환한다.

> 풀이 과정 및 결과
<pre>
   anagram은 특정 문자열이 주어졌을 때, 그 문자열 내의 문자 배치를 다르게 하면 기존 문자열과 다른 새로운 문자열을 만들 수 있다.
   ex) abcd = acbd, adbc, dacd 등등
   word 문자열을 사용하여 구성할 수 있는 문자열 값이 words 안에 있는 경우 그 값들만 반환한다.
   문자열을 정렬하면 순서대로 정렬되는데 이걸 이용해서 비교하면 anagram을 구할 수 있다.
</pre>

>변경 이력
<pre>
</pre>