import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (event) => {
    const list = document.querySelector('[data-list]');
    const task = createTasck(event); 
    list.appendChild(task);
};

const createTasck = (evento)=>{
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("task")) || [ ] ;
    console.log(taskList);
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");//libreria moment
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = '';
    //backticks
    const taskContent = document.createElement("div");

    const taskObj = {
        value,
        dateFormat
    };

    taskList.push(taskObj);

    localStorage.setItem("task", JSON.stringify(taskList));
    
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add('task')
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);
    //task.innerHTML = content;
    const dateElement = document.createElement("spam");
    dateElement.innerHTML = dateFormat;

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
};