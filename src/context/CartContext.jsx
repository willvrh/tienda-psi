import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    addItem: (item, quantity) => { }, 
    removeItem: (itemId) => { },
    clear: () => { },
    isInCart: (id) => { },
    getItemCount: () => {},
    getCartAmount: () => {}
});


export const DefaultCartTemplate = {
    items: []
}

//CART LOGIC
DefaultCartTemplate.addItem = (item, quantity) => {
    if (!DefaultCartTemplate.isInCart(item.id)) {
        DefaultCartTemplate.items = [...DefaultCartTemplate.items, { item: item, quantity: quantity}];
    }
}

DefaultCartTemplate.removeItem = (id) => {
    DefaultCartTemplate.items = DefaultCartTemplate.items.filter(function (obj) {
        return obj.item.id != id;
    });
}

DefaultCartTemplate.clear = () => {
    DefaultCartTemplate.items = [];
}

DefaultCartTemplate.isInCart = (id) => {
    return DefaultCartTemplate.items.filter(function (item) {
        return item.item.id == id;
     }).length>0;
}

DefaultCartTemplate.getItemCount = () => {
    let count = 0;

    DefaultCartTemplate.items.map( item => {
        count += item.quantity;
    });

    return count;
}

DefaultCartTemplate.getCartAmount = () => {
    let amount = 0;

    DefaultCartTemplate.items.map( item => {
        amount += item.quantity*item.item.price;
    });

    return amount;
}
