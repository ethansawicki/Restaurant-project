import { menuCopy, tablesCopy, serversCopy } from "./database.js"

//is there a way to render the options without pushing to a new array?
const ordersFunction = () => {
    const orders = []
    const menus = menuCopy().filter(menu => {if(menu.type === 'dinner'){return orders.push(menu.menuItem)}})
    return orders
}

const tablesFunction = () => {
    const tables = tablesCopy().filter(table => {if(table.serverId === 3){return table}})
    return tables
}

const serversFunction = () => {
    const servers = serversCopy().filter(server => {if(server.id === 3){return server}})
    return servers
}

const render = () => {
    const reservation = new Date(Date.now())
    const appElement = document.querySelector('#ethan')
    let renderToHTML = `<section class="ethan-section">`
    for (const server of serversFunction()) {
        for (const table of tablesFunction()) {
            if(server.id === table.serverId) {
                renderToHTML += `<ul class="ethan-list">`
                renderToHTML += `<h3 class="ethan-table">Table: ${table.id}</h3>`
                renderToHTML += `<li>Party Of: ${table.guestsNumber}</li>`
                renderToHTML += `<li>Table Reservation Date: ${reservation.toLocaleDateString('en-US')}</li>`
                renderToHTML += `<li>Table Reservation?: ${table.reservation}</li>`
                renderToHTML += `<li>Order Entree(s):${ordersFunction()}</li>`
                renderToHTML += `<li>Server: ${server.serverName}</li>`
                renderToHTML += `<li>Tip: ${table.tipPercent.toFixed(2)}%`
                renderToHTML += `</ul>`
            }        
        }
    }
    renderToHTML += `</section>`
    return appElement.innerHTML = renderToHTML
}

render()

// Need to see if theres a better way to do this
