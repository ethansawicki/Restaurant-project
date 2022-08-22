import {tablesCopy} from './database.js';
const tables = tablesCopy();

import {menuCopy} from './database.js';
const menu = menuCopy();

import {serversCopy} from './database.js';
const servers = serversCopy();

// MASON TABLES
const masonTables = tables.filter(table => table.serverId === 1);

// DISPLAYING FOOD ITEMS BASED ON MENU ITEM ID'S
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

// DISPLAYING TOTAL PRICE FROM COMBINED ITEM PRICES AT EACH TABLE
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

let mason = '';
for (const masonTable of masonTables) {
    mason += `
        <fieldset class="masonTable"><legend class="masonLegend">Table ${masonTable.id}</legend>
            <ul class="masonList">
                <li>Guests: <span class="masonValue">${masonTable.guestsNumber}</span></li>
                <li>Revervation: <span class="masonValue">${masonTable.reservation}</span></li>
                <li>Menu: <span class="masonValue">${masonTable.menuType}</span></li>
                <li>Order: <span class="masonValue">${masonTable.order}</span></li>
                <li>Order Status: <span class="masonValue">${masonTable.orderStatus}</span></li>
                <li>Price: <span class="masonValue">$${masonTable.price}</span></li>
                <li>Tip: <span class="masonValue">${masonTable.tipPercent * 100}%</span></li>
            </ul>
        </fieldset>`
}

// TIPS
let tipsTotal = 0;
for (const table of masonTables) {
    tipsTotal += table.price * table.tipPercent;
};

document.getElementById('mason').innerHTML = mason;
document.getElementById('masonTips').innerHTML = `Total in Tips: <span class="masonTipsValue">$${tipsTotal.toFixed(2)}</span>`;




// FIRST STEP: JUST WRITE THESE OUT IN A WAY THAT WORKS AND MAKES SENSE, NO MATTER HOW LONG THE CODE IS
// ALSO, TURN THINGS INTO FUNCTIONS SO CAN USE IN OTHER FUCNTIONS AND LOOPS
// think about what can be turned into a function and if that would help
// is there a way to make the list of ordered food look better? put it into its own list?
// BONUS: maybe there's a way to turn keys like "menuType" into strings like "Menu Type"?


