const tables = [
    {

        id: 1 ,
        menuID: [10, 10, 12, 5, 6, 6],
        menuType: "lunch",
        reservation: true,
        orderStatus: "IN PROGRESS",
        serverId: 1,
        guestsNumber: 3,
        tipPercent: 0.1

    },
    {
        id: 2,
        menuID: [2,3,7,5,11],
        menuType: "lunch",
        reservation: false ,
        orderStatus: "complete",
        serverId: 2,
        guestsNumber: 4,
        tipPercent: 0.2,
    },
    {
        id: 3,
        menuID: [7, 8, 9],
        drinkID: [11,11,11],
        menuType: "dinner",
        reservation: true,
        orderStatus: "complete",
        serverId: 3,
        guestsNumber: 3,
        tipPercent: 0.1,
    },
    {
        id: 4,
        menuID: [3, 11, 6, 11, 6, 11, 6, 11],
        menuType: "lunch",
        reservation: true,
        orderStatus: "complete",
        serverId: 4,
        guestsNumber: 4,
        tipPercent: 0.2,
    },
    {
        id: 5,
        menuID: [2, 1, 16],
        menuType: "Breakfast",
        reservation: true,
        orderStatus: "Complete",
        serverId: 5,
        guestsNumber: 1,
        tipPercent: 0.2
    },
    {
        id: 6,
        menuID: [0, 0, 0],
        menuType: "breakfast",
        reservation: true,
        orderStatus: "complete",
        serverId: 2,
        guestsNumber: 0,
        tipPercent: 0.2
    },
    {
        id: 7,
        menuID: [0, 0, 0],
        menuType: "breakfast",
        reservation: true,
        orderStatus: "complete",
        serverId: 2,
        guestsNumber: 0,
        tipPercent: 0.2
    },
    {
        id: 8,
        menuID: [11, 4],
        menuType: "lunch",
        reservation: false,
        orderStatus: "COMPLETE",
        serverId: 1,
        guestsNumber: 1,
        tipPercent: 0.25
    },
    {
        id: 9,
        menuID: [2, 10, 15, 4],
        menuType: "lunch",
        reservation: true,
        orderStatus: "complete",
        serverId: 4,
        guestsNumber: 2,
        tipPercent: 0.2
    },
    {
        id: 10,
        menuID: [0, 0, 0],
        menuType: "breakfast",
        reservation: true,
        orderStatus: "complete",
        serverId: 5,
        guestsNumber: 0,
        tipPercent: 0.2
    },
    {
        id: 11,
        menuID: [12, 14, 7, 7],
        menuType: "dinner",
        reservation: false,
        orderStatus: "IN PROGRESS",
        serverId: 1,
        guestsNumber: 2,
        tipPercent: 0.05
    },
    {
        id: 12,
        menuID: [0, 0, 0],
        menuType: "breakfast",
        reservation: false,
        orderStatus: "complete",
        serverId: 3,
        guestsNumber: 1,
        tipPercent: 0.15
    },
    {
        id: 13,
        menuID: [0, 0, 0],
        menuType: "breakfast",
        reservation: true,
        orderStatus: "complete",
        serverId: 5,
        guestsNumber: 0,
        tipPercent: 0.2
    },
    {
        id: 14,
        menuID: [0, 0, 0],
        menuType: "lunch",
        reservation: true,
        orderStatus: "complete",
        serverId: 3,
        guestsNumber: 2,
        tipPercent: 0.2
    },
    {
        id: 15,
        menuID: [13, 7, 13, 7, 13, 7, 13, 7],
        menuType: "dinner",
        reservation: true,
        orderStatus: "complete",
        serverId: 4,
        guestsNumber: 4,
        tipPercent: 0.2
    }
];

const menu = [
    {
        id: 1,
        type: "breakfast",
        menuItem: "Eggs Benedict",
        price: 30,
    },
    {
        id: 2,
        type: "breakfast",
        menuItem: "Crepes and Bacon",
        price: 25,
    },
    {
        id: 3,
        type: "breakfast",
        menuItem: "Sausage Biscuits and Gravy",
        price: 95,
    },
    {
        id: 4,
        type: "lunch",
        menuItem: "Cheeseburger",
        price: 5,
    },
    {
        id: 5,
        type: "lunch",
        menuItem: "Chicken Caesar Salad",
        price: 65,
    },
    {
        id: 6,
        type: "lunch",
        menuItem: "Grilled Steak",
        price: 400,
    },
    {
        id: 7,
        type: "dinner",
        menuItem: "Meat Loaf and Mashed Potatoes",
        price: 2,
    },
    {
        id: 8,
        type: "dinner",
        menuItem: "Salmon and Yellow Rice",
        price: 74,
    },
    {
        id: 9,
        type: "dinner",
        menuItem: "Chicken Teriyaki",
        price: 60,
    },
    {
        id: 10,
        type: "drink",
        menuItem: "Margarita",
        price: 150,
    },
    {
        id: 11,
        type: "drink",
        menuItem: "Water",
        price: 1000,
    },
    {
        id: 12,
        type: "drink",
        menuItem: "Buffalo Trace",
        price: 5,
    },
    {
        id: 13,
        type: "drink",
        menuItem: "Coors Light",
        price: 20,
    },
    {
        id: 14,
        type: "drink",
        menuItem: "Old Fashioned",
        price: 1,
    },
    {
        id: 15,
        type: "drink",
        menuItem: "Red Blend",
        price: 60,
    },

    {
        id: 16,
        type: "drink",
        menuItem: "Coffee",
        price: 5
    },   
];

const servers = [
    {
        id: 1,
        serverName: "Mason",
    },
    {
        id: 2,
        serverName: "Mariana",
    },
    {
        id: 3,
        serverName: "Ethan",
    },
    {
        id: 4,
        serverName: "Chase",
    },
    {
        id: 5,
        serverName: "Jimmy",
    },
];

export const tablesCopy = () => {
    return tables.map((table) => ({ ...table }));
};

export const menuCopy = () => {
    return menu.map((menuItem) => ({ ...menuItem }));
};

export const serversCopy = () => {
    return servers.map(server => ({...server}))
}


