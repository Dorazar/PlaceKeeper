const user = {
  email: '',
  txtColor: '',
}

function onSubmit(ev) {
  ev.preventDefault()
  const elEmail = document.querySelector('[name=email]').value
  const elTextColor = document.querySelector('[name=txtColor]').value

  console.log(elEmail)
  console.log(elTextColor)
}
