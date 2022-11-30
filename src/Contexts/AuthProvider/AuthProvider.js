import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // google login
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

    // update profile Name
    const handleProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser);
            console.log(user);
            setLoading(false);
        })
        return () => {
            return unsubscribe()
        }
    }, [{user, loading}])

    const authInfo = {
        login,
        googleLogin,
        logOut,
        user,
        createUser,
        loading,
        handleProfile,

    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    )
};

export default AuthProvider;