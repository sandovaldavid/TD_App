const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add('fas', 'fa-trash-alt','trachIcon', 'icon');
    i.addEventListener('click', deleteTask);
    return i;
};

const deleteTask = (event) => {
    const parent = event.target.parentElement; //accedemo al elemento padre de que contiene el icono
    parent.remove();
}
export default deleteIcon;