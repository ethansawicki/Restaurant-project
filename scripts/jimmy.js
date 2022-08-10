const tables = [
    {   
        id: 10,
        
        waiter: 'Jimmy',
        reservation: true,
        guestAmount: 4,
        drink: ['water', 'water', 
        'coke', 'sweet tea'],
        appetizer: ['eggrolls', 'edamame', 'wings'],
        entree: ['chicken and waffles', 'chicken noodle soup', 
        'chicken katsu', 'shoyu ramen'],
        dessert: false
    },
        
    {   
        id: 11,
        
        waiter: 'Jimmy',
        reservation: false,
        guestAmount: 3,
        drink: ['water', 'unsweet tea', 'thai tea'],
        appetizer: ['gyoza', 'queso con chorizo', 'fries'],
        entree: ['tacos al pastor', 'steak and potatos', 
        'wagyu crispy rice'],
        dessert: ['caramel pie', 'mango sticky rice', 
        'tiramisu']
    },
    {   
        id: 12,
        
        waiter: 'Jimmy',
        reservation: false,
        guestAmount: 4,
        drink: ['gin and tonic', 'moscow mule', 
        'sapporo', 'bulleit bourbon neat'],
        appetizer: false,
        entree: ['chicken alfredo', 'hot chicken', 
        'neapolitan pizza'],
        dessert: false
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
    jimmy += `<fieldset class=table><legend>Table ${table.id} </legend> <ul>`;
    for (const data in table) {
        jimmy += `\n\t\t<li class='list'>${data}: ${table[data]}</li>`
    }
    jimmy += '\n\t</ul>\n</fieldset>'
}

document.getElementById('jimmy').innerHTML = jimmy;
