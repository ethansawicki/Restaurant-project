/*---------------------------------------------------------------NAV_BAR- THis One Works ---*/
let navbar = `<section class="nav">
<ul class="navBar">
    <a href="#ethan"><li class="navList">ETHAN</li></a>
    <a href="#mariana"><li class="navList">MARIANA</li></a>
    <a href="#chase"><li class="navList">CHASE</li></a>
    <a href="#jimmy"><li class="navList">JIMMY</li></a>
    <a href="#mason"><li class="navList">MASON</li></a>
</ul>
</section>`;
document.getElementById("navbar").innerHTML = navbar;

/*---------------------------------------------------------------LOGO- THis One Works ---*/
let logo = `<img class="img-logo" src="/img_Style/Logo.jpg" alt="restaurant Logo" />`;
document.getElementById("logo").innerHTML = logo;
/*-----------------------------------------------------------Top BORDER- THis One Works ---*/

/* let topBorder =
``
document.getElementById("navbar").innerHTML = navbar;
 */

/*--------------------------------------------------------------- BORDER- THis One Works ---*/

/* let topBorder = document.createElement("div");
`<div class="border">
<h3 class="teamName">mason</h3>
</div>` */

/*---------------------------------------------------------------FOOTER- THis One Works ---*/

/* let footer = `<div></div>`
document.getElementById("footer").innerHTML = footer; */
/*--------------------------------------------------
//1-create footerElement
//let footerElement = document.createElement("Footer");

//2-add text content to the footer

/*------------------------------------------Table_4   Table_5   Table_6- THis One Works ---*/

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

let newTable = {
    Reservation: true,
    id: "New_Table",
    Reservation_Date: "8 / 11 / 2022",
    Reservation_Time: "05:00 pm",
    Waiter_Name: "Sara",
    Meal: "Dinner",
    High_Chairs: true,
    Guests_Number: 8,
    Soup_Salad: false,
    Alcohol_Drink: true,
    Entree: "Sea Food",
    Desert: "Apple Pie",
    Water: "Sparkling",
    Order_Status: "Progress",
    Price: 77.0,
};

for (const nTable of tables) {
    for (const row in nTable) {
        if (nTable[row] == "Completed") {
            tables.push(newTable);
        }
    }
}
console.log(tables);

/*---------------------------------------------------------------HTML_Preview- THis One Works ---*/

let tables456 = ` `;
for (let table of tables) {
    tables456 += `<fieldset class=table><legend>Table_${table.id} </legend> <ul>`;
    for (const row in table) {
        tables456 += `<li class =list>${row} : ${table[row]}</li>`;
    }
    tables456 += `</ul>  </fieldset>`;
}
document.getElementById("mariana").innerHTML = tables456;
