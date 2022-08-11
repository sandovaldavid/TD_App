import { createTasck } from "./addTask.js";

export const readTasks = () => {
    const list = document.querySelector("[data-list]");
    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];

    tasksList.forEach((task) => {
        list.appendChild(createTasck(task));
    });
};
