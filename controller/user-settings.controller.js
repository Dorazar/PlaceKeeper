'use strict'

function onSubmit(ev) {
  ev.preventDefault()

  // console.dir(ev.target)
  const { email, txtColor, bgColor, age, birthDate, birthTime } = ev.target

  const user = {
    email: email.value,
    txtColor: txtColor.value,
    bgColor: bgColor.value,
    age: age.value,
    birthDate: birthDate.value,
    birthTime: birthTime.value,
  }
  saveUserData(user)
  renderColors(user.txtColor, user.bgColor)
  window.location = 'index.html'
}

function showAge(value) {
  document.querySelector('#sAge').innerHTML = value
}
