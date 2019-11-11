const buttons = [...document.querySelectorAll('button')]
const screen = document.querySelector('#screen')
const ac = document.querySelector('[data-button = "AC"]')

let numberArray = []
let number = 0
screen.innerText = number

function show(e){
  console.log('hello!', e.target.innerText)
  if(e.target.dataset.button === 'number' || 'decimal') {
    numberArray.push(e.target.innerText)
    number = parseFloat(numberArray.join(''))
    screen.innerText = number
  }

}

function clear(e){
  console.log('cleared!')
  numberArray = []
  number = 0
  screen.innerText = number
}





buttons.forEach(button => {
  //adds the 'show' event listener to each button
  button.addEventListener('click', show)
})

ac.addEventListener('click', clear)
