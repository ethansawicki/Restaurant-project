import { tablesCopy } from "./database.js";
const tables = tablesCopy();

import {menuCopy} from "./database.js";
const menu = menuCopy();

import {serversCopy} from "./database.js";
const servers = serversCopy();


const chaseTables = tables.filter(table => table.serverId === 4);

for (const table of chaseTables) {
        table.order = [];
        for(const order of table.menuID) {
            for (const item of menu ) {
                if(order === item.id) {
                    table.order.push(item.menuItem);
                    }
                }
        }
}


for (const table of chaseTables) {
    table.price = 0;
    for (const order of table.menuID) {
        for (const item of menu) {
            if (order === item.id){
                table.price += item.price;
            }
         }
    }
}


let chase = '';
for (const chaseTable of chaseTables) {
    chase += `
    <fieldset class="table"><legend>Table ${chaseTable.id}</legend>
        <ul>
                <li> Guests: ${chaseTable.guestsNumber}</li>
                <li> Reservation: ${chaseTable.reservation}</li>
                <li> MenuType: ${chaseTable.menuType}</li>
                <li> Order: ${chaseTable.order}</li>
                <li> Order Status: ${chaseTable.orderStatus}</li>
                <li> Price: ${chaseTable.price}</li>
                <li> Tip: ${chaseTable.tipPercent * 100}%</li>
        </ul>
        </fieldset>
    `
}

let tipsTotal = 0;
for (const table of chaseTables) {
    tipsTotal += table.price * table.tipPercent;
}

document.getElementById('chase').innerHTML = chase;

document.getElementById('chaseTips').innerHTML = `Total in Tips = <span class = "chaseTipsValue">$${tipsTotal.toFixed(2)}</span>`;
console.log(chaseTips);



/* Previous JavaScript Restaurant Project*/
// const tables = [
//    {
//     id: 1, 
//     table: 7,
//     reservation: false,
//     Time: "12:00pm",
//     menuType: "Lunch",
//     totalGuestAmount: 4,
//     highChairs: true,
//     serverName: "Chase",
//     soupOrSalad: true,
//     entree: ["Fish", "Chicken", "Beef", "Vegetarian"],
//     beef: "Med-Rare",
//     drinkFromBar: false,
//     water: "Sparkling",
//     desert: null,
//     orderStatus: "In-Progress",
//     Price: 150,
//     TipPercent: 0.15
//    },
//    {
//     id: 2, 
//     table: 8,
//     reservation: true,
//     Time: "7:00pm",
//     menuType: "Dinner",
//     totalGuestAmount: 2,
//     highChairs: false,
//     serverName: "Chase",
//     soupOrSalad: true,
//     entree: ["Fish", "Chicken"],
//     beef: null,
//     drinkFromBar: true,
//     water: "Still",
//     desert: "Creme brulee",
//     orderStatus: "Completed",
//     Price: 83,
//     TipPercent: 0.20
//    },
//    {
//     id: 3, 
//     table: 9,
//     reservation: false,
//     Time: "8:00pm",
//     menuType: "Dinner",
//     totalGuestAmount: 4,
//     highChairs: false,
//     serverName: "Chase",
//     soupOrSalad: false,
//     entree: ["Beef", "Beef", "Beef", "Beef"],
//     beef: ["Rare", "Med-Rare", "Well", "Rare"],
//     drinkFromBar: true,
//     water: "Sparkling",
//     desert: ["Cheesecake", "Pie", "Ice Cream"],
//     orderStatus: "Completed",
//     Price: 100,
//     TipPercent: 0.25
//    }
// ]

// let chase = ``;
// for (const table of tables) {
    // chase += `<fieldset class="table"><legend>Table_${table.table}</legend><ul>`
//     for (const info in table) {
//         chase += `<li class="list">${info}: ${table[info]}</li>`
//     }
//     chase += `</ul></fieldset>`
// }

// document.getElementById('chase').innerHTML = chase;

// let tipsTotal = 0;
// for (const table of tables) {
//     tipsTotal += table.Price * table.TipPercent;
// };

// document.getElementById('chaseTips').innerHTML = `Total in Tips: <span class="chaseTipsValue">$${tipsTotal.toFixed(2)}</span>`;
// console.log(tipsTotal);




