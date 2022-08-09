const tables = [
    {
        id: 1,
        table: 1,
        reservation: false,
        reservationDate: "N/A"
    },
    {
        id: 2,
        table: 2,
        reservation: true,
        reservationDate: "08/08/2022"
    },
    {
        id: 3,
        table: 3,
        reservation: false,
        reservationDate: "N/A"
    }
]
const orders = [
    {
        id: 1,
        tableID: 2,
        partyOf: 4,
        mealType: "Dinner",
        appetizer: true,
        entree: ["Steak", " Fish", " Burger", " Salad"],
        dessert: "Pie",
        drink: "Yes Please"
    },
    {
        id: 2,
        tableID: 1,
        partyOf: 2,
        mealType: "Dinner",
        appetizer: true,
        entree: ["Fish", " Salad"],
        dessert: "Creme Brulee",
        drink: "Tea"
    },
    {
        id: 3,
        tableID: 3,
        partyOf: 1,
        mealType: "Lunch",
        appetizer: false,
        entree: "Chicken",
        dessert: "N/A",
        drink: "Coke"
    }
]

let returnToDOM = `<section class="ethan-list">`

for (const order of orders) {
    for (const table of tables) {
        if(table.table === order.tableID) {
            returnToDOM += `<ul>`
            returnToDOM += `<h3>Table: ${table.table}</h3>`
            returnToDOM += `<li>Party Of: ${order.partyOf}</li>`
            returnToDOM += `<li>Table Reservation Date: ${table.reservationDate}</li>`
            returnToDOM += `<li>Table Reservation?: ${table.reservation}</li>`
            returnToDOM += `<li>Order Appetizer: ${order.appetizer}</li>`
            returnToDOM += `<li>Order Entree: ${order.entree}</li>`
            returnToDOM += `<li>Order Dessert: ${order.dessert}</li>`
            returnToDOM += `<li>Order Drink: ${order.drink}</li>`
            returnToDOM += `</ul>`
        }    
    }
}
returnToDOM += `</section>`

document.querySelector('.ethan').innerHTML = returnToDOM