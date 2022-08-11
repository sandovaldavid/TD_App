import { addTask } from "./components/addTask.js";
const btn = document.querySelector('[data-form-btn]');


//arrow functions o funciones anonimas
btn.addEventListener('click',addTask);

