const tables = [
    {   
        id: 10,
        
        Waiter: 'Jimmy',
        Reservation: true,
        Guests: 4,
        Drinks: ['water', 'water', 
        'coke', 'sweet tea'],
        Appetizers: ['eggrolls', 'edamame', 'wings'],
        Entrees: ['chicken and waffles', 'chicken noodle soup', 
        'chicken katsu', 'shoyu ramen'],
        Desserts: false
    },
        
    {   
        id: 11,
        
        Waiter: 'Jimmy',
        Reservation: false,
        Guests: 3,
        Drinks: ['water', 'unsweet tea', 'thai tea'],
        Appetizers: ['gyoza', 'queso con chorizo', 'fries'],
        Entrees: ['tacos al pastor', 'steak and potatos', 
        'wagyu crispy rice'],
        Dessert: ['caramel pie', 'mango sticky rice', 
        'tiramisu']
    },
    {   
        id: 12,
        
        Waiter: 'Jimmy',
        Reservation: false,
        Guests: 4,
        Drinks: ['gin and tonic', 'moscow mule', 
        'sapporo', 'bulleit bourbon neat'],
        Appetizer: false,
        Entrees: ['chicken alfredo', 'hot chicken', 
        'neapolitan pizza'],
        Dessert: false
    }

]


 /*
let jimtable = ``;
for (let table of tables) {
    jimtable += `<fieldset class=table><legend>Table_${table.id} </legend> <ul>`;
    for (const row in table) {
        table += `<li class =list>${row} : ${table[row]}</li>`;
    }
    jimtable += `</ul>  </fieldset>`;
}
document.getElementById("jimmy").innerHTML = jimtable;
*/



let jimmy = '';
for (const table of tables) {
    jimmy += `<fieldset class=table><legend class=nice>${table.id} </legend> <ul>`;
    for (const data in table) {
        jimmy += `\n\t\t<li class='list'>${data}: ${table[data]}</li>`
    }
    jimmy += '\n\t</ul>\n</fieldset>'
}

document.getElementById('jimmy').innerHTML = jimmy;
