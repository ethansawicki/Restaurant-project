import { menuCopy, tablesCopy, serversCopy } from "./database.js"

const render = () => {
    let tableOrders = []
    const menus = menuCopy().filter(menu => {if(menu.type === "dinner"){return tableOrders.push(menu.menuItem)}})
    const tables = tablesCopy().filter(table => {if(table.serverId === 3){return table}})
    const servers = serversCopy().filter(server => {if(server.id === 3){return server}})
    const appElement = document.querySelector('#ethan')
    let renderToHTML = `<section class="ethan-section">`
    for (const server of servers) {
        for (const table of tables) {
            for(const menu of tableOrders){
                if(server.id === table.serverId) {
                    renderToHTML += `<ul class="ethan-list">`
                    renderToHTML += `<h3 class="ethan-table">Table: ${table.id}</h3>`
                    renderToHTML += `<li>Party Of: ${table.guestsNumber}</li>`
                    renderToHTML += `<li>Table Reservation Date: ${Date()}</li>`
                    renderToHTML += `<li>Table Reservation?: ${table.reservation}</li>`
                    renderToHTML += `<li>Order Entree(s):${menu}</li>`
                    renderToHTML += `<li>Server: ${server.serverName}</li>`
                    renderToHTML += `<li>Tip: ${table.tipPercent.toFixed(2)}%`
                    renderToHTML += `</ul>`
                }
            }        
        }
    }
    renderToHTML += `</section>`
    console.log(tableOrders)
    return appElement.innerHTML = renderToHTML
}

render()
