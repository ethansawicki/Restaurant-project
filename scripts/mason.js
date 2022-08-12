const parties = [
    {
        table: 13,
        id: 1,
        Reservation: true,
        ReservationDate: '8 / 7 / 2022',
        ReservationTime: '08:00 pm',
        WaiterName: 'Mason',
        Meal: 'dinner',
        HighChairs: false,
        guestsNumber: 2,
        Water: ['with ice', 'no ice with lemon'],
        Drink: ['dr. pepper'],
        AlcoholDrink: false,
        SoupSalad: ['salad', 'salad'],
        Entree: ['salmon', 'cheesburger'],
        notes: 'no cheese on burger',
        Desert: ['apple pie', 'cake'],
        OrderStatus: 'IN PROGRESS',
        Price: 40.13,
        TipPercent: 0.15
    },
    {
        table: 14,
        id: 2,
        Reservation: false,
        ReservationDate: 'N/A',
        ReservationTime: 'N/A',
        WaiterName: 'Mason',
        Meal: 'Lunch',
        HighChairs: false,
        guestsNumber: 1,
        Water: ['with extra extra ice'],
        Drink: ['rum and coke'],
        AlcoholDrink: true,
        SoupSalad: ['soup'],
        Entree: ['cheesburger'],
        notes: 'sub fries for tots',
        Desert: ['none'],
        OrderStatus: 'READY',
        Price: 21.50,
        TipPercent: 0.4
    },
    {
        table: 15,
        id: 3,
        Reservation: true,
        ReservationDate: '8 / 7 / 2022',
        ReservationTime: '07:30 pm',
        WaiterName: 'Mason',
        Meal: 'Dinner',
        HighChairs: true,
        guestsNumber: 4,
        Water: ['with ice', 'with ice', 'no ice', 'no ice'],
        Drink: ['dr. pepper', 'sweet tea', 'miller high life'],
        AlcoholDrink: true,
        SoupSalad: ['salad', 'salad', 'soup'],
        Entree: ['chicken sandwich', 'cheesburger', 'grilled cheese', 'kids chicken tenders'],
        notes: 'no cheese on grilled cheese',
        Desert: ['cake', 'cake'],
        OrderStatus: 'SERVED',
        Price: 75.64,
        TipPercent: 0.01
    },
];

// TABLE INFO
let mason = '';
for (const party of parties) {
    mason += `\n<fieldset class="masonTable">\n\t<legend class="masonLegend">Table_${party.table}</legend>\n\t<ul class="masonList">`;
    for (const info in party) {
        if (info !== 'table' && info !== 'id') {
            mason += `\n\t\t<li>${info}: <span class="masonValue">${party[info]}</span></li>`
        }
    };
    mason += '\n\t</ul>\n</fieldset>'
};

document.getElementById('mason').innerHTML = mason;
console.log(mason);

// TIPS
let tipsTotal = 0;
for (const party of parties) {
    tipsTotal += party.Price * party.TipPercent;
};

document.getElementById('masonTips').innerHTML = `Total in Tips: <span class="masonTipsValue">$${tipsTotal.toFixed(2)}</span>`;
console.log(tipsTotal);