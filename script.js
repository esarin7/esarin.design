var button = document.querySelector('#hamburger-button')
var menu = document.querySelector('#menu')
var closeButton = document.querySelector('#close-button')

function openMenu() {
    menu.className = 'menu'
}

function closeMenu() {
    menu.className = 'menu closed'
}


button.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)