const menuBtnEl = document.querySelector('.menu-button')
const close = document.querySelector('.hide');

menuBtnEl.addEventListener('click', showSidebar);
close.addEventListener('click', hideSidebar);

function showSidebar(){
     const sidebar = document.querySelector('.sidebar');
     sidebar.style.display = 'flex';
     const links = sidebar.querySelectorAll('a'); // Assuming links are <a> elements
     links.forEach(link => {
         link.addEventListener('click', hideSidebar);
     });
 }

function hideSidebar(){
     const sidebar = document.querySelector('.sidebar');
     sidebar.style.display = 'none';
 }

