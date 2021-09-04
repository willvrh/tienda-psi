import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        setCart([...cart, { item: item, quantity: quantity}]);
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