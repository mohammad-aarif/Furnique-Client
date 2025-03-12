import { useState } from "react";
import { firebaseApp } from "../../Firebase/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const useAuth = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(firebaseApp)
    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
            .then(user => setUser(user))
            .catch(err => console.log(err))
    }
    console.log(user);
    
    return {
        googleSignIn
    }
};

export default useAuth;