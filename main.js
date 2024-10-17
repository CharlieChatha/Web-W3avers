const menuBtnEl = document.querySelector('.menu-button')
const close = document.querySelector('.hide');

menuBtnEl.addEventListener('click', showSidebar);
close.addEventListener('click', hideSidebar);

function showSidebar(){
     const sidebar = document.querySelector('.sidebar');
     sidebar.style.display = 'flex';
 }

function hideSidebar(){
     const sidebar = document.querySelector('.sidebar');
     sidebar.style.display = 'none';
 }

