const checkComplete = (id) => {
	const i = document.createElement('i');
	i.classList.add('far', 'fa-check-square', 'icon');
	i.addEventListener('click', (event) => completeTask(event, id));

	const srText = document.createElement('span');
	srText.classList.add('visually-hidden');
	srText.textContent = 'Mark task as complete';
	i.appendChild(srText);

	return i;
};

const completeTask = (evento, id) => {
	const element = evento.target;
	element.classList.toggle('fas');
	element.classList.toggle('completeIcon');
	element.classList.toggle('far');

	const taskItem = element.closest('.card');
	taskItem.classList.toggle('task-completed');

	taskItem.classList.add('task-highlight');
	setTimeout(() => {
		taskItem.classList.remove('task-highlight');
	}, 1000);

	const srText = element.querySelector('.visually-hidden');
	const isCompleted = element.classList.contains('completeIcon');

	if (isCompleted) {
		srText.textContent = 'Mark task as incomplete';
	} else {
		srText.textContent = 'Mark task as complete';
	}

	// Actualizar el estado en localStorage
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	const index = tasks.findIndex((item) => item.id == id);
	tasks[index]['complete'] = !tasks[index]['complete'];
	localStorage.setItem('tasks', JSON.stringify(tasks));

	// Mostrar feedback visual del cambio de estado de la tarea
	const feedback = document.createElement('div');
	feedback.classList.add(isCompleted ? 'task-completed-feedback' : 'task-uncompleted-feedback');
	feedback.textContent = isCompleted ? 'Task completed!' : 'Task marked as pending';
	document.querySelector('.mainCard').appendChild(feedback);
	setTimeout(() => {
		feedback.classList.add('fade-out');
		setTimeout(() => feedback.remove(), 300);
	}, 1500);
};

export default checkComplete;
