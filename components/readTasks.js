import { createTasck } from './addTask.js';
import { uniqueDates, orderDates } from '../services/date.js';
import dateElement from './dateElement.js';

export const displayTasks = () => {
	const list = document.querySelector('[data-list]');
	const emptyState = document.getElementById('emptyState');
	const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];

	// Clear the list
	list.innerHTML = '';

	// Show/hide empty state
	if (tasksList.length === 0) {
		emptyState.style.display = 'flex';
		return;
	} else {
		emptyState.style.display = 'none';
	}

	const dates = uniqueDates(tasksList);
	orderDates(dates);
	dates.forEach((date) => {
		const dateMoment = moment(date, 'DD/MM/YYYY');
		list.appendChild(dateElement(date));
		tasksList.forEach((task) => {
			const taskDate = moment(task.dateFormat, 'DD/MM/YYYY');
			const diff = dateMoment.diff(taskDate);
			if (diff == 0) {
				list.appendChild(createTasck(task));
			}
		});
	});
};
