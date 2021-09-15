import { createContext, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { collection, deleteDoc, addDoc, doc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/FirebaseClient';

export const WishlistContext = createContext();

const WishlistContextProvider = ({children}) => {

    const authContext = useContext(AuthContext);
    const userID = authContext.auth.currentUser == null? null : authContext.auth.currentUser.uid;
    
    const clearWishlist = async () => {
        const filterQuery = query(collection(db, "wishlist"), where("uid", '==', userID));
        const wishDocsSnap = await getDocs(filterQuery);
        const result = wishDocsSnap.docs.map((doc) => {
            deleteItem(doc.id);
        });
        return result;
    }

    const deleteItem = async (wishItemId) => {
        const response = await deleteDoc(doc(db, "wishlist", wishItemId));
        return response;
    }

    const isFaved = async (itemId) => {
        const queryItem = query(collection(db, "wishlist"), where("uid", '==', userID), where("iid", '==', itemId));
        const itemReturnSnapshot = await getDocs(queryItem);
        const itemReturn = itemReturnSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

        const objReturn = {
            iid: itemReturn.length>0? itemReturn[0].id : '',
            faved: itemReturn.length>0? true : false
        }
        return objReturn;
    }

    const addItem = async (item) => {
        const queryItem = query(collection(db, "wishlist"), where("uid", '==', userID), where("iid", '==', item.id));
        const itemReturnSnapshot = await getDocs(queryItem);
        const itemReturn = itemReturnSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        if (itemReturn.length == 0) {
            const wishItem = {
                item: item,
                quantity: 1,
                uid: userID,
                iid: item.id
                };
        
            const wishReference = await addDoc(collection(db, "wishlist"), wishItem);
        }
        return itemReturn;
    }

  

    const contextValues = {
        addItem,
        deleteItem,
        clearWishlist,
        isFaved
    } 

    return ( 
        <WishlistContext.Provider value={contextValues} >
            { children }
        </WishlistContext.Provider>
     );
}
 
export default WishlistContextProvider;