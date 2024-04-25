import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils.js';

const SingIn=()=>{
    const logGoogleUser=async()=>{
        const {user} =await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);

    }
    return(
        <div>
        SingIn
        <button onClick={logGoogleUser}>SingIn with Google Popup</button>
    </div>)
}


export default SingIn;
