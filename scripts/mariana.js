/*---------------------------------------------------------------NAV_BAR- THis One Works ---*/
let navbar =
`<section class="nav">
<ul class="navBar">
    <li class="navList">ETHAN</li>
    <li class="navList">MARIANA</li>
    <li class="navList">CHASE</li>
    <li class="navList">JIMMY</li>
    <li class="navList">MASON</li>
</ul>
</section>`
document.getElementById("navbar").innerHTML = navbar;

/*---------------------------------------------------------------LOGO- THis One Works ---*/
let logo = `<img class="img-logo" src="/img_Style/Logo.jpg" alt="restaurant Logo" />`
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
        "Reservation Date": "8 / 6 / 2022",
        "Reservation Time": "05:00 pm",
        "Waiter Name": "Elma",
        Meal: "Lunch",
        "High Chairs": false,
        "Guests Number": 2,
        "Soup Salad": true,
        "Alcohol Drink": true,
        Entree: "Stake",
        Desert: "Ice Cream1",
        Water: "Sparkling",
        "Order Status": "Progress",
    },
    {
        Reservation: false,
        id: 5,
        "Reservation Date": "8 / 6 / 2022",
        "Reservation Time": "06:00 pm",
        "Waiter Name": "Elma",
        Meal: "Lunch",
        "High Chairs": false,
        "Guests Number": 2,
        "Soup Salad": true,
        "Alcohol Drink": true,
        Entree: "Fish",
        Desert: "Ice Cream2",
        Water: "Sparkling",
        "Order Status": "Progress",
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
        Entree: "Chicken",
        Desert: "Ice Cream3",
        Water: "Sparkling",
        "Order Status": "Completed",
    },
];
let tables456 = ` `;
for (let table of tables) {
    tables456 += `<fieldset class=table><legend>Table_${table.id} </legend> <ul>`;
    for (const row in table) {
        tables456 += `<li class =list>${row} : ${table[row]}</li>`;
    }
    tables456 += `</ul>  </fieldset>`;
}
document.getElementById("mariana").innerHTML = tables456;

