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
         8 / 6 / 2022,
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

/*---------------------------------------------------------------BORDER- THis One Works ---*/
/*---------------------------------------------------------------FOOTER- THis One Works ---*/







/*---------------------------------------------------------------Table_4- THis One Works ---*/
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
const tables = [
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
document.getElementById("Table_4").innerHTML = tables;

/*---------------------------------------------------------------Table_5- THis One Works ---*/
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

/*---------------------------------------------------------------Table_6- THis One Works ---*/
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

/*---------------------------------------------------------------Footer- THis One Works ---*/
//1-create footerElement
//let footerElement = document.createElement("Footer");

//2-add text content to the footer 