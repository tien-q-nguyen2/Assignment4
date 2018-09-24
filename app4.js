// Get the burger menu
function $(el) {
    return document.querySelector(el)
}
var burger = $('#burger')
var burgerList = $('#burger-list')

// Define actions
function toggleBurger() {
    //If toggled on
    if (burger.className === 'burger visible-for-mobile opened') {
        burger.className = 'burger visible-for-mobile'
        burgerList.className = 'burger-closed'
    } else { //if toggled off
        burger.className = 'burger visible-for-mobile opened'
        burgerList.className = 'burger-opened'
    }
}

// Wire it up
burger.addEventListener('click', toggleBurger)