'use strict'
function onIndexInit() {
  const userData = loadUserData()
  if (!userData) return

  const { txtColor, bgColor, birthDate, birthTime } = userData
  renderColors(txtColor, bgColor)
  renderBirthDateAndBirthTime(birthDate, birthTime)
}

function renderColors(txtColor, bgColor) {
  document.querySelector('body').style.backgroundColor = bgColor
  document.querySelector('body').style.color = txtColor
}

function renderBirthDateAndBirthTime(birthDate, birthTime) {
  if (!birthDate || !birthTime) return
  document.querySelector('.birthDate').innerHTML = birthDate
  document.querySelector('.birthTime').innerHTML = birthTime
}