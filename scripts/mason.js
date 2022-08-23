import {tablesCopy} from './database.js';
const tables = tablesCopy();

import {menuCopy} from './database.js';
const menu = menuCopy();

import {serversCopy} from './database.js';
const servers = serversCopy();

// MASON TABLES
const masonTables = tables.filter(table => table.serverId === 1);

// DISPLAYING FOOD ITEMS BASED ON MENU ITEM ID'S
const getOrder = () => {
    for (const table of masonTables) {
        table.order = [];
        for (const order of table.menuID) {
            for (const item of menu) {
                if (order === item.id) {
                    table.order.push(item.menuItem);
                }
            }
        }
    }
}
getOrder()

// CALCULATING TOTAL PRICE FROM COMBINED ITEM PRICES AT EACH TABLE
const getPrice = () => {
    for (const table of masonTables) {
        table.price = 0;
        for (const order of table.menuID) {
            for (const item of menu) {
                if (order === item.id) {
                    table.price += item.price;
                }
            }
        }
    }
}
getPrice();

// DISPLAY ALL TABLES AND THEIR KEY-VALUE PAIRS
let mason = '';
const displayTableInfo = () => {
    for (const masonTable of masonTables) {
        mason += `
            <fieldset class="masonTable"><legend class="masonLegend">Table ${masonTable.id}</legend>
                <ul class="masonList">
                    <li>Guests: <span class="masonTableValue">${masonTable.guestsNumber}</span></li>
                    <li>Revervation: <span class="masonTableValue">${masonTable.reservation}</span></li>
                    <li>Menu: <span class="masonTableValue">${masonTable.menuType}</span></li>
                    <li><span class="masonTableKey">Order</span><span class="masonTableValue orders"><br>${masonTable.order.join('<br>')}</span></li>
                    <li>Order Status: <span class="masonTableValue">${masonTable.orderStatus}</span></li>
                    <li>Price: <span class="masonTableValue">$${masonTable.price}</span></li>
                    <li>Tip: <span class="masonTableValue">${masonTable.tipPercent * 100}%</span></li>
                </ul>
            </fieldset>`
    }
}
displayTableInfo()

// TIPS
let tipsTotal = 0;
for (const table of masonTables) {
    tipsTotal += table.price * table.tipPercent;
};

document.getElementById('mason').innerHTML = mason;
document.getElementById('masonTips').innerHTML = `Total in Tips: <span class="masonTipsValue">$${tipsTotal.toFixed(2)}</span>`;