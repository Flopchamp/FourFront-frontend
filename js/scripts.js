document.addEventListener('DOMContentLoaded', function () {
	const toggles = document.querySelectorAll('.membership-header');
	toggles.forEach(function(header) {
		header.addEventListener('click', function() {
			const type = header.getAttribute('data-toggle');
			const desc = document.getElementById(type + '-desc');
			const chevron = header.querySelector('.bi');
			if (desc.style.display === 'none' || desc.style.display === '') {
				desc.style.display = 'block';
				chevron.classList.remove('bi-chevron-down');
				chevron.classList.add('bi-chevron-up');
			} else {
				desc.style.display = 'none';
				chevron.classList.remove('bi-chevron-up');
				chevron.classList.add('bi-chevron-down');
			}
		});
	});
});
