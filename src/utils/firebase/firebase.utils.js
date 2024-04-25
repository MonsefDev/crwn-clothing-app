// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { getFirestore,doc,getDoc,setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsHGgGTApb_L443cGg-9r1Q6ZR6bFKvxo",
  authDomain: "crwn-db-e5caf.firebaseapp.com",
  projectId: "crwn-db-e5caf",
  storageBucket: "crwn-db-e5caf.appspot.com",
  messagingSenderId: "968458378748",
  appId: "1:968458378748:web:498181e6f353e167efe679"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const proovider =new GoogleAuthProvider();

proovider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();
export const signInWithGooglePopup = () =>signInWithPopup(auth,proovider);

export const db=getFirestore();
export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid)
    console.log(userDocRef)

    const userSnapshot =await getDoc(userDocRef);
    console.log(userSnapshot.exists())
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createAt = new Date();

        try{
            await  setDoc(userDocRef,{
                displayName,
                email,
                createAt
            });
        }catch(error){console.log('error',error.message)}
    }


}