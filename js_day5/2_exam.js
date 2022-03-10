const fruits=['banana','Orange','Apple','Mango']
console.log('1.toString')
console.log(fruits.toString())
console.log('2.join')
console.log(fruits.join('**'))  //지정된 문자열 '**'을 이용하여 배열값들을 연결합니다.
let fruit =fruits.pop()         //맨 마지막 값부터 하나씩 추출(뽑아오기)
console.log('3.pop')
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.pop())
console.log(fruits.pop())
console.log(fruits.pop())
console.log('4.push')
fruits.push('키위')             //배열의 맨 마지막 위치에 새로운 값 추가. 리턴값 없음.
console.log(fruits)
fruits.push('Orange')
console.log(fruits)
fruits.push('banana')
fruits.push('Mango')
fruits.push('Apple')
console.log(fruits)
console.log('5.shift(), unshift()는 생략(개인연습)') //pop,push 메소드와 방향만 다릅니다.
console.log('6.delete')
delete fruits[1];           //특정 요소값을 지우기 -> undefined 값으로 변경
console.log(fruits)
console.log('7.concat')     //배열 합치기
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const result= arr1.concat(arr2)
console.log(result)
console.log('8.splice')
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 0, "Lemon", "Kiwi");           //fruits 배열 인덱스 2번 자리부터 데이터 넣기, 중간에 지워지는 데이터 0개
console.log(fruits2)                            //(6) ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
fruits2.splice(4, 1, "레몬", "키위");             //fruits 배열 인덱스 4번 자리부터 데이터 넣기, 중간에 지워지는 데이터 1개
console.log(fruits2)                            //(7) ['Banana', 'Orange', 'Lemon', 'Kiwi', '레몬', '키위', 'Mango']
console.log('9.slice')
const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits3.slice(1,3);            //fruits 배열의 인덱스 1번부터 (3-1)개를 잘라내기로 새로운 배열을 리턴한다.
console.log(citrus)         
console.log(fruits3.slice(3))             //두 번째 인자값이 없을 때는 3번부터 끝가지 잘라내기로 새로운 배열 리턴