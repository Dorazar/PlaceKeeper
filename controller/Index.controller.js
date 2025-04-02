'use strict'
function onIndexInit() {
    const userData = loadFromLocalStorage('userData')
    console.log(userData)
    if (!userData) return 
    
    const  {txtColor, bgColor, birthDate, birthTime } = userData
    renderColors(txtColor,bgColor)
}

function renderColors(txtColor,bgColor) {
   
document.querySelector('body').style.backgroundColor = bgColor
  document.querySelector('body').style.color = txtColor
}


function showAge(value) {
    document.querySelector('#sAge').innerHTML = value
  }