// ES6 func style
const printHello = () => {
    console.log('hello log')
}

printHello()

// warn and backtick
// console.warn(`this ${'can make error'}`)

// formatting
console.log(`name : %s, math : %s, science : %s`, 'cheolhee', 653, 654)


// 숫자이면 false, 숫자가 아니면 true ( is not a number)
console.log(isNaN('1asd'))

//
const string = 'hello'
console.log(string.length)
console.log(string[1])
console.log(string.indexOf('l'))

// array
const array1 = []

array1.push(1)
array1.push(2)
array1.push(3)
array1.push(4)
array1.push(5)
array1.push(6)
console.log(typeof array1)
console.log(array1)

// json
const user = {};
user.name = 'cheol hee'
user.age = '25'

console.log(typeof user)
console.log(user)
console.log(user.name)
console.log(user['name'])

// for of json
const userList = [
    {name: 'cheolhee', age: 25},
    {name: 'kyunghee', age: 50},
    {name: 'sangik', age: 52},
    {name: 'minhee', age: 21}
]

for (const v of userList) {
    console.log('user : ', v)
}

// forEach
userList.forEach((v) => {
    console.log(v.name, '의 나이는 ', v.age, '입니다')
})

// Date
console.log(new Date(2020,8,2,2).toLocaleString())

// yyyy-mm-dd 형식 출력
const getYYYYMMDD = (date) => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() < 9 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `${yyyy}-${mm}-${dd}`
}

console.log(getYYYYMMDD(new Date()))

// timestamp

// try catch
try {
    printMessage('hello')
} catch(e) {
    console.log(`error ${e}`)
}

// global object
console.log(process.env)
console.log(process.arch)
console.log(process.uptime())
console.log(process.memoryUsage())
console.log(process.version)
console.log(process.versions)

// dir 속성 출력
console.dir(userList)

// 함수를 변수에 넣다.
const plus = (a,b) => {
    return a+b;
}

const minus = (a,b) => {
    return a-b;
}

const calc = (a,b,func) => {
    return func(a,b);
}

console.log(calc(5,5,plus))
console.log(calc(10,5,minus))

// callback 응용
const printResult = (result) => {
    console.log(result)
}
const plusAndPrint = (result, callback) => {
    callback(result)
}

plusAndPrint(plus(3,4141), printResult)

// random
console.log(Math.random())

// replace
console.log('hello world'.replace('world', 'cheolhee'))

// split
const dateString = '2020-08-02 11:00:00'

const date = dateString.split(' ')[0];
const time = dateString.split(' ')[1];

console.log(date)
console.log(time)

// substring
console.log('hello world'.substring(3, 7))

// string 안의 숫자를 number로 바꾸기 바꾸기 : Number, parsInt
const numberInString = '203945.3434'

console.log(Number(numberInString))
console.log(typeof Number(numberInString))
console.log(parseInt(numberInString))
console.log(typeof parseInt(numberInString))

// regexp(/ /g)
const stringToChange = `<h1>::::특별가::::</h1>`
console.log(stringToChange)

const replaced1 = stringToChange.replace(/<h1>/g, '')
console.log(replaced1)
const replaced2 = replaced1.replace(/<\/h1>/g, '')
console.log(replaced2)

// regexp ( .. )
const stringToChange2 = '<h1>특별가</h1> <h2> 할인행사입니다. </h2>'

const repl1 = stringToChange2.replace(/<..>/g, '').replace(/<...>/g, '')
console.log(repl1)

// .{a,b}
const repl2 = stringToChange2.replace(/<.{0,1}h2>/g, '')
console.log(repl2)

// []
const stringToChange3 = '( 특별가 할인행사입니다. )';
const repl3 = stringToChange3.replace(/[()]/g, '');
console.log(repl3)

// match
const stringToMatch = 'hello this is video for leaning best programming language javascript using node js.' +
    'we are going to download webstorm. click the link under this video and click download button'
const result049 = stringToMatch.match(/video/g);
console.log(result049)

// setInterval
const printHi = setInterval(() => {
    console.log('hello hihihihi')
}, 1000)
setTimeout(() => {
    console.log('one')
}, 3000)

setTimeout(() => {
    clearInterval(printHi)
}, 5100)

// list : push, pop

const myList = [1,2,3,4,5,6]
console.log(myList)
myList.push('helloo')
myList.push('helloo')
myList.push('helloo')
myList.push('hellosddso')
myList.push('hellosdfs')

console.log(myList)
myList.pop();
myList.pop();
myList.pop();
console.log(myList)

// 배열 정렬 sort(), sort().reverse() 
// sort((a,b) => {if (a > b) return 1 else return -1} ) : 큰 것을 맨뒤로 보냄 (오름차순)

// slice 배열에서 필요한 부분만 뽑아내기

// shift() : 첫번째 원소 삭제
// unshift(val) : 첫번째에 val 삽입


