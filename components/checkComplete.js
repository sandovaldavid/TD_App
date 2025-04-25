const checkComplete = (id) => {
	const i = document.createElement('i');
	i.classList.add('far', 'fa-check-square', 'icon');
	i.addEventListener('click', (event) => completeTask(event, id));
	return i;
};
//Immediately invoked funtion expression IIFE
const completeTask = (evento, id) => {
	const element = evento.target;
	element.classList.toggle('fas');
	element.classList.toggle('completeIcon');
	element.classList.toggle('far');
	//toggle: verifica si una clase exciste, si es asi la quita, caso contrario la agrega.
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	const index = tasks.findIndex((item) => item.id == id);
	tasks[index]['complete'] = !tasks[index]['complete'];
	localStorage.setItem('tasks', JSON.stringify(tasks));
};
export default checkComplete;
