import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios, { Axios } from "axios";
import useAxiosUrl from "../Hook/useAxiosUrl";






const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loder, setLoder]= useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosUrl = useAxiosUrl();

    // console.log('Auth',user);
    // Email & Password to created account

    const userCreate =(email, password)=>{
        setLoder(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sing in to email & Password....

    const singIn =(email, password)=>{
        setLoder(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
// Logout ........
    const logOut =()=>{
        setLoder(true);
        return signOut(auth);
    }
    const passwordRestor = email =>{
        setLoder(true);
        return sendPasswordResetEmail(auth,email);
    }
    const googleSingup = ()=>{
        setLoder(true);
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUsere =>{
            const usermail = currentUsere?.email || user?.email;
            const emailUser = {userEmail : usermail};
            setUser(currentUsere);
            console.log('currntUser',currentUsere );
            if (currentUsere) {
                axiosUrl.post('/jwt',emailUser)
                .then(res=> console.log('helo token ', res.data))
            }
            else{
                // axios.post ('http://localhost:5000/logout',emailUser, {withCredentials:true} )
                // .then(res => {
                //     console.log('logout token ', res.data)
                // })
                axiosUrl.post('/logout', emailUser, {
                    withCredentials: true
                } )
                .then(res => console.log('logout token ', res.data))
            }
            setLoder(false);
        });
        return ()=>{unsubscribe();} 
    },[])

    // Export EveryWhere
    const authInfo ={
        user,
        loder,
        userCreate,
        singIn,
        logOut,
        passwordRestor,
        googleSingup,
       
    };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node,
}
export default AuthProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext(null);