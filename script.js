import { addTask } from './components/addTask.js';
import { displayTasks } from './components/readTasks.js';

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.querySelector('[data-form-btn]');
	btn.addEventListener('click', addTask);

	displayTasks();

	window.addEventListener('resize', handleOrientationChange);
	handleOrientationChange();

	document.querySelector('[data-form-input]').focus();
});

function handleOrientationChange() {
	const mainCard = document.querySelector('.mainCard');

	const isTablet = window.matchMedia('(min-width: 481px) and (max-width: 1024px)').matches;
	const isLandscape = window.matchMedia('(orientation: landscape)').matches;

	if (isTablet) {
		if (isLandscape) {
			mainCard.classList.add('landscape-mode');
		} else {
			mainCard.classList.remove('landscape-mode');
		}
	}
}
