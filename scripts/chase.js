const chasesTables = [
   {
    id: 1, 
    table: 13,
    reservation: false,
    Time: "12:00pm",
    menuType: "Lunch",
    totalGuestAmount: 4,
    highChairs: true,
    serverName: "Chase",
    soupOrSalad: true,
    entree: ["Fish", "Chicken", "Beef", "Vegetarian"],
    beef: ["Rare", "Med-Rare", "Well"],
    drinkFromBar: false,
    water: "Sparkling",
    desert: ["Cheesecake", "Choco-Molton Cake", "Creme brulee"],
    orderStatus: "In-Progress"
   },
   {
    id: 2, 
    table: 14,
    reservation: true,
    Time: "7:00pm",
    menuType: "Dinner",
    totalGuestAmount: 2,
    highChairs: false,
    serverName: "Chase",
    soupOrSalad: true,
    entree: ["Fish", "Chicken", "Beef", "Vegetarian"],
    beef: ["Rare", "Med-Rare", "Well"],
    drinkFromBar: true,
    water: "Still",
    desert: ["Cheesecake", "Choco-Molton Cake", "Creme brulee"],
    orderStatus: "Completed"
   },
   {
    id: 3, 
    table: 15,
    reservation: false,
    Time: "8:00pm",
    menuType: "Dinner",
    totalGuestAmount: 4,
    highChairs: false,
    serverName: "Chase",
    soupOrSalad: false,
    entree: ["Fish", "Chicken", "Beef", "Vegetarian"],
    beef: ["Rare", "Med-Rare", "Well"],
    drinkFromBar: true,
    water: "Sparkling",
    desert: ["Cheesecake", "Choco-Molton Cake", "Creme brulee"],
    orderStatus: "Completed"
   }
]


for (const chase of chasesTables){
    console.log(chase);
}
document.getElementById("chase").innerHTML = chase.menuType