import { displayTasks } from './readTasks.js';
const deleteIcon = (id) => {
	const i = document.createElement('i');
	i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
	i.addEventListener('click', () => deleteTask(id));
	return i;
};

const deleteTask = (id) => {
	const li = document.querySelector('[data-list]');
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	const index = tasks.findIndex((item) => item.id == id);

	const taskName = tasks[index].value;

	tasks.splice(index, 1);
	li.innerHTML = '';
	localStorage.setItem('tasks', JSON.stringify(tasks));

	showDeleteFeedback(taskName);

	displayTasks();
};

const showDeleteFeedback = (taskName) => {
	const existingFeedback = document.querySelector('.task-deleted-feedback');
	if (existingFeedback) {
		existingFeedback.remove();
	}

	const feedback = document.createElement('div');
	feedback.classList.add('task-deleted-feedback');

	const truncatedName = taskName.length > 20 ? taskName.substring(0, 20) + '...' : taskName;
	feedback.innerHTML = `<i class="fas fa-check-circle"></i> Task deleted: "${truncatedName}"`;

	document.body.appendChild(feedback);

	setTimeout(() => {
		feedback.classList.add('feedback-visible');
	}, 10);

	setTimeout(() => {
		feedback.classList.add('fade-out');
		setTimeout(() => {
			if (feedback && feedback.parentNode) {
				feedback.remove();
			}
		}, 500);
	}, 3000);
};

export default deleteIcon;
