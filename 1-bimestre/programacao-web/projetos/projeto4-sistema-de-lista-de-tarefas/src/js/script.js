function addTask() {
    const input = document.getElementById("taskInput")
    const taskText = input.value.trim()
    const errorMessage = document.getElementById("message")

    if (taskText === "") {
      errorMessage.textContent = "Digite uma tarefa válida!"
      return
    }

    errorMessage.textContent = ""

    const li = document.createElement("li")

    const span = document.createElement("span")
    span.textContent = taskText

    span.addEventListener("click", function () {
      li.classList.toggle("completed")
    })

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remover"
    removeBtn.classList.add("remove-btn")

    removeBtn.addEventListener("click", function () {
      li.remove()
    })

    li.appendChild(span)
    li.appendChild(removeBtn)

    document.getElementById("taskList").appendChild(li)

    input.value = ""
  }

  document.getElementById("addBtn").addEventListener("click", addTask)