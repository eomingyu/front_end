//이스케이프 문자   \'  \"  \\
console.log('이것은 \'사과\' 입니다.')
console.log('이것은 \\사과\\ 입니다.')

//문자열 비교 연산자  == (같다)  === (정확히 같다(더 엄격하게 비교))
{
    let x = 1;
    let y = '1';
    console.log('1==\'1\'? -> '+ (x==y));
    console.log('1===\'1\'? -> '+ (x===y));
}
//두 객체 비교시 항상 false
{
    let x = new String('apple');
    let y = new String('apple');
    console.log('new String(\'apple\')==new String(\'apple\')? -> '+ (x==y));
    console.log('new String(\'apple\')===new String(\'apple\')? -> '+ (x===y));
}
//문자열 길이 메소드 : length
{
    let txt = '12345678901234567';
    console.log("길이 : "+txt.length)
}
//문자열 추출 : slice(start,end), substring(start,end), substr(start,end)
//1) slice(start,end) : start ~ end-1 위치의 문자열 추출(위치는 0부터 시작) 
//                      , 매개변수 음수 가능, end 생략시 start 이후의 모든 문자열 추출
{
    let txt = "Apple, Banana, Kiwi"
    console.log("slice(7,13) : "+txt.slice(7,13))
    console.log("slice(7) : "+txt.slice(7))
}
//2) substring(start,end) : start ~ end-1 위치의 문자열 추출(위치는 0부터 시작) 
//                      , 매개변수 음수 불가능, end 생략시 start 이후의 모든 문자열 추출
{
    let txt = "Apple, Banana, Kiwi"
    console.log("substring(7,13) : "+txt.slice(7,13))
    console.log("substring(7) : "+txt.slice(7))
}
