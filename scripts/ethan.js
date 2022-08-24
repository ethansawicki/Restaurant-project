import { menuCopy, tablesCopy, serversCopy } from "./database.js"

//is there a better way to do this?
const dinnerFunction = () => {
    const orders = []
    const menus = menuCopy().filter(menu => {if(menu.type === 'dinner'){return orders.push(" " + menu.menuItem)}})
    return orders
}

const breakfastFunction = () => {
    const orders = []
    const menus = menuCopy().filter(menu => {if(menu.id === 3){return orders.push(" " + menu.menuItem)}})
    return orders
}

const lunchFunction = () => {
    const orders = []
    const menus = menuCopy().filter(menu => {if(menu.type === 'lunch'){return orders.push(" "+ menu.menuItem)}})
    orders.pop()
    return orders
}

const totalDinnerFunction = () => {
    const totalsArray = []
    const menus = menuCopy().filter(menu => {if(menu.type === 'dinner'){return totalsArray.push(menu.price)}})
    const total = totalsArray.reduce((total, order) => total + order, 0)
    return total
}

const totalBreakfastFunction = () => {
    const totalsArray = []
    const menus = menuCopy().filter(menu => {if(menu.id === 1){return totalsArray.push(menu.price)}})
    const total = totalsArray.reduce((total, order) => total + order, 0)
    return total
}

const totalLunchFunction = () => {
    const totalsArray = []
    const menus = menuCopy().filter(menu => {if(menu.type === 'lunch'){return totalsArray.push(menu.price)}})
    totalsArray.pop()
    const total = totalsArray.reduce((total, order) => total + order, 0)
    return total
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
    let reservation = ""
    const appElement = document.querySelector('#ethan')
    let renderToHTML = `<section class="ethan-section">`
    for (const server of serversFunction()) {
        for (const table of tablesFunction()) {
            if(server.id === table.serverId) {
                if(table.reservation === true) {
                    table.reservation = "yes"
                    reservation = new Date(Date.now()).toLocaleDateString('en-US')
                } else {
                    table.reservation = "No"
                    reservation = "N/A"
                }
                if(table.menuType === 'breakfast') {
                    renderToHTML += `<ul class="ethan-list">`
                    renderToHTML += `<h3 class="ethan-table">Table: ${table.id}</h3>`
                    renderToHTML += `<li>Party Of: ${table.guestsNumber}</li>`
                    renderToHTML += `<li>Table Reservation Date: ${reservation}</li>`
                    renderToHTML += `<li>Table Reservation?: ${table.reservation}</li>`
                    renderToHTML += `<li>Order Entree(s):${breakfastFunction()}</li>`
                    renderToHTML += `<li>Server: ${server.serverName}</li>`
                    renderToHTML += `<li>Total: $${totalBreakfastFunction()}</li>`
                    renderToHTML += `<li>Tip: ${table.tipPercent.toFixed(2) * 100}%`
                    renderToHTML += `</ul>`
                } if(table.menuType === "dinner") {
                    renderToHTML += `<ul class="ethan-list">`
                    renderToHTML += `<h3 class="ethan-table">Table: ${table.id}</h3>`
                    renderToHTML += `<li>Party Of: ${table.guestsNumber}</li>`
                    renderToHTML += `<li>Table Reservation Date: ${reservation}</li>`
                    renderToHTML += `<li>Table Reservation?: ${table.reservation}</li>`
                    renderToHTML += `<li>Order Entree(s):${dinnerFunction()}</li>`
                    renderToHTML += `<li>Server: ${server.serverName}</li>`
                    renderToHTML += `<li>Total: $${totalDinnerFunction()}</li>`
                    renderToHTML += `<li>Tip: ${table.tipPercent.toFixed(2) * 100}%`
                    renderToHTML += `</ul>`
                } if (table.menuType === 'lunch') {
                    renderToHTML += `<ul class="ethan-list">`
                    renderToHTML += `<h3 class="ethan-table">Table: ${table.id}</h3>`
                    renderToHTML += `<li>Party Of: ${table.guestsNumber}</li>`
                    renderToHTML += `<li>Table Reservation Date: ${reservation}</li>`
                    renderToHTML += `<li>Table Reservation?: ${table.reservation}</li>`
                    renderToHTML += `<li>Order Entree(s):${lunchFunction()}</li>`
                    renderToHTML += `<li>Server: ${server.serverName}</li>`
                    renderToHTML += `<li>Total: $${totalLunchFunction()}</li>`
                    renderToHTML += `<li>Tip: ${table.tipPercent.toFixed(2) * 100}%`
                    renderToHTML += `</ul>`
                }
            }        
        }
    }
    renderToHTML += `</section>`
    return appElement.innerHTML = renderToHTML
}
console.log(totalDinnerFunction())
render()

// Need to see if theres a better way to do this
