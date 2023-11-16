let ajout = document.querySelector(".add");
let btnAdd = document.querySelector("#add");
let todo = document.querySelector(".todo");
let items = document.querySelector(".items");
let edition = document.querySelector(".edit");
let btnSup = document.querySelector("#delete");
let btnEdit = document.querySelector("#edit");
let btnSave = document.querySelector("#save");
let btnCancel = document.querySelector("#cancel");



let i = 1;

btnAdd.addEventListener("click", (e) => {
  let ToDoItem = `<div>
  <input type="radio" name="todo-item" class="radio" id="item-${(i += 1)}" value="${
    ajout.value
  }">
  <label for="item-${i}"> ${ajout.value}</label>
  </div>`;

  if (ajout.value == "") {
    alert("Vous devez saisir une tâche");
  } else {
    items.innerHTML += ToDoItem;
    ajout.value = "";
  }
});

btnSup.addEventListener("click", () => {
  let choix = document.querySelector(".radio:checked");
  if (choix == null) {
    alert("Choissisez une tâche à supprimer");
  } else {
    choix.parentNode.remove();
  }
});

btnEdit.addEventListener("click", () => {
  let choix = document.querySelector(".radio:checked");
  if (choix == null) {
    alert("Choissisez une tâche à modifier");
  } else {
    edition.value = choix.value;
  }
});

btnSave.addEventListener("click", () => {
  let choix = document.querySelector(".radio:checked");
  if (edition.value == "") {
    alert("Rien à modifier");
  } else {
    console.log(choix.parentElement.parentElement.innerHTML);
    document.querySelector(".radio:checked").parentNode.innerHTML = `
    <input type="radio" name="todo-item" class="radio" id="item-${(i += 1)}" value="${
      edition.value
    }">
    <label for="item-${i}"> ${edition.value}</label>`;
    edition.value = "";
  }
});

btnCancel.addEventListener("click", () => {
  edition.value = "";
});

btnEdit.addEventListener("click", () => {
  let choix = document.querySelector(".radio:checked");
  if (choix == null) {
    alert("Choissisez une tâche à modifier");
  } else {
    edition.value = choix.value;
  }
});

