const btnDropdown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

function openDropdown(event) {
    event.preventDefault();
    console.log('ativar função');
}

btnDropdown.firstElementChild('click', openDropdown);