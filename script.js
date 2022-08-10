( () => {const btn =document.querySelector('[data-form-btn]');

const createTasck = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
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
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);
};
//arrow functions o funciones anonimas
btn.addEventListener('click',createTasck);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
}
//Immediately invoked funtion expression IIFE
const completeTask = (evento) => {
    const element = evento.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    //toggle: verifica si una clase exciste, si es asi la quita, caso contrario la agrega.
}
})();
