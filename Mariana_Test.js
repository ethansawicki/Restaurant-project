const tables = [
    {
        //Reservation: false,
        //id: 4,
        //"Reservation Date": "8 / 6 / 2022",
        //"Reservation Time": "05:00 pm",
        //"Waiter Name": "Elma",
        //Meal: "Lunch",
        //"High Chairs": false,
        //"Guests Number": 2,
        //SoupSalad: true,
        //AlcoholDrink: true,
        Entree: "Stake",
        Desert: "Ice Cream",
        //Water: "Sparkling",
        //"Order Status": "Progress",
    },
];
for (let table of tables) {
    for (let item in table) {
           // console.log(item);
 let x= item
            if (x == Entree) {
                    console.log(100);
            }
    }
}
