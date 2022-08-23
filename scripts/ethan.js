import { menuCopy, tablesCopy, serversCopy } from "./database.js"

const render = () => {
    const menus = menuCopy().filter(menu => {if(menu.type === "dinner"){return menu}})
    const tables = tablesCopy().filter(table => {if(table.serverId === 3){return table}})
    const servers = serversCopy().filter(server => {if(server.id === 3){return server}})
    const appElement = document.querySelector('#ethan')
    let renderToHTML = `<section class="ethan-section">`
    for (const server of servers) {
        for (const table of tables) {
            for(const menu of menus) {
                if(table.menuType === menu.type) {
                    if (table.serverId === server.id) {
                        renderToHTML += `<ul class="ethan-list">`
                        renderToHTML += `<h3 class="ethan-table">Table: ${table.id}</h3>`
                        renderToHTML += `<li>Party Of: ${table.guestsNumber}</li>`
                        renderToHTML += `<li>Table Reservation Date: ${Date()}</li>`
                        renderToHTML += `<li>Table Reservation?: ${table.reservation}</li>`
                        renderToHTML += `<li>Order Entree(s):${table.menuID}</li>`
                        renderToHTML += `<li>Order Drink:</li>`
                        renderToHTML += `<li>Tip: ${table.tipPercent.toFixed(2)}%`
                        renderToHTML += `</ul>`
                    }
                }
            }
        }
    }
    renderToHTML += `</section>`
    console.log(menus, tables, servers)
    return appElement.innerHTML = renderToHTML
}

render()
