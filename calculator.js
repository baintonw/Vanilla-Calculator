//constants
const numbers = [...document.querySelectorAll('[data-button = "number" ]')];
const operands = [...document.querySelectorAll('[data-button = "operand"]')];
const decimal = document.querySelector('[data-button = "decimal"]');
const screen = document.querySelector('#screen');
const ac = document.querySelector('[data-button = "AC"]');
const equals = document.querySelector('#equals-btn')
const sound = document.querySelector('audio');

//mathematical variables
let numberArray = [];
let number = 0
console.log(number)

let operand;
let x = 0;
let y = 0;

//are we setting the first variable?
let setX = true


//this object takes the innerText of the operand buttons, and uses them as a key to access the desired mathematical functionality
const math = {

  '+': function(x, y) { return x + y },
  '-': function(x, y) { return x - y },
  'x': function(x, y) { return x * y },
  '%': function(x, y) { return x / y }

};

//counts decimals
var countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
}

//takes a value and displays it on the screen
function display(num){
    console.log('number as array', num.toString().split('.'),'length:', num.toString().split('').length)
    screen.innerText = num

}

//sets main value number when numbers are pressed on calculator
function setNumber(e){
    if(e.target.innerText === '.'){
      numberArray.indexOf(e.target.innerText) === -1 ? numberArray.push(e.target.innerText) : console.log('Array already includes one decimal point')
    } else {
      if(numberArray.length < 16){
        numberArray.push(e.target.innerText)
        setX ? x = parseFloat(numberArray.join('')) : y = parseFloat(numberArray.join(''))
        setX ? display(x) : display(y)
        console.log(e.target.innerText, 'setting number x', x, 'number y', y)
      }
    }
}

//take the number set into the x variables, and reduce with the next variable y
function calculate(e){
  if(!x){
    return
  }
  //needs to clear numberArray
  console.log('operand event', e.target.innerText)
  //is the operand available? if so calculate x and y following the math hash map
  operand ? x = math[operand](x, y) : null
  display(x)
  operand = e.target.innerText
  setX ? setX = !setX : null
  numberArray = []
  console.log('x', x, 'y', y)

}


//triggers upon equal button press, evaluates x and y based on operand and clears the number and operand variables
function evaluate(){
  number = math[operand](x,y)
  x = number
  display(number)
  number = 0
  operand = ''
  console.log('x', x)
}

//clears display and resets all variables. Starts calculating process from scratch
function clear(){
  x = 0
  y = 0
  numberArray = []
  number = 0
  setX = true
  operand = ''
  display(number)

}

//event listeners

numbers.forEach(number => {
  number.addEventListener('click', setNumber)
})

decimal.addEventListener('click', setNumber)

operands.forEach(opera => {
  opera.addEventListener('click', calculate)
})

equals.addEventListener('click', evaluate)
ac.addEventListener('click', clear)

//DEPRECATED

// buttons.addEventListener()

//calculator still needs to tally new number operand is pressed
/*
e.g. 3 x 3  (9 is displayed) 3 x (27 is displayed)
*/

// function show(e, x, y) {
//   if(first && x) {
//     screen.innerText = x
//   } else if(!first && y) {
//     screen.innerText = y
//   }
// }
//
// function calculate(e) {
//
//   if(e.target.dataset.button === 'number' || e.target.dataset.button === 'decimal') {
//     numberArray.push(e.target.innerText)
//     console.log('first: ', first, 'numberArray: ', numberArray)
//     numberArray.join('') ? number = parseFloat(numberArray.join('')) : number = x
//     first ? x = number : y = number
//     console.log('x', x)
//     console.log('y', y)
//     console.log('number', number)
//     show(e, x, y)
//   }
//
//   if(e.target.dataset.button === 'operand') {
//
//     if(!first && prevNum) {
//       numberArray = []
//       operand = e.target.innerHTML
//       first = false
//
//     } else if(!first) {
//       x = math[operand](x, y)
//       screen.innerText = x
//       numberArray = []
//
//     } else if(x) {
//
//       numberArray = []
//       operand = e.target.innerHTML
//       show(e, x, y)
//       first = false
//     }
//   }
// }
//
// function evaluate(e) {
//
//   if(x&&y) {
//     number = math[operand](x,y)
//     x = number
//     prevNum = number
//     screen.innerText = number
//     numberArray = []
//     number = 0
//     console.log('this is the value of x:', x, 'number:', number , first)
//   }
//
// }
//
//
// function clear(e){
//   console.log('cleared!')
//   numberArray = []
//   number = 0
//   x = ''
//   y = ''
//   screen.innerText = 0
//   first = true
// }
//
// buttons.forEach(button => {
//   button.addEventListener('click', calculate)
// })
//
// ac.addEventListener('click', clear)
// equals.addEventListener('click', evaluate)
