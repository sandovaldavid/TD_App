import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (event) => {
	event.preventDefault();
	const list = document.querySelector('[data-list]');
	const input = document.querySelector('[data-form-input]');
	const calendar = document.querySelector('[data-form-date]');

	const value = input.value.trim();
	const date = calendar.value;
	const dateFormat = moment(date).format('DD/MM/YYYY'); //libreria moment
	
	if (value === '' || date === '') {
		// Mostrar feedback visual si los campos están vacíos
		if (value === '') {
			input.classList.add('input-error');
			setTimeout(() => input.classList.remove('input-error'), 1500);
		}
		if (date === '') {
			calendar.classList.add('input-error');
			setTimeout(() => calendar.classList.remove('input-error'), 1500);
		}
		return;
	}

	input.value = '';
	calendar.value = '';

	const complete = false;

	const taskObj = {
		value,
		dateFormat,
		complete,
		id: uuid.v4(),
	};
	list.innerHTML = '';
	const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
	taskList.push(taskObj);
	localStorage.setItem('tasks', JSON.stringify(taskList));
	displayTasks();
	
	// Mostrar feedback visual de que la tarea fue agregada
	const feedback = document.createElement('div');
	feedback.classList.add('task-added-feedback');
	feedback.textContent = 'Task added successfully!';
	document.querySelector('.mainCard').appendChild(feedback);
	setTimeout(() => {
		feedback.classList.add('fade-out');
		setTimeout(() => feedback.remove(), 300);
	}, 1500);
};

export const createTasck = ({ value, dateFormat, complete, id }) => {
	const task = document.createElement('li');
	task.classList.add('card');
	//backticks
	const taskContent = document.createElement('div');
	taskContent.classList.add('task-content');

	const check = checkComplete(id);

	if (complete) {
		check.classList.toggle('fas');
		check.classList.toggle('completeIcon');
		check.classList.toggle('far');
		// También tachar el texto de la tarea completada
		task.classList.add('task-completed');
	}
	
	const titleTask = document.createElement('span');
	titleTask.classList.add('task');
	titleTask.innerText = value;
	taskContent.appendChild(check);
	taskContent.appendChild(titleTask);
	
	const dateElement = document.createElement('span');
	dateElement.innerHTML = dateFormat;
	dateElement.classList.add('task-date');
	
	const actionsContainer = document.createElement('div');
	actionsContainer.classList.add('task-actions');
	actionsContainer.appendChild(deleteIcon(id));
	
	task.appendChild(taskContent);
	task.appendChild(dateElement);
	task.appendChild(actionsContainer);
	
	// Añadir efecto de ripple para feedback táctil
	task.addEventListener('touchstart', function(e) {
		const x = e.touches[0].clientX - this.getBoundingClientRect().left;
		const y = e.touches[0].clientY - this.getBoundingClientRect().top;
		
		const ripple = document.createElement('span');
		ripple.classList.add('ripple');
		ripple.style.left = `${x}px`;
		ripple.style.top = `${y}px`;
		
		this.appendChild(ripple);
		
		setTimeout(() => ripple.remove(), 600);
	});
	
	return task;
};
