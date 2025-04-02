'use strict'
const STORAGE_KEY = 'userData'


function saveUserData(user) {
    saveToLocalStorage(STORAGE_KEY,user)
}

function loadUserData() {
    return loadFromLocalStorage(STORAGE_KEY)
}