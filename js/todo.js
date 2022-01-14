const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")

const toDos = []

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteToDo(event){
    // event.target은 해당 button을 가리킴. event.target.parentNode는 해당li.
    const li = event.target.parentElement
    li.remove()
}

function paintToDo(newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo
    const button = document.createElement("button")
    button.innerText = "❌"
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
    // X클릭하면 지우는이벤트
    button.addEventListener("click", deleteToDo)
}

function handleToDoSubmit(event) {
    event.preventDefault()
    // newTodo에 입력받은 할일 저장
    const newTodo = toDoInput.value
    toDoInput.value = ""
    // localstorage에 저장하기위한 리스트toDos에 할일추가
    toDos.push(newTodo)
    // localstorage에 toDos할당
    saveToDos()
    console.log(typeof(localStorage["todos"]))
    console.log(localStorage["todos"])
    // 화면에 할일을 나타내주는 함수실행
    paintToDo(newTodo)
}

toDoForm.addEventListener("submit", handleToDoSubmit)