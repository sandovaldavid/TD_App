import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (event) => {
    event.preventDefault();
    console.log(event);
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY"); //libreria moment

    input.value = "";
    calendar.value = "";

    const taskObj = {
        value,
        dateFormat,
    };
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push({
        value,
        dateFormat,
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));
    const task = createTasck(taskObj);
    list.appendChild(task);
};

export const createTasck = ({ value, dateFormat }) => {
    const task = document.createElement("li");
    task.classList.add("card");
    //backticks
    const taskContent = document.createElement("div");

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    //task.innerHTML = content;
    const dateElement = document.createElement("spam");
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
};
