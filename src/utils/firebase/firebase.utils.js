// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,
     createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged} from "firebase/auth";
import { getFirestore,doc,getDoc,setDoc,  collection,
    writeBatch,getDocs,query} from "firebase/firestore";

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

const googleProovider =new GoogleAuthProvider();

googleProovider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth();
export const signInWithGooglePopup = () =>signInWithPopup(auth,googleProovider);
export const signInWithGoogleRedirect = () =>signInWithRedirect(auth,googleProovider);

export const db=getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd,

  ) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);
    
    objectsToAdd.forEach((object) => {
       const docRef = doc(collectionRef, object.title.toLowerCase());
       batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
  };


export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
};



export const createUserDocumentFromAuth = async (userAuth,additionelInformation={})=>{
    if(!userAuth) return;

    const userDocRef=doc(db,'users',userAuth.uid);
    const userSnapshot =await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createAt = new Date();
        try{
            await  setDoc(userDocRef,{
                displayName,
                email,
                createAt,
                ...additionelInformation
            });
        }catch(error){}
    }
}


export const createAuthUserwithEmailAndPassword = async (email,password)=>{
    if(!email || !password ) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}


export const singAuthUserwithEmailAndPassword = async (email,password)=>{
    if(!email || !password ) return;
    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async ()=>signOut(auth);


export const onAuthStateChangedLisner = (callback) => onAuthStateChanged(auth,callback)