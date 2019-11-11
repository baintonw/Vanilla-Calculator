const buttons = [...document.querySelectorAll('button')]
let display;

function show(e){
  console.log('hello!', e.target.innerText)
  console.log('am I a button?', e.target.dataset.button)

}

buttons.forEach(button => {
  button.addEventListener('click', show)
})
