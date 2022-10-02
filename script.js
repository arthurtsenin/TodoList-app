import { $ } from "./variables.js";
import { Tasks } from "./constructors.js";
import { createTemplate } from "./templates.js";

const formElement = $("#form");
const deleteAllButtonElement = $("#deleteAllbutton");
const todoDescriptionElement = $("#todoContent");
const todoListElement = $("#list");

let tasks = [];

!localStorage.tasks ? (tasks = []) : (tasks = JSON.parse(localStorage.getItem("tasks")));

const addHtml = () => {
  todoListElement.innerHTML = "";

  if (tasks.length > 0) {
    tasks.forEach((item) => {
      todoListElement.innerHTML += createTemplate(item);
    });
  }
};

addHtml();

const uptadeLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const updateAndAdd = () => {
  uptadeLocalStorage();
  addHtml();
};

todoListElement.addEventListener("change", (event) => {
  const target = event.target;

  if (target.classList.contains("form-check-input")) {
    const todoElem = target.closest(".todo");
    const id = todoElem.id;

    tasks.forEach((item) => {
      if (item.id == id) {
        item.isChecked = target.checked;
        updateAndAdd();
      }
    });
  }
});

todoListElement.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("removeTodo")) {
    const todoElement = target.closest(".todo");
    const id = todoElement.id;

    tasks.forEach((item, index) => {
      if (item.id == id) {
        tasks.splice(index, 1);
        updateAndAdd();
      }
    });
  }
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  if (todoDescriptionElement.value.trim() === "" || todoDescriptionElement.value.length == 0) {
    alert("Todo is empty!");
  } else {
    tasks.push(new Tasks(todoDescriptionElement.value));
  }
  formElement.reset();
  updateAndAdd();
});

deleteAllButtonElement.addEventListener("click", () => {
  tasks = [];
  todoListElement.innerHTML = "";
  updateAndAdd();
});
