import { createContext, useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    
    const [provider, setProvider] = useState(new GoogleAuthProvider());
    const [auth, setAuth] = useState(getAuth());
    const [userLogged, setUserLogged] = useState(false);

    useEffect(() => {
        if (auth.currentUser != null) {
            setUserLogged(true);
        } else {
            setUserLogged(false);
        }
        
    }, [auth])

    const getAuthObject = () => {
        return auth;
    }

    const isUserLogged = () => {
        return auth.currentUser != null? true : false;
    }

    const getUser = () => {
        return auth.currentUser;
    }

    const getUserDisplayName = () => {
        let displayName  = 'Invitado'
        auth.currentUser != null ? displayName = auth.currentUser.displayName : displayName = 'Invitado';
        return displayName;
    }
    const getUserDisplayNameFirstLetters = () => {
        let letters  = '?'
        if (auth.currentUser != null) {
            let matches = auth.currentUser.displayName.match(/\b(\w)/g);
            letters = matches.join(''); // JSON
        } else {
            letters = '?';
        }
        
        return letters;
    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            setUserLogged(true);
        }).catch((error) => {
            setUserLogged(false);
        });
    }

    const logoutGoogle = () => {
        signOut(auth).then(() => {
            setUserLogged(false);
      }).catch((error) => {
      });
    }

    const contextValues = {
        auth,
        getUser,
        loginWithGoogle,
        getUserDisplayName,
        getUserDisplayNameFirstLetters,
        getAuthObject,
        logoutGoogle,
        userLogged,
        isUserLogged
    } 

    return ( 
        <AuthContext.Provider value={contextValues} >
            { children }
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;