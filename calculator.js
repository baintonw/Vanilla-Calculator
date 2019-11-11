const buttons = [...document.querySelectorAll('button')];
const screen = document.querySelector('#screen');
const ac = document.querySelector('[data-button = "AC"]');
const sound = document.querySelector('audio');


let numberArray = [];
let number = 0;
screen.innerText = 0;

let first = true
let operand;



let x = ''
let y = ''
let equation;

const math = {
  '+': function(x, y) { return x + y },
  '-': function(x, y) { return x - y },
  'x': function(x, y) { return x * y },
  '%': function(x, y) { return x / y }

};

//calculate (fill the operand in the math object key, and set the value of x and y) and then evaluate (upon hitting '=' evaluate the stored information)


//displays number typed in on screen
function show(e) {
  screen.innerText = number
}

function calculate(e){
  // console.log('what type of button am I?', e.target.dataset.button)
  // sound.play()
  if(e.target.dataset.button === 'number' || 'decimal') {
    numberArray.push(e.target.innerText)
    number = parseFloat(numberArray.join(''))
    first ? x = number : y = number


    console.log('x', x)
    console.log('y', y)


  } else if(!first) {
    numberArray.push(e.target.innerText)
    number = parseFloat(numberArray.join(''))

    y = number
    console.log('y', y)
  }

  if(e.target.dataset.button === 'operand') {
    // console.log('LIVE ONE!', 'operand', e.target.innerHTML)
    // if(!first) {
    //   math[]
    // }
    first = false
    screen.innerText = x
    numberArray = []
    number = 0
    // equation = math[e.target.innerHTML]
    //
    // console.log(equation(4, 2))
  }

}

//once x is set and I hit the operand, how can I set Y?

//clears display and numberArray (the first value)
function clear(e){
  console.log('cleared!')
  numberArray = []
  number = 0
  screen.innerText = number
  x = ''
  y = ''
}

//should i make a math object that takes in the operand string as a key and returns a function?





buttons.forEach(button => {
  //adds the 'show' event listener to each button
  button.addEventListener('click', calculate)
  button.addEventListener('click', show)
  // button.addEventListener('')
})

ac.addEventListener('click', clear)
