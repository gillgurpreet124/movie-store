const menuIcon =document.querySelector('#menu-icon');
const sidebar = document.querySelector('.sidebar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('box-x').className="fa-solid fa-xmark";
    sidebar.classList.toggle('small-sidebar');
}
// -------------------------------------------------------------login screen 
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click',() => {
    container.classList.add('active');
});

loginBtn.addEventListener('click',() => {
    container.classList.remove('active');
});