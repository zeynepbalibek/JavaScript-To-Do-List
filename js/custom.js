// Local Storage

let tasksArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

localStorage.setItem('tasks', JSON.stringify(tasksArray));
const data = JSON.parse(localStorage.getItem('tasks'));

// html sayfasından id lerin çağrılması

let toastButton = document.querySelector("#liveToastBtn")
let list = document.querySelector("#list")
let task = document.querySelector("#task")
let listItem = document.getElementsByTagName("li");

// Çarpı butonunun oluşturulması ve task silme

var i;
for (let i = 0; i < listItem.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    listItem[i].append(closeButton);
    listItem[i].onclick = check;
}

// Eleman ekle butonu

toastButton.addEventListener('click', addTask)


//Fonksiyonlar 

function check() {
    this.classList.toggle("checked");
}

function removeButton() {
    this.parentElement.remove();
}

// Listeye eleman eklemek

function addTask() {

    if (task.value == "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");

        localStorage.setItem('tasks', JSON.stringify(tasksArray));

        let newListItem = document.createElement("li")
        newListItem.innerHTML = task.value;
        task.value = "";

        // Listeye sonradan eklenen elemanlar için aynı işlemlerin tekrarı

        newListItem.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        newListItem.append(closeButton);

        list.append(newListItem);
        inputElement.value = ("");
    }
}