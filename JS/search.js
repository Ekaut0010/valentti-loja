const searchIcon = document.querySelector('.search');
const searchInput = document.querySelector('.search_click');

searchIcon.addEventListener('click', (event) => {
  event.stopPropagation();

  searchInput.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
    searchInput.classList.remove('active');
  }
});