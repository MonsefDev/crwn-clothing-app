import { useState, useEffect } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth ,singAuthUserwithEmailAndPassword} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sing-in.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SingInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    const [user, setUser] = useState(null);

    const resetFormFileds = () => {
        setFormFields(defaultFormFields);
    }

    const singInWithGoogle=async()=>{
        const {user} =await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    useEffect(() => {
        if (user) {
            resetFormFileds();
            console.log("response", user);
        }
    }, [user]);

    const handlSubmit = async (event) => {
        event.preventDefault();
 
        try {
            const { user } = await singAuthUserwithEmailAndPassword(email, password);
            setUser(user);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incoorect password')
                    break;
                case 'auth/user-not-found':
                    alert('no user for this email')
                    break;    
            
                default:
                    break;
            }

            console.log(error)
        }
    }
 
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div  className="sing-up-container">
            <h2>Already have an account??</h2>
            <span>sing up with your emain and password</span>
            <form onSubmit={handlSubmit}>
                <FormInput label='email' type="text" required onChange={handleChange} name="email" value={email} />
                <FormInput label='password' type="password" required onChange={handleChange} name="password" value={password} />
                <div className="button-container">
                <Button  type="submit">SingIn</Button>
                <Button type='button' buttonType='google' onClick={singInWithGoogle}>Google</Button>
                </div>
            </form>
        </div>
    );
}

export default SingInForm;
