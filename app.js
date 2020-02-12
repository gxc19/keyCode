const keyNum1 = document.getElementById("keyNum1")

document.addEventListener("keypress", () => {
    keyNum1.textContent = event.keyCode
})

//
const keyType = document.getElementById("keyType")

document.addEventListener("keypress", () => {
    keyType.textContent = event.key
})

//
const keyNum = document.getElementById("keyNum")

document.addEventListener("keypress", () => {
    keyNum.textContent = event.keyCode
})

//
const keyName = document.getElementById("keyName")

document.addEventListener("keypress", () => {
    keyName.textContent = event.code
})
