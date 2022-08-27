import {menuCopy} from './database.js';
const menu = menuCopy();

// DISPLAY MENU ITEMS ON MENU PAGE
const displayBreakfastItems = () => {
    let HTML = '<h3 class="menuType">Breakfast</h3>';
    for (const menuItem of menu) {
        if (menuItem.type === 'breakfast') {
            HTML += `
            <ul class="menuItemAndPrice">
                <li class="menuItem">${menuItem.menuItem}</li>
                <li id="menuSpace"></li>
                <li class="menuPrice">$${menuItem.price}</li>
            </ul>`
        }
    }
    document.getElementById('menuBreakfast').innerHTML = HTML;
}
displayBreakfastItems()

const displayLunchItems = () => {
    let HTML = '<h3 class="menuType">Lunch</h3>';
    for (const menuItem of menu) {
        if (menuItem.type === 'lunch') {
            HTML += `
            <ul class="menuItemAndPrice">
                <li class="menuItem">${menuItem.menuItem}</li>
                <li id="menuSpace"></li>
                <li class="menuPrice">$${menuItem.price}</li>
            </ul>`
        }
    }
    document.getElementById('menuLunch').innerHTML = HTML;
}
displayLunchItems()

const displayDinnerItems = () => {
    let HTML = '<h3 class="menuType">Dinner</h3>';
    for (const menuItem of menu) {
        if (menuItem.type === 'dinner') {
            HTML += `
            <ul class="menuItemAndPrice">
                <li class="menuItem">${menuItem.menuItem}</li>
                <li id="menuSpace"></li>
                <li class="menuPrice">$${menuItem.price}</li>
            </ul>`
        }
    }
    document.getElementById('menuDinner').innerHTML = HTML;
}
displayDinnerItems()

const displayBeverageItems = () => {
    let HTML = '<h3 class="menuType">Beverages</h3>';
    for (const menuItem of menu) {
        if (menuItem.type === 'drink') {
            HTML += `
            <ul class="menuItemAndPrice">
                <li class="menuItem">${menuItem.menuItem}</li>
                <li id="menuSpace"></li>
                <li class="menuPrice">$${menuItem.price}</li>
            </ul>`
        }
    }
    document.getElementById('menuBeverages').innerHTML = HTML;
}
displayBeverageItems()







// // /*----------------------------------------------------------NAV_BAR- THis One Works!! ---*/
// const displayNavBar = () => {
//     let navbar = `<section class="nav">
// <ul class="navBar">
//     <a href="#ethan"><li class="navList">ETHAN</li></a>
//     <a href="#mariana"><li class="navList">MARIANA</li></a>
//     <a href="#chase"><li class="navList">CHASE</li></a>
//     <a href="#jimmy"><li class="navList">JIMMY</li></a>
//     <a href="#mason"><li class="navList">MASON</li></a>
// </ul>
// </section>`;
//     document.getElementById("navbar").innerHTML = navbar;
// }
// displayNavBar()

// // /*-------------------------------------------------------------LOGO- THis One Works!! ---*/
// const displayLogo = () => {
// let logo = `<img class="img-logo" src="/img_Style/Logo.jpg" alt="restaurant Logo" />`;
// document.getElementById("logo").innerHTML = logo;
// }
// displayLogo()
