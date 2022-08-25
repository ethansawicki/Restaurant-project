import { tablesCopy } from "./database.js";
const tables = tablesCopy();
import { menuCopy } from "./database.js";
const menu = menuCopy();
import { serversCopy } from "./database.js";
const servers = serversCopy();

// /*----------------------------------------------------------NAV_BAR- THis One Works!! ---*/
const displayNavBar = () => {
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
};
displayNavBar();
//.
//.
//.
// /*-------------------------------------------------------------LOGO- THis One Works ---*/
const displayLogo = () => {
    let logo = `<img class="img-logo" src="/img_Style/Logo.jpg" alt="restaurant Logo" />`;
    document.getElementById("logo").innerHTML = logo;
};
displayLogo();
//.
//.
//.
/* ---------------------------------TEST ------------------------------------ */
//.
/* -------------------RESTAURANT-PART-2------TABLES[2,6,7]-------------------- */
const display_Table = () => {
    let newTables = tables.filter((table) => table.serverId === 2);
    let MarianaTable = ``;
    let meals = ``;
    let prices = 0;
    let tips = 0;
    let totalPrices = 0;
    let totalTips = 0;
    for (let table of newTables) {
        for (let item of table.menuID) {
            let meal = menu.find((meal) => meal.id === item);
            meals += `<br><span> -${meal.menuItem}: $${meal.price}</span>`;
            prices += meal.price;
            tips = prices * 0.2;
            /* -----------reservation------------ */
            let message = ``;
            if (table.reservation) {
                message = `<br><span> - Reservations have been made.</span>`;
            } else {
                message = `<br><span> - No reservations have been made.</span>`;
            }
            /* -----------server------------ */
            let serverM = servers.find(
                (serverM) => serverM.id === table.serverId
            );
            /* -----------server------------ */

            let date = new Date(Date.now()).toLocaleDateString();
            let time = new Date(Date.now()).toLocaleTimeString();
            MarianaTable = ``;
            MarianaTable += `<fieldset class=table>
        <legend>Table_${table.id} </legend>
        <ul>`;
            MarianaTable += `
            <li class="list">TABLE ID: ${table.id}</li>
            <li class="list">DATE: ${date}  </li>
            <li class="list">TIME: ${time}  </li>
        <li class="list">ORDERS: ${meals}  </li>
        <li class="list">MEAL: ${table.menuType} </li>
        <li class="list">RESERVATION: ${message}</li>
        <li class="list">ORDER STATUS: ${table.orderStatus}</li>
        <li class="list">SERVER: ${serverM.serverName}</li>
        <li class="list">GUSTS NUMBER: ${table.guestsNumber}</li>
        <li class="list">TOTAL/TIPS:
        <br> -TIPS : $${tips} (2%) <br> - TOTAL before tips : $${prices} <br> - TOTAL after tips : $${
                prices + tips
            }
        </li>`;
            MarianaTable += `
        </ul></fieldset>`;
        }
        document.getElementById("mariana").innerHTML += MarianaTable;
        /* -----------Tips------------ */
        totalPrices += prices;
        totalTips += tips;
        //prices = `<div>Total Price: <b> $${prices}</b> && Tips: <b> $${tips}</b> </div>`;
        prices = `<div>TOTAL AMOUNT:<b>${totalPrices} </b>&& TOTAL TIPS:<b>  $${totalTips} </b> </div>`;
        document.getElementById("mPrices").innerHTML = prices;
        /* -----------Tips------------ */
        meals = ``;
        prices = 0;
        tips = 0;
    }
};
display_Table();
/* --------------------------------------------------------------------- */
//.
//.
//.
// /* ---------------RESTAURANT-PART-2------TABLES[2,6,7]---------------------- */
// let newTables = tables.filter((table) => table.serverId === 2);
// let MarianaTable = ``;
// let meals = ``;
// let prices = 0;
// let tips = 0;
// for (let table of newTables) {
//     for (let item of table.menuID) {
//         let meal = menu.find((meal) => meal.id === item);
//         meals += `<br><span> - ${meal.menuItem} $${meal.price}</span>`;
//         prices += meal.price;
//         tips = prices * 0.2;
//         /* -----------reservation------------ */
//         let message = ``;
//         if (table.reservation) {
//             message = `<br><span> - Reservations have been made.</span>`;
//         } else {
//             message = `<br><span> - No reservations have been made.</span>`;
//         }
//         /* -----------server------------ */
//         let serverM = servers.find((serverM) => serverM.id === table.serverId);
//         /* -----------server------------ */
//         MarianaTable = ``;
//         MarianaTable += `<fieldset class=table>
//         <legend>Table_${table.id} </legend>
//         <ul>`;
//         MarianaTable += `
//         <li class="list">TABLE ID: ${table.id}</li>
//         <li class="list">ORDERS: ${meals} </li>
//         <li class="list">MEAL: ${table.menuType} </li>
//         <li class="list">RESERVATION: ${message}</li>
//         <li class="list">ORDER STATUS: ${table.orderStatus}</li>
//         <li class="list">SERVER: ${serverM.serverName}</li>
//         <li class="list">GUSTS NUMBER: ${table.guestsNumber}</li>
//         <li class="list">TOTAL/TIPS:
//         <br> -TIPS : $${tips} (2%) <br> - TOTAL before tips : $${prices} <br> - TOTAL after tips : $${
//             prices + tips
//         }
//         </li>`;
//         MarianaTable += `
//         </ul></fieldset>`;
//     }
//     /* -----------Tips------------ */
//     document.getElementById("mariana").innerHTML += MarianaTable;
//     prices = `/<div>Total_Price:<b>$${prices}</b> && Tips:<b>$${tips } </b> </div>`;
//     document.getElementById("mPrices").innerHTML += prices;
//         meals = ``;
//     prices = 0;
//     tips = 0;
// }

// //.// /*----------Table_2----------Restaurant_2 Test_2  more orders--------Works!!!!---- ---*/
// const display_Table = () => {
//     for (let i = 0; i < menu.length; i++) {
//         /* -----------orders/price------------ */
//         let meals = "";
//         let prices = 0;
//         let tips = 0;
//         for (let x of tables[1].menuID) {
//             let item = menu.find((y) => y.id === x);
//             meals += `<br><span> - ${item.menuItem} $${item.price}</span>`;
//             prices += item.price;
//             tips = prices * 0.2;
//         }
//         /* -----------orders/price------------ */

//         /* -----------order_status------------ */

//         //(object.hasOwnProperty(property)

//         // for (const nTable of tables) {
//         //     for (const row in nTable) {
//         //         if (nTable[row] == "Completed") {
//         //             tables.push(newTables);
//         //         }
//         //     }
//         // }
//         /* -----------reservation------------ */

//         let message = ``;
//         if (tables[1].reservation) {
//             message = `<br><span> - Reservations have been made.</span>`;
//         } else {
//             message = `<br><span> - No reservations have been made.</span>`;
//         }
//         // /* -----------reservation------------ */

//         /* -----------server------------ */
//         let serverM = servers.find(
//             (serverM) => serverM.id === tables[1].serverId
//         );
//         /* -----------server------------ */

//         let MarianaTable = ``;

//         MarianaTable += `
//         <fieldset class=table>
//         <legend>Table_${tables[1].id} </legend>
//         <ul>`;
//         MarianaTable += `
//     <li class="list">TABLE ID: ${tables[1].id}</li>
//     <li class="list">ORDERS: ${meals} </li>
//     <li class="list">MEAL: ${tables[1].menuType} </li>
//     <li class="list">RESERVATION: ${message}</li>
//     <li class="list">ORDER STATUS: ${tables[1].orderStatus}</li>
//     <li class="list">SERVER: ${serverM.serverName}</li>
//     <li class="list">GUSTS NUMBER: ${tables[1].guestsNumber}</li>
//     <li class="list">TOTAL/TIPS:
//     <br> -TIPS : $${tips} (2%) <br> - TOTAL before tips : $${prices} <br> - TOTAL after tips : $${
//             prices + tips
//         }
//     </li>`;
//         MarianaTable += `
//         </ul></fieldset>`;
//         document.getElementById("mariana").innerHTML = MarianaTable;

//         /* -----------Tips------------ */
//         prices = `<div>Total Price: <b> $${prices}</b> && Tips: <b> $${tips}</b> </div>`;
//         document.getElementById("mPrices").innerHTML = prices;
//     }
// };

// display_Table();
// /* ----------------Restaurant_Part_1----------------------- */
// // /*----------------------------------------------------------NAV_BAR- THis One Works!! ---*/
// let navbar = `<section class="nav">
// <ul class="navBar">
//     <a href="#ethan"><li class="navList">ETHAN</li></a>
//     <a href="#mariana"><li class="navList">MARIANA</li></a>
//     <a href="#chase"><li class="navList">CHASE</li></a>
//     <a href="#jimmy"><li class="navList">JIMMY</li></a>
//     <a href="#mason"><li class="navList">MASON</li></a>
// </ul>
// </section>`;
// document.getElementById("navbar").innerHTML = navbar;

// // /*---------------------------------------------------------------LOGO- THis One Works ---*/
// let logo = `<img class="img-logo" src="/img_Style/Logo.jpg" alt="restaurant Logo" />`;
// document.getElementById("logo").innerHTML = logo;

/*-------------------------------------------------------Top BORDER- THis One in progress ---*/

/* let topBorder =
``
document.getElementById("navbar").innerHTML = navbar;
 */

// /*--------------------------------------------------------------- BORDER- THis One Works ---*/

// /* let topBorder = document.createElement("div");
// `<div class="border">
// <h3 class="teamName">mariana</h3>
// </div>` */

// /*---------------------------------------------------------------FOOTER- THis One Works ---*/

// /* let footer = `<div></div>`
// document.getElementById("footer").innerHTML = footer; */
// /*--------------------------------------------------
// //1-create footerElement
// //let footerElement = document.createElement("Footer");

// //2-add text content to the footer

// /*------------------------------------------Table_4   Table_5   Table_6- THis One Works ---*/

// const tables = [
//     {
//         Reservation: false,
//         id: 4,
//         Reservation_Date: "8 / 6 / 2022",
//         Reservation_Time: "05:00 pm",
//         Waiter_Name: "Elma",
//         Meal: "Lunch",
//         High_Chairs: false,
//         Guests_Number: 7,
//         Soup_Salad: true,
//         Alcohol_Drink: true,
//         Entree: "Stake",
//         Desert: "Ice Cream1",
//         Water: "Sparkling",
//         Order_Status: "Progress",
//         Price: 320.99,
//     },
//     {
//         Reservation: false,
//         id: 5,
//         Reservation_Date: "8 / 6 / 2022",
//         Reservation_Time: "06:00 pm",
//         Waiter_Name: "Elma",
//         Meal: "Lunch",
//         High_Chairs: false,
//         Guests_Number: 5,
//         Soup_Salad: true,
//         Alcohol_Drink: true,
//         Entree: "Fish",
//         Desert: "Ice Cream2",
//         Water: "Sparkling",
//         Order_Status: "Progress",
//         Price: 125.75,
//     },
//     {
//         Reservation: false,
//         id: 6,
//         Reservation_Date: "8 / 6 / 2022",
//         Reservation_Time: "07:00 pm",
//         Waiter_Name: "Elma",
//         Meal: "Lunch",
//         High_Chairs: false,
//         Guests_Number: 2,
//         Soup_Salad: true,
//         Alcohol_Drink: true,
//         Entree: "Chicken",
//         Desert: "Ice Cream3",
//         Water: "Sparkling",
//         Order_Status: "Completed",
//         Price: 110.59,
//     },
// ];
// /* let MarianaTable = ` `;
// for (let table of tables) {
//     MarianaTable += `<fieldset class=table><legend>Table_${table.id} </legend> <ul>`;
//     for (const row in table) {
//         MarianaTable += `<li class =list>${row} : ${table[row]}</li>`;
//     }
//     MarianaTable += `</ul>  </fieldset>`;
// } */

// /*---------------------------------------------------------------Add New Table- THis One Works ---*/

// let newTable = {
//     Reservation: true,
//     id: "New_Table",
//     Reservation_Date: "8 / 11 / 2022",
//     Reservation_Time: "05:00 pm",
//     Waiter_Name: "Sara",
//     Meal: "Dinner",
//     High_Chairs: true,
//     Guests_Number: 8,
//     Soup_Salad: false,
//     Alcohol_Drink: true,
//     Entree: "Sea Food",
//     Desert: "Apple Pie",
//     Water: "Sparkling",
//     Order_Status: "Progress",
//     Price: 256.99,
// };

// for (const nTable of tables) {
//     for (const row in nTable) {
//         if (nTable[row] == "Completed") {
//             tables.push(newTable);
//         }
//     }
// }
// //console.log(tables);

// /*---------------------------------------------------------------FOOD_PRICE- THis One Works ---*/

// let Total_Price = ``;
// let totalPrice = 0;
// let tips = 0;
// for (const pTable of tables) {
//     totalPrice += Math.round(pTable.Price);
//     tips = Math.round(totalPrice * 0.02);
// }

// /*--------------------------------------------------------HTML_Preview-Price THis One Works ---*/

// //console.log(totalPrice);
// //console.log(tips);
// Total_Price = `<div>Total Price is $${totalPrice}.00 && Tips $${tips}.00 </div>`;
// document.getElementById("mPrices").innerHTML = Total_Price;
// /*---------------------------------------------------------HTML_Preview-Tables THis One Works ---*/

// let MarianaTable = ` `;
// for (let table of tables) {
//     MarianaTable += `<fieldset class=table><legend>Table_${table.id} </legend> <ul>`;
//     for (const row in table) {
//         MarianaTable += `<li class =list>${row} : ${table[row]}</li>`;
//     }
//     MarianaTable += `</ul>  </fieldset>`;
// }
// document.getElementById("mariana").innerHTML = MarianaTable;

// /*--------------------------------------------HTML_Preview-Price THis One is on progress ---*/
// /* let table_4_price = tables[0].Price;
// table_4_price = 0;
// for (const meal of tables[0]) {
//     switch (meal) {
//         case meal.Alcohol_Drink:
//             break;

//         default:
//             break;
//     }
// }
//  */

// //document.getElementById("mPrice").innerHTML = totalPrice;
//.//.//.
//.
//.
//.
//.
//.
//.
/* -------------------RESTAURANT-PART-2------TABLES[2,6,7]---------------------- */
//let newTables = tables.filter(table => table.serverId === 2);

// /*-------------Table_2-------Restaurant_2 Test_1-------Works!!!!----- ---*/
// const display_Table = () => {
//     let MarianaTable = ` `;
//     MarianaTable = `<fieldset class=table>
//     <legend>Table_${tables[1].id} </legend>
//     <ul>`;
//     for (let x in tables[1]) {
//         MarianaTable += `<li class =list>${x}:${tables[1][x]}</li> `;
//     }
//     `</ul>
//     </fieldset>`;
//     document.getElementById("mariana").innerHTML = MarianaTable;
// };
// display_Table();

//.// /*------------Table_2--------Restaurant_2 Test_2-------Works!!!!----- ---*/
// const display_Table = () => {
//     const tables = tablesCopy();
//     let MarianaTable = ``;
//     MarianaTable = `<fieldset class=table>
//      <legend>Table_${tables[1].id} </legend>
//      <ul>`;
//     Object.entries(tables[1]).forEach(
//         ([key, value]) =>
//             (MarianaTable += `<li class="list">${key} : ${value}</li>`)
//     );
//     `</ul>
//      </fieldset>`;
//     document.getElementById("mariana").innerHTML = MarianaTable;
// };

// display_Table();

// //.// /*----------Table_2----------Restaurant_2 Test_1-one_order-------Works!!!!---- ---*/
// const display_Table = () => {
//     for (let i = 0; i < menu.length; i++) {
//         let itemM = menu.find((itemM) => itemM.id === tables[1].menuID);
//         let serverM = servers.find(
//             (serverM) => serverM.id === tables[1].serverId
//         );
//         let totalPrices = menu.find(
//             (priceItemM) => priceItemM.id === tables[1].menuID
//         );
//         totalPrices = totalPrices.price;
//         let tips = totalPrices * 0.2;
//         let MarianaTable = ``;
//         MarianaTable += `
//         <fieldset class=table>
//         <legend>Table_${tables[1].id} </legend>
//         <ul>`;
//         MarianaTable += `
//     <li class="list">id: ${tables[1].id}</li>
//     <li class="list">menuID: ${itemM.menuItem} $${totalPrices}</li>
//     <li class="list">menuType: ${tables[1].menuType}</li>
//     <li class="list">reservation: ${tables[1].reservation}</li>
//     <li class="list">orderStatus: ${tables[1].orderStatus}</li>
//     <li class="list">serverId: ${serverM.serverName}</li>
//     <li class="list">guestsNumber: ${tables[1].guestsNumber}</li>
//     <li class="list">tipPercent: $${tips}.00    (2%)</li>`;
//         MarianaTable += `
//         </ul></fieldset>`;
//         //let xTips = `<div">Total Price: $${totalPrices}.00 && Tips: $${tips}.00</div>`;
//         /* -----------Tips------------ */
//         //document.getElementById("mPrices").innerHTML = xTips;
//         document.getElementById("mariana").innerHTML = MarianaTable;
//     }
// };
// display_Table();
