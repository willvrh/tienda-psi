import { createContext, useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { collection, addDoc, Timestamp, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/FirebaseClient';

export const WishlistContext = createContext();


const WishlistContextProvider = ({children}) => {

    const authContext = useContext(AuthContext);
    const [wishlistItems, setWishlistItems] = useState([]);

    const userID = authContext.auth.currentUser == null? null : authContext.auth.currentUser.uid;

    const getItems = async () => {
        const filterQuery = query(collection(db, "wishlist"), where("uid", '==', userID));
        const itemSnapshot = await getDocs(filterQuery);
        const itemList = itemSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        setWishlistItems(itemList);
    };

    useEffect(() => {
        getItems();
    }, []);

    
    const contextValues = {
        wishlistItems,
        getItems
    } 

    return ( 
        <WishlistContext.Provider value={contextValues} >
            { children }
        </WishlistContext.Provider>
     );
}
 
export default WishlistContextProvider;