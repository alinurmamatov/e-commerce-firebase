import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import * as firebaseApp from '../firebase/configFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [userMain, setUserMain] = useState(null);
    onAuthStateChanged(firebaseApp.auth, (createdUser) => {
        setUserMain(createdUser);
    })

    const signInWithEmailandPassword = async(email, password) => {
        try {
            const user = await createUserWithEmailAndPassword(firebaseApp.auth, email, password);
            //setUserMain(user);
        } catch(error) {
            console.log(error);
        }
    }

    const logOut = async() => {
        try {
            await signOut(firebaseApp.auth)
        } catch(error) {
            console.log(error);
        }
    }

    const loginWithEmail = async(email, password) => {
        try {
            const userLogin = await signInWithEmailAndPassword(firebaseApp.auth, email, password)
            //console.log(userLogin);
        } catch(error) {
            console.log(error);
        }
    }

    const data = {
        signInWithEmailandPassword: signInWithEmailandPassword,
        userMain: userMain,
        logOut: logOut,
        loginWithEmail: loginWithEmail
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;