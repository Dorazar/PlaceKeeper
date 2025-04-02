'use strict'
function saveToLocalStorage(key, value) {
  const json = JSON.stringify(value)
  localStorage.setItem(key, json)
}

function loadFromLocalStorage(key) {
  const json = JSON.parse(localStorage.getItem(key))
  return json
}


