
const tables = [
   {
    id: 1, 
    table: 7,
    reservation: false,
    Time: "12:00pm",
    menuType: "Lunch",
    totalGuestAmount: 4,
    highChairs: true,
    serverName: "Chase",
    soupOrSalad: true,
    entree: ["Fish", "Chicken", "Beef", "Vegetarian"],
    beef: "Med-Rare",
    drinkFromBar: false,
    water: "Sparkling",
    desert: null,
    orderStatus: "In-Progress",
    Price: 150,
    TipPercent: 0.15
   },
   {
    id: 2, 
    table: 8,
    reservation: true,
    Time: "7:00pm",
    menuType: "Dinner",
    totalGuestAmount: 2,
    highChairs: false,
    serverName: "Chase",
    soupOrSalad: true,
    entree: ["Fish", "Chicken"],
    beef: null,
    drinkFromBar: true,
    water: "Still",
    desert: "Creme brulee",
    orderStatus: "Completed",
    Price: 83,
    TipPercent: 0.20
   },
   {
    id: 3, 
    table: 9,
    reservation: false,
    Time: "8:00pm",
    menuType: "Dinner",
    totalGuestAmount: 4,
    highChairs: false,
    serverName: "Chase",
    soupOrSalad: false,
    entree: ["Beef", "Beef", "Beef", "Beef"],
    beef: ["Rare", "Med-Rare", "Well", "Rare"],
    drinkFromBar: true,
    water: "Sparkling",
    desert: ["Cheesecake", "Pie", "Ice Cream"],
    orderStatus: "Completed",
    Price: 100,
    TipPercent: 0.25
   }
]

let chase = ``;
for (const table of tables) {
    chase += `<fieldset class="table"><legend>Table_${table.table}</legend><ul>`
    for (const info in table) {
        chase += `<li class="list">${info}: ${table[info]}</li>`
    }
    chase += `</ul></fieldset>`
}

document.getElementById('chase').innerHTML = chase;

let tipsTotal = 0;
for (const table of tables) {
    tipsTotal += table.Price * table.TipPercent;
};

document.getElementById('chaseTips').innerHTML = `Total in Tips: <span class="chaseTipsValue">$${tipsTotal.toFixed(2)}</span>`;
console.log(tipsTotal);




