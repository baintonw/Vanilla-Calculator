const buttons = [...document.querySelectorAll('button')];
const screen = document.querySelector('#screen');
const ac = document.querySelector('[data-button = "AC"]');
const equals = document.querySelector('#equals-btn')
const sound = document.querySelector('audio');


let numberArray = [];
let number = 0;
let prevNum = ''


let first = true;
let operand;



let x = '';
let y = '';

const math = {

  '+': function(x, y) { return x + y },
  '-': function(x, y) { return x - y },
  'x': function(x, y) { return x * y },
  '%': function(x, y) { return x / y }

};



function show(e, x, y) {
  if(first && x) {
    screen.innerText = x
  } else if(!first && y) {
    screen.innerText = y
  }
}

function calculate(e) {

  if(e.target.dataset.button === 'number' || e.target.dataset.button === 'decimal') {
    numberArray.push(e.target.innerText)
    numberArray.join('') ? number = parseFloat(numberArray.join('')) : number = x
    first ? x = number : y = number
    console.log('x', x)
    console.log('y', y)
    console.log('number', number)
    show(e, x, y)
  }

  if(e.target.dataset.button === 'operand') {
    
    if(!first && prevNum) {
      numberArray = []
      operand = e.target.innerHTML
      first = false
      
    }else if(!first) {
      x = math[operand](x, y)
      show(e, x, y)
      numberArray = []
      
    } else if(x) {
      
      numberArray = []
      operand = e.target.innerHTML
      show(e, x, y)
      first = false
    }
  }
}

function evaluate(e) {

  if(x&&y) {
    number = math[operand](x,y)
    x = number
    prevNum = number
    screen.innerText = number
    numberArray = []
    number = 0
    console.log('this is the value of x:', x, 'number:', number , first)
  }

}


function clear(e){
  console.log('cleared!')
  numberArray = []
  number = 0
  x = ''
  y = ''
  screen.innerText = 0
  first = true
}

buttons.forEach(button => {
  button.addEventListener('click', calculate)
})

ac.addEventListener('click', clear)
equals.addEventListener('click', evaluate)
