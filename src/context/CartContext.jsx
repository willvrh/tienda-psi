import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart([...cart, { item: item, quantity: quantity}]);
        } else {
            cart.map( itemX => {
                if (itemX.item.id == item.id) {
                    itemX.quantity += quantity;
                    if (itemX.quantity>itemX.item.stock) {
                        itemX.quantity = itemX.item.stock;
                    }
                }
            });
            setCart([...cart]);
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(function (obj) {
            return obj.item.id != id;
        }));
    }

    const getItemCount = () => {
        let count = 0;
        cart.map( item => {
            count += item.quantity;
        });
        return count;
    }

    const getCartAmount = () => {
        let amount = 0;
        cart.map( item => {
            amount += item.item.price * item.quantity;
        });
        return amount;
    }


    const isInCart = (id) => {
        return cart.filter(function (item) {
            return item.item.id == id;
         }).length>0;
    }

    const clear = () => {
        setCart([]);
    }

    const contextValues = {
        addItem,
        removeItem,
        getItemCount,
        clear,
        isInCart,
        getCartAmount,
        cart
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;