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
};
export default checkComplete;