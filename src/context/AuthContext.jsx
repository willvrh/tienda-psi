import { createContext, useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    
    const [provider, setProvider] = useState(new GoogleAuthProvider());
    const [auth, setAuth] = useState(getAuth());
    const [user, setUser] = useState(null);

    console.log("user", user)
    useEffect(() => {
            auth.onAuthStateChanged(function(user) {
            setUser(user);
        });
    }, []);

    const getAuthObject = () => {
        return auth;
    }

    const isLoggedIn = () => {
        return user!=null;
    }

    const getUser = () => {
        return user;
    }

    const getUserDisplayName = () => {
        let displayName  = 'Invitado'
        auth.currentUser != null ? displayName = auth.currentUser.displayName : displayName = 'Invitado';
        return displayName;
    }

    const getEmail = () => {
        let email  = ''
        auth.currentUser != null ? email = auth.currentUser.email : email = '';
        return email;
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
        }).catch((error) => {
        });
    }

    const logoutGoogle = () => {
        signOut(auth).then(() => {
      }).catch((error) => {
      });
    }

    const contextValues = {
        auth,
        provider,
        isLoggedIn,
        getUser,
        loginWithGoogle,
        getUserDisplayName,
        getUserDisplayNameFirstLetters,
        getAuthObject,
        logoutGoogle,
        getEmail
        
    } 

    return ( 
        <AuthContext.Provider value={contextValues} >
            { children }
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;