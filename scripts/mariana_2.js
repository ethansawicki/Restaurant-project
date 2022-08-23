//.// /*--------------------Restaurant_2 Test_1------------ ---*/
//menuID= [4, 5,6, 11],

//const display_Table = () => {
//     const tables = tablesCopy();

//     for (let i = 0; i < menu.length; i++) {
//         let item = menu.find((item) => item.id === tables[1].menuID);
//         let MarianaTable = ``;

//         MarianaTable += `<fieldset class=table>
//         <legend>Table_${tables[1].id} </legend>
//         <ul>`;
//         MarianaTable += `
// <li class="list">id: ${tables[1].id}</li>
// <li class="list">menuID: ${tables[1].menuID}</li>
// <li class="list">menuType: ${tables[1].menuType}</li> 
// <li class="list">reservation: ${tables[1].reservation}</li>
// <li class="list">orderStatus: ${tables[1].orderStatus}</li>
// <li class="list">serverId: ${tables[1].serverId}</li>
// <li class="list">guestsNumber: ${tables[1].guestsNumber}</li>
// <li class="list">tipPercent: ${tables[1].tipPercent} %</li>`;
//         MarianaTable += `</ul>
// </fieldset>`;

//         document.getElementById("mariana").innerHTML = MarianaTable;
//     }
// //};

// display_Table();

/*
/* const htmlString = `<h1 class="h1">I am from JS</h1>
 
`
document.getElementById('mariana').innerHTML = htmlString 
 
const htmlString2 = '<h2>I am from JS2</h2>'
document.getElementById('table_1').innerHTML = htmlString2 */

/*const firstAuthor = authors[0].firstName
document.getElementById('mariana').innerHTML = `<h1>${firstAuthor}</h1>`

let htmlAuthors = '<ul>'
for(const author of authors) {
  console.log(author)
  htmlAuthors = `<li>${author.firstName}</li>`
}
htmlAuthors += '</ul>'

document.getElementById('mariana').innerHTML = htmlAuthors */

/*---------------------------------------------------------------- Table_6--- */
/*  let table_6 = {
    Reservation: true,
    id: 4,
    Reservation_Date: 8 / 6 / 2022,
    Reservation_Time: "08:00 pm",
    Waiter_Name: "Tommy",
    Meal: "Dinner",
    High_Chairs: true,
    guests_Number: 4,
    Soup_Salad: true,
    alcohol_Drink: false,
    Entree: "Chicken",
    Desert: "Apple Pie",
    Water: "Sparkling",
    Order_Status: "Progress",
};  */

/* class Table{
        constructor(
                Reservation,
                id /* ,
                Reservation_Date,
                Reservation_Time,
                Waiter_Name,
                Meal,
                High_Chairs,
                guests_Number,
                Soup_Salad,
                alcohol_Drink,
                Entree,
                Desert,
                Water,
                Order_Status,  
        ) {
                this.Reservation = Reservation;
                this.id=id
                
        }
}*/
/*const Table_66 = new Table(
        true,
        4 ,
        "8 / 6 / 2022",
        "08:00 pm",
        "Tommy",
        "Dinner",
        true,
        4,
        true,
        false,
        "Chicken",
        "Apple Pie",
        "Sparkling",
        "Progress", 
); */
//console.log(Table_6);

/*`${Table_66.Reservation}`

document.getElementById("Table_6").innerHTML = Table_66; */
/*---------------------------------------------------------------NAV_BAR- THis One Works ---*/
/*
const navElement = document.createElement("nav");
const nameUList = document.createElement("ul");
const name_List = document.createElement("li");
const ethan = document.createTextNode("Ethan");
const mariana = document.createTextNode("Mariana");
const chase = document.createTextNode("Chase");
const jimmy = document.createTextNode("Jimmy");
const mason = document.createTextNode("Mason");

navElement.appendChild(nameUList);
nameUList.appendChild(name_List);
name_List.appendChild(ethan);
name_List.appendChild(mariana);
name_List.appendChild(chase);
name_List.appendChild(jimmy);
name_List.appendChild(mason);
*/
/*---------------------------------------------------------------BORDER- THis One Works ---*/
/*---------------------------------------------------------------FOOTER- THis One Works ---*/

/*---------------------------------------------------------------Table_4- THis One Works ---*/
/*
let table_4 = {
    reservation: true,
    id: 4,
    reservationDate: "8 / 7 / 2022",
    reservationTime: "08:00 pm",
    waiterName: "Tommy",
    meal: "Dinner",
    highChairs: true,
    guestsNumber: 4,
    soupSalad: true,
    alcoholDrink: false,
    Entree: "Chicken",
    Desert: "Apple Pie",
    Water: "Sparkling",
    OrderStatus: "Progress",
};
const table = [
    `<fieldset class="table">
            <legend>Table_4</legend>
    <ul class="list">
        <li>Reservation : ${table_4.reservation}</li>
        <li>id : ${table_4.id}</li>
        <li>Reservation Date : ${table_4.reservationDate}</li>
        <li>Reservation Time : ${table_4.reservationTime}</li>
        <li>Waiter Name : ${table_4.waiterName}</li>
        <li>Meal : ${table_4.meal}</li>
        <li>High Chairs : ${table_4.highChairs}</li>
        <li>guests Number : ${table_4.guestsNumber}</li>
        <li>Soup Salad : ${table_4.soupSalad}</li>
        <li>Alcohol Drink : ${table_4.alcoholDrink}</li>
        <li>Entree : ${table_4.meal}</li>
        <li>Desert : ${table_4.Desert}</li>
        <li>Water : ${table_4.Water}</li>
        <li>Order Status : ${table_4.OrderStatus}</li>
    </ul>
        </fieldset>`,
];
document.getElementById("Table_4").innerHTML = table;
*/
/*---------------------------------------------------------------Table_5- THis One Works ---*/
/*
let table_5 = {
    Reservation: false,
    id: 5,
    "Reservation Date": "8 / 6 / 2022",
    "Reservation Time": "05:00 pm",
    "Waiter Name": "Elma",
    Meal: "Lunch",
    "High Chairs": false,
    "Guests Number": 2,
    "Soup Salad": true,
    "Alcohol Drink": true,
    Entree: "Stake",
    Desert: "Ice Cream",
    Water: "Sparkling",
    "Order Status": "Progress",
};

let Table_5_list = "<fieldset class=table><legend>Table_5</legend> <ul>";
for (const item in table_5) {
    Table_5_list += `<li class =list>${item} : ${table_5[item]}</li>`;
}
Table_5_list += "</ul> </ fieldset>";

document.getElementById("Table_5").innerHTML = Table_5_list;
*/
/*---------------------------------------------------------------Table_6- THis One Works ---*/
/*
const Table_6 = [
    `<fieldset class="table">
      <legend>Table_6</legend>
         <ul class="list">
            <li>Reservation : true</li>
            <li>id : 6</li>
            <li>Reservation Date : 8 / 8 / 2022</li>
            <li>Reservation Time : 09:00 pm</li>
            <li>Waiter Name : Hal</li>
            <li>Meal : Dinner</li>
            <li>High Chairs : false</li>
            <li>guests Number : 8</li>
            <li>Soup Salad : true</li>
            <li>Alcohol Drink : true</li>
            <li>Entree : Fish</li>
            <li>Desert : Jelly</li>
            <li>Water : Sparkling</li>
            <li>Order Status : Completed</li>
        </ul>
    </fieldset>`,
];
document.getElementById("Table_6").innerHTML = Table_6;
*/
/*---------------------------------------------------------------Footer- THis One Works ---*/
//1-create footerElement
//let footerElement = document.createElement("Footer");

//2-add text content to the footer

/*------------------------------------------Table_4   Table_5   Table_6- THis One Works ---*/
/*const item_price = {
    ////Reservation: false,
    //id: 6,
    //"Reservation Date": "8 / 6 / 2022",
    //"Reservation Time": "07:00 pm",
    //"Waiter Name": "Elma",
    //Meal: "Lunch",
    //"High Chairs": false,
    //"Guests Number": 2,
    Soup_Salad: 4.99,
    Alcohol_Drink: 20.77,
    Chicken: 9.99,
    Ice_Cream: 5.99,
    //Water: "Sparkling",
    //"Order Status": "Completed",
};

/* console.log(`${item_price.Chicken}`); */
/*
let Soup_Salad = `${item_price.Chicken}`;
let Alcohol_Drink = `${item_price.Alcohol_Drink}`;
let Chicken = `${item_price.Chicken}`;
let Ice_Cream = `${item_price.Chicken}`;
const tables = [
    {
        Reservation: false,
        id: 4,
        "Reservation Date": "8 / 6 / 2022",
        "Reservation Time": "05:00 pm",
        "Waiter Name": "Elma",
        Meal: "Lunch",
        "High Chairs": false,
        "Guests Number": 2,
        "Soup Salad": true,
        "Alcohol Drink": true,
        Entree: "Stake",
        Desert: "Ice Cream",
        Water: "Sparkling",
        "Order Status": "Progress",
        Price: 1.25,
    },
    {
        Reservation: false,
        id: 5,
        "Reservation Date": "8 / 6 / 2022",
        "Reservation Time": "06:00 pm",
        "Waiter Name": "Elma",
        Meal: "dinner",
        "High Chairs": false,
        "Guests Number": 2,
        "Soup Salad": true,
        "Alcohol Drink": true,
        Entree: "Fish",
        Desert: "Ice Cream",
        Water: "Sparkling",
        "Order Status": "Progress",
        Price: 1.3,
    },
    {
        Reservation: false,
        id: 6,
        "Reservation Date": "8 / 6 / 2022",
        "Reservation Time": "07:00 pm",
        "Waiter Name": "Elma",
        Meal: "Lunch",
        "High Chairs": false,
        "Guests Number": 2,
        "Soup Salad": true,
        "Alcohol Drink": true,
        Entree : [{Chicken:8.88}],
        Desert: Ice_Cream,
        Water: "Sparkling",
        "Order Status": "Completed",
        Price: 1.4,
    },
];
let price = 0
price = Object.values(tables[2].Entree[0]);
//console.log(Object.values(tables[2].Entree[0]));
console.log(price);*/

const tables = [
    {
        Reservation: false,
        id: 4,
        Reservation_Date: "8 / 6 / 2022",
        Reservation_Time: "05:00 pm",
        Waiter_Name: "Elma",
        Meal: "Lunch",
        High_Chairs: false,
        Guests_Number: 2,
        Soup_Salad: true,
        Alcohol_Drink: true,
        Entree: "Stake",
        Desert: "Ice Cream1",
        Water: "Sparkling",
        Order_Status: "Progress",
        Price: 44.0,
    },
    {
        Reservation: false,
        id: 5,
        Reservation_Date: "8 / 6 / 2022",
        Reservation_Time: "06:00 pm",
        Waiter_Name: "Elma",
        Meal: "Lunch",
        High_Chairs: false,
        Guests_Number: 2,
        Soup_Salad: true,
        Alcohol_Drink: true,
        Entree: "Fish",
        Desert: "Ice Cream2",
        Water: "Sparkling",
        Order_Status: "Progress",
        Price: 55.0,
    },
    {
        Reservation: false,
        id: 6,
        Reservation_Date: "8 / 6 / 2022",
        Reservation_Time: "07:00 pm",
        Waiter_Name: "Elma",
        Meal: "Lunch",
        High_Chairs: false,
        Guests_Number: 2,
        Soup_Salad: true,
        Alcohol_Drink: true,
        Entree: "Chicken",
        Desert: "Ice Cream3",
        Water: "Sparkling",
        Order_Status: "Completed",
        Price: 66.0,
    },
];
/* let tables456 = ` `;
for (let table of tables) {
    tables456 += `<fieldset class=table><legend>Table_${table.id} </legend> <ul>`;
    for (const row in table) {
        tables456 += `<li class =list>${row} : ${table[row]}</li>`;
    }
    tables456 += `</ul>  </fieldset>`;
} */

/*---------------------------------------------------------------Add New Table- THis One Works ---*/

// const newTable = {
//     Reservation: false,
//     id: "New_Table",
//     Reservation_Date: "8 / 6 / 2022",
//     Reservation_Time: "05:00 pm",
//     Waiter_Name: "Elma",
//     Meal: "Lunch",
//     High_Chairs: false,
//     Guests_Number: 2,
//     Soup_Salad: true,
//     Alcohol_Drink: true,
//     Entree: "Stake",
//     Desert: "Ice Cream1",
//     Water: "Sparkling",
//     Order_Status: "Progress",
//     Price: 58.0,
// };

//New table
// for (const nTable of tables) {
//     for (const row in nTable) {
//         if (nTable[row] == "Completed") {
//             tables.push(newTable);
//             nTable == newTable;
//         }
//         //console.log(nTable[row]);
//     }
// }
//console.log(tables);
// let totalPrice = 0;
// let tips = 0;
// for (const pTable of tables) {
//     totalPrice += pTable.Price;
//     tips = Math.round(totalPrice * 0.02);
//}
//console.log(totalPrice);
//console.log(tips);

//console.log(tables[0].Entree);
/*----------------------------------------HTML_Preview-Price THis One Works ---*/
//let table_4_price = tables[0].Price;
//table_4_price = 0;
// for (const table of tables) {
//     console.log(table[1]);
// }

//console.log(tables[0].Entree);
/*----------------------------------------HTML_Preview-Price THis One Works ---*/

const display_Table = () => {
    let MarianaTable = ` `;
    for (x in tables[1]) {
        MarianaTable += `
        <fieldset class=table>
    <legend>Table_${tables[1].id} </legend>
        <ul>
        <li class =list>${x}</li>
        </ul>
    </fieldset>`;
        console.log(x);
    }
    document.getElementById("mariana_2").innerHTML = MarianaTable;
};
display_Table();
