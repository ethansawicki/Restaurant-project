// extracts from datascript javascript file thru import/export
import { tablesCopy } from "./database.js";
const tables = tablesCopy();

import {menuCopy} from "./database.js";
const menu = menuCopy();

import {serversCopy} from "./database.js";
const servers = serversCopy();

// my tables
const jimmyTables = tables.filter(table => table.serverId === 5);


for (const table of jimmyTables) {
        table.order = [];
        for(const order of table.menuID) {
            for (const item of menu ) {
                if(order === item.id) {
                    table.order.push(item.menuItem);
                    }
                }
        }
}


for (const table of jimmyTables) {
    table.price = 0;
    for (const order of table.menuID) {
        for (const item of menu) {
            if (order === item.id){
                table.price += item.price;
            }
         }
    }
}


let jimmy = '';
for (const jimmyTable of jimmyTables) {
    jimmy += `
    <fieldset class="table"><legend>Table ${jimmyTable.id}</legend>
        <ul>
                <li> Guests: ${jimmyTable.guestsNumber}</li>
                <li> Reservation: ${jimmyTable.reservation}</li>
                <li> MenuType: ${jimmyTable.menuType}</li>
                <li> Order:<br><span class="jimmyColors"> ${jimmyTable.order.join('<br>')}</span></li>
                <li> Order Status: ${jimmyTable.orderStatus}</li>
                <li> Price: ${jimmyTable.price}</li>
                <li> Tip: ${jimmyTable.tipPercent * 90}%</li>
        </ul>
        </fieldset>
    `
}


document.getElementById('jimmy').innerHTML = jimmy;
















/* Part 1 
const tables = [
    {   
        id: 10,
        
        Waiter: 'Jimmy',
        Reservation: true,
        Guests: 4,
        Drinks: ['water', 'water', 
        'coke', 'sweet tea'],
        Appetizers: ['eggrolls', 'edamame', 'wings'],
        Entrees: ['chicken and waffles', 'chicken noodle soup', 
        'chicken katsu', 'shoyu ramen'],
        Desserts: false
    },
        
    {   
        id: 11,
        
        Waiter: 'Jimmy',
        Reservation: false,
        Guests: 3,
        Drinks: ['water', 'unsweet tea', 'thai tea'],
        Appetizers: ['gyoza', 'queso con chorizo', 'fries'],
        Entrees: ['tacos al pastor', 'steak and potatos', 
        'wagyu crispy rice'],
        Dessert: ['caramel pie', 'mango sticky rice', 
        'tiramisu']
    },
    {   
        id: 12,
        
        Waiter: 'Jimmy',
        Reservation: false,
        Guests: 4,
        Drinks: ['gin and tonic', 'moscow mule', 
        'sapporo', 'bulleit bourbon neat'],
        Appetizer: false,
        Entrees: ['chicken alfredo', 'hot chicken', 
        'neapolitan pizza'],
        Dessert: false
    }

]


 /*
let jimtable = ``;
for (let table of tables) {
    jimtable += `<fieldset class=table><legend>Table_${table.id} </legend> <ul>`;
    for (const row in table) {
        table += `<li class =list>${row} : ${table[row]}</li>`;
    }
    jimtable += `</ul>  </fieldset>`;
}
document.getElementById("jimmy").innerHTML = jimtable;




let jimmy = '';
for (const table of tables) {
    jimmy += `<fieldset class=table><legend class=nice>${table.id} </legend> <ul>`;
    for (const data in table) {
        jimmy += `\n\t\t<li class='list'>${data}: ${table[data]}</li>`
    }
    jimmy += '\n\t</ul>\n</fieldset>'
}

document.getElementById('jimmy').innerHTML = jimmy;
*/