//Часть 1: Структура кода и типы данных
// Задачи:
// Создать файл main.js. В начале файла объявить переменные всех основных типов данных:
//  string, number, boolean, null, undefined, object, array, symbol, bigint.
// Вывести их в консоль вместе с результатом typeof, например: Value: Hello, Type: string.
// Сделать небольшой объект user с полями name, age, isAdmin и массивом hobbies.
// Вывести имя пользователя и первый элемент массива hobbies.

const stringVar = "Hello, World!";
const numberVar = 42;
const booleanVar = true;
const undefindedVar = undefined;
const objectVar = { sentense: stringVar }
const arr = []
const bigInt = 123n
const smb = Symbol("my symbol")

arr.push(stringVar, numberVar, booleanVar, undefindedVar, objectVar, bigInt, smb)

function print(variable) {
    try {
        console.log(`Value : ${variable}, Type: ` + typeof variable)
    } catch (ex) {
        console.log("Value : " + smb.toString() + ", Type: Symbol")
    }
}

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    print(element)
}

const hobbies = ["sleeping", "eating"]
const user = {
    name: "Alex",
    age: 40,
    isAdmin: true,
    hobbies
}

console.log("Name: " + user.name)
console.log("Hobby[0]: " + user.hobbies[0])

// Часть 2: Работа с функциями
// Задачи:
// Написать функцию (function declaration) — sum(a, b), которая возвращает сумму двух чисел.
// Написать ту же функцию как функциональное выражение (const sum = function(a,b){...}) 
// и убедиться, что она работает.
// Написать стрелочную функцию (const sum = (a,b)=>...) и проверить её.
// Написать функцию describeUser(user), которая принимает объект пользователя и выводит строку вида: Name: Alice, Age: 25, Admin: false. Объект можно взять из первой части домашки.


function sum(a, b) {
    return a + b
}

const sum2 = function (a, b) { return a + b }

console.log(sum(3, 4))
console.log(sum2(3, 4))

const sum3 = (a, b) => { return a + b }
console.log(sum3(3, 4))

const userProps = (user) => {
    for (const key in user) {
     console.log(key + " : " + user[key])
    }
}

userProps(user)
