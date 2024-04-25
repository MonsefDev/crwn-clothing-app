import {signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils.js';
import SingUpForm from '../../components/sign-up/sign-up.component.jsx';
const SingIn=()=>{

    const logGoogleUser=async()=>{
        const {user} =await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const logGoogleRedirect = async()=>{
        const {user} =await signInWithGoogleRedirect();
    }

    return(
        <div>
        SingIn
        <button onClick={logGoogleUser}>SingIn with Google Popup</button>
        <SingUpForm />
    </div>)
}

export default SingIn;
