const parties = [
    {
        table: 13,
        id: 1,
        Reservation: true,
        ReservationDate: '8 / 7 / 2022',
        ReservationTime: '08:00 pm',
        WaiterName: 'Sam',
        Meal: 'Dinner',
        HighChairs: true,
        guestsNumber: 2,
        SoupSalad: true,
        AlcoholDrink: false,
        Entree: 'Fish',
        Desert: 'Apple Pie',
        Water: 'With ice',
        OrderStatus: 'In progress'
    },
    {
        table: 14,
        id: 2,
        Reservation: true,
        ReservationDate: '8 / 7 / 2022',
        ReservationTime: '08:00 pm',
        WaiterName: 'Sam',
        Meal: 'Dinner',
        HighChairs: true,
        guestsNumber: 2,
        SoupSalad: true,
        AlcoholDrink: false,
        Entree: 'Fish',
        Desert: 'Apple Pie',
        Water: 'With ice',
        OrderStatus: 'In progress'
    },
];

let mason = '';
for (const party of parties) {
    mason += '\n<section>\n\t<ul>'
    for (const info in party) {
        mason += `\n\t\t<li>${info}: ${party[info]}</li>`
    }
    mason += '\n\t</ul>\n</section>'
};

document.getElementById('mason').innerHTML = mason;