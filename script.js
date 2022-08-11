import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
const btn =document.querySelector('[data-form-btn]');

const addTask = (event) => {
    const list = document.querySelector('[data-list]');
    const task = createTasck(event); 
    list.appendChild(task);
}
const createTasck = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");//libreria moment
    console.log(dateFormat);
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = '';
    //backticks
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add('task')
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    //task.innerHTML = content;
    const dateElement = document.createElement("spam");
    dateElement.innerHTML = dateFormat;
    console.log(dateElement);
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
};
//arrow functions o funciones anonimas
btn.addEventListener('click',addTask);

