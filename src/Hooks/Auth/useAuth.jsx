import { useState } from "react";
import { firebaseApp } from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const auth = getAuth(firebaseApp)
    const googleProvider = new GoogleAuthProvider()

    // Create User by email and Password 
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => console.log(user))
            .catch(err => console.log(err))
    }

    // Sign in with Email and Password 
    const signInUser = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            setUser(user)
            setLoading(false)
        })
        .catch(err => setError(err))
    }

    // Sign in With Google 
    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
            .then(user => {
                setUser(user)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }
    
    return {
        createUser,
        signInUser,
        googleSignIn
    }
};

export default useAuth;