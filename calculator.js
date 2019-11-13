const buttons = [...document.querySelectorAll('button')];
const screen = document.querySelector('#screen');
const ac = document.querySelector('[data-button = "AC"]');
const equals = document.querySelector('#equals-btn')
const sound = document.querySelector('audio');


let numberArray = [];
let number = 0;
let prevNum;
// let screen.innerText = number


let first = true;
let operand;



let x = '';
let y = '';
// let equation = `x ${operand} y`

const math = {

  '+': function(x, y) { return x + y },
  '-': function(x, y) { return x - y },
  'x': function(x, y) { return x * y },
  '%': function(x, y) { return x / y }

};

//calculate (fill the operand in the math object key, and set the value of x and y) and then evaluate (upon hitting '=' evaluate the stored information)


//displays number typed in on screen
function show(e, x, y) {
  if(first && x) {
    screen.innerText = x
  } else if(!first && y) {
    screen.innerText = y
  }
}

function calculate(e) {

  if(e.target.dataset.button === 'number' || 'decimal') {
    numberArray.push(e.target.innerText)
    number = parseFloat(numberArray.join(''))
    first ? x = number : y = number
    console.log('x', x)
    console.log('y', y)
    console.log('number', number)
    show(e, x, y)
  }

  if(e.target.dataset.button === 'operand') {
    if(!first) {
      x = math[operand](x, y)
      show()
      numberArray = []
    } else if(x) {
      numberArray = []
      operand = e.target.innerHTML
      first = false
    } else if(first) {

      console.log('we are setting the first number', first, 'number', number)
    }
  }
}

function evaluate(e) {

  if(x&&y) {
    number = math[operand](x,y)
    x = number
    screen.innerText = number
    numberArray = []
    first = true
    console.log('this is the value of x:', x, 'number:', x , first)
  }

}

//once x is set and I hit the operand, how can I set Y?

//clears display and numberArray (the first value)
function clear(e){
  console.log('cleared!')
  numberArray = []
  number = 0
  x = ''
  y = ''
  screen.innerText = 0
  first = true
}

//should i make a math object that takes in the operand string as a key and returns a function?





buttons.forEach(button => {


  button.addEventListener('click', calculate)


})

ac.addEventListener('click', clear)
equals.addEventListener('click', evaluate)
