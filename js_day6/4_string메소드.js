//이스케이프 문자   \'  \"  \\
console.log('이것은 \'사과\' 입니다.');     //이것은 '사과' 입니다.
console.log('이것은 \\사과\\ 입니다.');     //이것은 \사과\ 입니다.

//문자열 비교 연산자  == (같다)  === (정확히 같다(더 엄격하게 비교))
{
    let x = 1;
    let y = '1';
    console.log('1==\'1\'? -> '+ (x==y));       //true
    console.log('1===\'1\'? -> '+ (x===y));     //false
}
//두 객체 비교시 항상 false
{
    let x = new String('apple');
    let y = new String('apple');
    console.log('new String(\'apple\')==new String(\'apple\')? -> '+ (x==y));   //false
    console.log('new String(\'apple\')===new String(\'apple\')? -> '+ (x===y)); //false
}
//문자열 길이 메소드 : length
{
    let txt = '12345678901234567';
    console.log("길이 : "+txt.length);          //길이 : 17
}
//문자열 추출 : slice(start,end), substring(start,end), substr(start,length)
//1) slice(start,end) : start ~ end-1 위치의 문자열 추출(위치는 0부터 시작) 
//                      , 매개변수 음수 가능, end 생략시 start 이후의 모든 문자열 추출

let txt = "Apple, Banana, Kiwi";
console.log("slice(7,13) : "+txt.slice(7,13));      //slice(7,13) : Banana
console.log("slice(7) : "+txt.slice(7));            //slice(7) : Banana, Kiwi

//2) substring(start,end) : start ~ end-1 위치의 문자열 추출(위치는 0부터 시작) 
//                      , 매개변수 음수 불가능, end 생략시 start 이후의 모든 문자열 추출

txt = "Apple, Banana, Kiwi";
console.log("substring(7,13) : "+txt.substring(7,13));  //substring(7,13) : Banana
console.log("substring(7) : "+txt.substring(7));        //substring(7) : Banana, Kiwi

//3) substr(start,length) : start 위치부터 length 만큼의 길이의 문자열 추출
//                      , 매개변수 음수 가능, end 생략시 start 이후의 모든 문자열 추출

txt = "Apple, Banana, Kiwi";
console.log("substr(7,6) : "+txt.substr(7,6));          //substr(7,6) : Banana
console.log("substr(7) : "+txt.substr(7));              //substr(7) : Banana, Kiwi

//문자열 치환 : replace('A','B') 첫 번째 'A' 문자열을 찾아 'B'로 대체합니다. 대소문자 구분
//                  'A' 대신 /A/i : 대소문자 구분 안함(ignore)  /A/g : 전체 모든 문자열 변경(global)

txt = "Apple, Banana, Kiwi, Apple, Banana, Kiwi";
console.log(txt.replace('Banana','Mango'));         //Apple, Mango, Kiwi, Apple, Banana, Kiwi
console.log(txt.replace(/banana/i,'Mango'));        //Apple, Mango, Kiwi, Apple, Banana, Kiwi
console.log(txt.replace(/Banana/g,'Mango'));        //Apple, Mango, Kiwi, Apple, Mango, Kiwi

//대문자로 변환 : toUpperCase() , 소문자로 변환 : toLowerCase()
txt = "Apple, Banana, Kiwi";
console.log(txt.toUpperCase());         //APPLE, BANANA, KIWI
console.log(txt.toLowerCase());         //apple, banana, kiwi


// 문자열 연결 : concat(join,str2)  str2문자열과 연결함. join문자열은 연결할때 사용할 문자열
str1 = "Apple";
str2 = "Juice";
console.log(str1.concat(" ",str2));     //Apple Juice

//공백 제거 : trim()  문자열 양쪽에서 공백을 제거합니다.
txt = "    Apple   ";
console.log(txt.trim());                //Apple

//특정 위치의 문자 추출 : charAt()  index위치의 문자를 구함, 0부터 시작
txt = "Apple";
console.log(txt.charAt(3));                 //l

//문자열 나누기 : split()  구분 기호로 문자열을 나누어 배열로 반환합니다.
txt = "Apple, Banana, Kiwi";
console.log(txt.split(","));                //(3) ['Apple', ' Banana', ' Kiwi']


// 문자열검색 메소드 : 사용형식은 자바와 동일.
//indexOf() : 일치하는 첫 문자열을 찾아 시작 위치를 반환합니다. 두 번째 매개변수로 검색 시작 위치를 설정할 수 있습니다.
txt = "Apple, Banana, Kiwi, Apple, Banana, Kiwi";
console.log(txt.indexOf("Banana"));                     //7

//lastIndexOf() : 일치하는 마지막 문자열을 찾아 시작 위치를 반환합니다. 두 번째 매개변수로 검색 시작 위치를 설정할 수 있습니다.
txt = "Apple, Banana, Kiwi, Apple, Banana, Kiwi";
console.log(txt.lastIndexOf("Banana"));                 //28

//includes() : 문자열을 포함하면 true, 포함하지 않으면 false를 반환
txt = "Apple, Banana, Kiwi";
console.log(txt.includes("Banana"));                    //true
console.log(txt.includes("Mango"));                     //false

//startsWith() : 해당 문자열로 시작하면 true, 시작하지 않으면 false 반환
txt = "Apple, Banana, Kiwi";
console.log(txt.startsWith("Apple"));                   //true
console.log(txt.startsWith("Kiwi"));                    //false

//endsWith() : 해당 문자열로 끝나면 true, 끝나지 않으면 false 반환
txt = "Apple, Banana, Kiwi";
console.log(txt.endsWith("Apple"));                     //false
console.log(txt.endsWith("Kiwi"));                      //true