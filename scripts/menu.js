import {menuCopy} from './database.js';
const menu = menuCopy();

// DISPLAY MENU ITEMS ON MENU PAGE
let breakfastItems = '<h3 class="menuType">Breakfast</h3>';
const displayBreakfastItems = () => {
    for (const menuItem of menu) {
        if (menuItem.type === 'breakfast') {
            breakfastItems += `
            <ul class="menuItemAndPrice">
                <li class="menuItem">${menuItem.menuItem}</li>
                <li id="menuSpace"></li>
                <li class="menuPrice">$${menuItem.price}</li>
            </ul>`
        }
    }
}
displayBreakfastItems()

let lunchItems = '<h3 class="menuType">Lunch</h3>';
const displayLunchItems = () => {
    for (const menuItem of menu) {
        if (menuItem.type === 'lunch') {
            lunchItems += `
            <ul class="menuItemAndPrice">
                <li class="menuItem">${menuItem.menuItem}</li>
                <li id="menuSpace"></li>
                <li class="menuPrice">$${menuItem.price}</li>
            </ul>`
        }
    }
}
displayLunchItems()

let dinnerItems = '<h3 class="menuType">Dinner</h3>';
const displayDinnerItems = () => {
    for (const menuItem of menu) {
        if (menuItem.type === 'dinner') {
            dinnerItems += `
            <ul class="menuItemAndPrice">
                <li class="menuItem">${menuItem.menuItem}</li>
                <li id="menuSpace"></li>
                <li class="menuPrice">$${menuItem.price}</li>
            </ul>`
        }
    }
}
displayDinnerItems()

let beverageItems = '<h3 class="menuType">Beverages</h3>';
const displayBeverageItems = () => {
    for (const menuItem of menu) {
        if (menuItem.type === 'drink') {
            beverageItems += `
            <ul class="menuItemAndPrice">
                <li class="menuItem">${menuItem.menuItem}</li>
                <li id="menuSpace"></li>
                <li class="menuPrice">$${menuItem.price}</li>
            </ul>`
        }
    }
}
displayBeverageItems()

document.getElementById('menuBreakfast').innerHTML = breakfastItems;
document.getElementById('menuLunch').innerHTML = lunchItems;
document.getElementById('menuDinner').innerHTML = dinnerItems;
document.getElementById('menuBeverages').innerHTML = beverageItems;