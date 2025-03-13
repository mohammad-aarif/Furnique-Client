import { useState } from "react";
import { firebaseApp } from "../../Firebase/firebase.config";
import useAxiosPublic from "../Axios/useAxiosPublic";
import { firebaseErrorMessage } from "../../Firebase/firebase.error";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth(firebaseApp)
    const navigate = useNavigate()

    // Create User by email and Password 
    const createUser = (fullName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                // User Data send to database 
                const newUser = {
                    fullName,
                    email,
                    role : 'user'
                }
                useAxiosPublic.post('/users', newUser)
                .then(res => {
                    // Confirmation and redirect to login page 
                    if(res.status === 200){
                        Swal.fire({
                            title: "Hurrah!",
                            text: "Your Account Register Successfully",
                            iconHtml: '<img src="/src/assets/check.gif">',
                            confirmButtonText: "Sign In",
                            color: '#fff',
                            customClass: {
                                popup: "popUp",
                                confirmButton: "popUp-btn",
                              },
                            }).then(response => {
                            response.isConfirmed ? navigate('/auth') : navigate('/auth')
                            });                        
                            setLoading(false)
                    }
                })
                .catch(err => setError(err.message))
            })
            .catch(err => setError(firebaseErrorMessage(err.code)))
    }

    // Sign in with Email and Password 
    const signInUser = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            setUser(user)
            setLoading(false)
        })
        .catch(err => setError(err.message))
    }

    // Sign in With Google
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
            .then(user => {
                setUser(user)
                setLoading(false)
            })
            .catch(err => setError(err.message))
    }
    console.log(loading);
    
    return {
        createUser,
        signInUser,
        googleSignIn,
        setLoading,
        error
    }
};

export default useAuth;