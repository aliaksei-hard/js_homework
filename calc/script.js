//todo 1 selector fro numbers
const button1 = document.querySelector('#btn-1')
const button2 = document.querySelector('#btn-2')
const button3 = document.querySelector('#btn-3')
const button4 = document.querySelector('#btn-4')
const button5 = document.querySelector('#btn-5')
const button6 = document.querySelector('#btn-6')
const button7 = document.querySelector('#btn-7')
const button8 = document.querySelector('#btn-8')
const button9 = document.querySelector('#btn-9')
const button10 = document.querySelector('#zero')
const button11 = document.querySelector('#sum') //data-value id
const button12 = document.querySelector('#subtraction')
const button13 = document.querySelector('#multiplication')
const button14 = document.querySelector('#division')
const button15 = document.querySelector('#equals')
const button16 = document.querySelector('#btn-ac')

button1.addEventListener('click', (event) => {
    console.log(event.target) //uznali chto nazhali => deistvie
    rememberFirst(1)
})
button1.addEventListener('click', () => rememberFirst(1))
button2.addEventListener('click', () => rememberFirst(2))
button3.addEventListener('click', () => rememberFirst(3))
button4.addEventListener('click', () => rememberFirst(4))
button5.addEventListener('click', () => rememberFirst(5))
button6.addEventListener('click', () => rememberFirst(6))
button7.addEventListener('click', () => rememberFirst(7))
button8.addEventListener('click', () => rememberFirst(8))
button9.addEventListener('click', () => rememberFirst(9))
button10.addEventListener('click', () => rememberFirst(0))

button11.addEventListener('click', () => rememberOperation('+'))
button12.addEventListener('click', () => rememberOperation('-'))
button13.addEventListener('click', () => rememberOperation('*'))
button14.addEventListener('click', () => rememberOperation('/'))

button15.addEventListener('click', () => calculateResult())
button16.addEventListener('click', () => resetAll())

let firstNumber = '';
let secondNumber = '';
let operationInMemory = '';
let resultNeeded = false;
let result
const opArr = ['+', '-', '*', '/']

function rememberFirst(number) {
    if (operationInMemory === '') {
        firstNumber = firstNumber + number
        render(firstNumber, false)
    } else {
        secondNumber = secondNumber + number
        render(secondNumber, false)
    }
    console.log("firstNumber: " + firstNumber)
    console.log("secondNumber: " + secondNumber)
}

function rememberOperation(operation) {
    operationInMemory = operation;
    render(operation, false)
    console.log("operation: " + operationInMemory)
}

function calculateResult() {
    console.log("I want to calculate result")
    let firstNumberForCalc = parseFloat(firstNumber)
    let secondNumberForCalc = parseFloat(secondNumber)
    let result = calculate(operationInMemory, firstNumberForCalc, secondNumberForCalc)
    render(result, true)
    console.log("Result is " + result)

    resetAll()
}

function calculate(operation, num1, num2) {
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            return
    }
    return result
}

function resetAll() {
    console.log("I`m resetting evrth")
    firstNumber = ''
    secondNumber = ''
    operationInMemory = ''
}

function render(smth, isResult) {
    const currentOperandTextElement = document.querySelector('.current-operand');
    let existing = currentOperandTextElement.innerText

    if (existing === '0' && !isResult) {
        currentOperandTextElement.innerText = smth
        return
    }

    if ((isOperation(smth) || endsWithOperation(existing)) && !isResult) {
        currentOperandTextElement.innerText = existing + smth
        return
    }

    if (containsOperation(existing) && !isResult) {
        let operatorIndex = String(existing).indexOf(opArr)
        console.log("Operator index: " + operatorIndex)
        let existingSize = String(existing).length
        let firstNumberAndOperator = String(existing).slice(0, operatorIndex + 1)
        console.log("firstNumberAndOperator : " + firstNumberAndOperator)
        currentOperandTextElement.innerText = firstNumberAndOperator + smth
        return
    }

    currentOperandTextElement.innerText = smth
}


//todo rewrite with that opArr like containsOperation
function isOperation(smth) {
    return smth === '+' || smth === '-' || smth === '*' || smth === '/'
}

function endsWithOperation(smth) {
    return smth.endsWith('+') || smth.endsWith('-') || smth.endsWith('*') || smth.endsWith('/')
}

function containsOperation(smth) {
    let stringSmth = String(smth)
    
    for (let index = 0; index < opArr.length; index++) {
        const element = opArr[index];
        if(stringSmth.includes(element)) {
            return true
        }
    }
    return false
}

