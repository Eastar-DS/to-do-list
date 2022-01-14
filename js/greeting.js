const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

function onLoginSubmit(event) {
    event.preventDefault()
    const username = loginInput.value
    // 인풋창 숨기기
    loginForm.classList.add(HIDDEN_CLASSNAME)
    // 로컬스토리지에 저장하기
    localStorage.setItem(USERNAME, username)
    // 화면에 아이디 띄우기
    paintGreetings(username)
}

function paintGreetings() {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)
}else {
    paintGreetings(savedUsername)
}












