import { useEffect, useState } from "react";
import { firebaseApp } from "../../Firebase/firebase.config";
import useAxiosPublic from "../Axios/useAxiosPublic";
import { firebaseErrorMessage } from "../../Firebase/firebase.error";
import Swal from "sweetalert2";
import { redirect, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../../Redux/Reducer/userSlice";


const useAuth = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const axiosPublic = useAxiosPublic();

    const auth = getAuth(firebaseApp)
    const navigate = useNavigate()

    // Create User by email and Password 
    const createUser = (fullName, email, password, redirect) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // User Data send to database 
                const newUser = {
                    displayName: fullName,
                    email,
                    role : 'user'
                }
                axiosPublic.post('/users', newUser)
                .then(() => navigate(redirect, {replace:true}))
                .catch(err => setError(err.message))
            })
            .catch(err => setError(firebaseErrorMessage(err.code)))
    }

    // Sign in with Email and Password 
    const signInUser = (email, password, redirect) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            axiosPublic.get(`/users/user/${user?.user?.email}`)
                .then(({data}) => dispatch(setUser({
                    ...data,
                    photoURL: user?.user?.photoURL
                    }))
                )
                .then(() => navigate(redirect, {replace: true}))
                .catch(err => setError(err))
            setLoading(false)
        })
        .catch(err => setError(firebaseErrorMessage(err.code)))
    }

    // Sign in With Google
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = (redirect) =>{
        signInWithPopup(auth, googleProvider)
            .then(user => {
                // Data sent to Database 
                const newUser ={
                    displayName: user?.user?.displayName,
                    email: user?.user?.email,
                    role: 'user'
                }
                axiosPublic.post('/users', newUser)
                .then(res => {
                    // Data save to database if user not exist 
                    if(res.status === 201){
                       dispatch(setUser({
                        ...res.data,
                        photoURL: user?.user?.photoURL
                       }))
                    }
                    // Data Retrive from database if user exist 
                    else if(res.status === 200){
                        axiosPublic.get(`/users/user/${user?.user?.email}`)
                        .then(({data}) =>{
                            const userData = {
                                ...data,
                                photoURL: user?.user?.photoURL
                            }
                            dispatch(setUser(userData))
                        })
                        .catch(err => setError(err))
                    }
                })
                .then(() => navigate(redirect, {replace: true}))
                .catch(err => setError(firebaseErrorMessage(err.code)))
                setLoading(false)
            })
            .catch(err => setError(err.message))
    }

    // Sing Out User 
    const logOut = () => {
        return signOut(auth)
            .then(() =>{})
    }
    
    // Manage User Current State 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user =>{
            if(user){
                axiosPublic.get(`/users/user/${user.email}`)
                    .then(({data}) => {
                        const updatedUser = {
                            ...data,
                            photoURL: user.photoURL
                        };
                        dispatch(setUser(updatedUser))
                    })
                    .catch(() => dispatch(setUser(null)))
            }
            else{
                dispatch(removeUser())
            }
            setLoading(false)
        })
        return () => unsubscribe();
    },[auth, dispatch, axiosPublic])
    
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