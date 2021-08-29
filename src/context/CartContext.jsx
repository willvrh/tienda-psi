import { createContext } from "react";


export const CartContext = createContext({
    items: [],
    addItem: (item, quantity) => { }, 
    removeItem: (itemId) => { },
    clear: () => { },
    isInCart: (id) => { }
});

export const DefaultCartTemplate = {
    items: []
}

//CART LOGIC
DefaultCartTemplate.addItem = (item, quantity) => {
    DefaultCartTemplate.items = [...DefaultCartTemplate.items, { item: item, quantity: quantity}];
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
