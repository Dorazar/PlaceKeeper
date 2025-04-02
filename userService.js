const user = {
  email: '',
  txtColor: '',
  bgColor: '',
  age: '',
  birthDate: '',
  birthTime: '',
}

function onSubmit(ev) {
  ev.preventDefault()
  const elEmail = document.querySelector('[name=email]').value
  const elTextColor = document.querySelector('[name=txtColor]').value
  const elBackgroundColor = document.querySelector('[name=bgColor]').value
  const elAge = document.querySelector('[name=age]').value
  const elBirthDate = document.querySelector('[name=birthDate]').value
  const elBirthTime = document.querySelector('[name=birthTime]').value

  user.email = elEmail
  user.txtColor = elTextColor
  user.bgColor = elBackgroundColor
  user.age = elAge
  user.birthDate = elBirthDate
  user.birthTime = elBirthTime

  //   console.log(user)
  saveToLocalStorage('userData', user)
  var res = loadFromLocalStorage('userData')
  console.log(res)
}
