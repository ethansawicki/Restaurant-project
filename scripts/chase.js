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
    orderStatus: "In-Progress"
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
    orderStatus: "Completed"
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
    desert: ["Cheesecake", "Choco-Molton Cake", "Creme brulee", "Ice Cream"],
    orderStatus: "Completed"
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











