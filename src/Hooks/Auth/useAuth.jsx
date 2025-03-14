import { useEffect, useState } from "react";
import { firebaseApp } from "../../Firebase/firebase.config";
import useAxiosPublic from "../Axios/useAxiosPublic";
import { firebaseErrorMessage } from "../../Firebase/firebase.error";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../../Redux/Reducer/userSlice";


const useAuth = () => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth(firebaseApp)
    const navigate = useNavigate()

    // Create User by email and Password 
    const createUser = (fullName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // User Data send to database 
                const newUser = {
                    displayName: fullName,
                    email,
                    role : 'user'
                }
                useAxiosPublic.post('/users', newUser)
                .then(res => {
                    // Confirmation and redirect to login page 
                    if(res.status === 201){
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
            useAxiosPublic.get(`/users/user/${user?.user?.email}`)
                .then(data => setUserData({
                    ...data.data,
                    photoURL: user?.user?.photoURL
                }))
                .catch(err => setError(err))
            setLoading(false)
        })
        .catch(err => setError(firebaseErrorMessage(err.code)))
    }

    // Sign in With Google
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
            .then(user => {
                // Data sent to Database 
                const newUser ={
                    displayName: user?.user?.displayName,
                    email: user?.user?.email,
                    role: 'user'
                }
                useAxiosPublic.post('/users', newUser)
                .then(res => {
                    // Data save to database if user not exist 
                    if(res.status === 201){
                       setUserData({
                        ...res.data,
                        photoURL: user?.user?.photoURL
                       }) 
                    }
                    // Data Retrive from database if user exist 
                    else if(res.status === 200){
                        console.log(user);                        
                        useAxiosPublic.get(`/users/user/${user?.user?.email}`)
                        .then(data => setUserData({
                            ...data.data,
                            photoURL: user?.user?.photoURL
                        }))
                        .catch(err => setError(err))
                    }
                })
                .catch(err => setError(firebaseErrorMessage(err.code)))
                // dispatch(setUser(...user))
                setLoading(false)
            })
            .catch(err => setError(err.message))
    }

    // Sing Out User 
    const logOut = () => {
        signOut(auth)
            .then(() =>{})
    }
    
    // Manage User Current State 
    useEffect(() => {
        onAuthStateChanged(auth, user =>{
            if(user){
                dispatch(setUser(userData))
            }
            else{
                dispatch(removeUser())
            }
        })
    },[userData, auth, dispatch])
    
    return {
        createUser,
        signInUser,
        googleSignIn,
        setLoading,
        error,
        logOut,
        loading
    }
};

export default useAuth;