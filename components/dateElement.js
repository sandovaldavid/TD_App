export default (date) => {
	const dateElement = document.createElement('li');
	dateElement.classList.add('date');

	// Formatear la fecha de manera más descriptiva
	const formattedDate = formatDate(date);

	dateElement.innerHTML = formattedDate;
	return dateElement;
};

// Función para formatear la fecha de manera más descriptiva
const formatDate = (dateString) => {
	const currentDate = moment().format('DD/MM/YYYY');
	const tomorrow = moment().add(1, 'days').format('DD/MM/YYYY');
	const yesterday = moment().subtract(1, 'days').format('DD/MM/YYYY');

	if (dateString === currentDate) {
		return `<i class="far fa-calendar-check"></i> Today`;
	} else if (dateString === tomorrow) {
		return `<i class="far fa-calendar-plus"></i> Tomorrow`;
	} else if (dateString === yesterday) {
		return `<i class="far fa-calendar-minus"></i> Yesterday`;
	} else {
		// Obtener el día de la semana y la fecha formateada
		const weekDay = moment(dateString, 'DD/MM/YYYY').format('dddd');
		const formattedDate = moment(dateString, 'DD/MM/YYYY').format('MMMM D, YYYY');
		return `<i class="far fa-calendar"></i> ${weekDay} - ${formattedDate}`;
	}
};
