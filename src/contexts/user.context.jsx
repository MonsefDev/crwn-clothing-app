import { createContext, useState,useEffect} from "react";
import {onAuthStateChangedLisner,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';


export const UserContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null
})


export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser};
    useEffect(()=>{
        const unsubscrieb= onAuthStateChangedLisner((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        });
        return unsubscrieb;
      },[])
      

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}
