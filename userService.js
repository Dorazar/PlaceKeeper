const user = {
  email: '',
  txtColor: '',
}




function onSubmit(ev) {
  ev.preventDefault()
  const elEmail = document.querySelector('[name=email]').value
  const elTextColor = document.querySelector('[name=txtColor]').value

  user.email = elEmail
  user.txtColor = elTextColor
  //   console.log(user)
  saveToLocalStorage('userData', user)
  var res = loadFromLocalStorage('userData')
  console.log(res)
}

