import { useState, useEffect } from "react";
import { createAuthUserwithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sing-up.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SingUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const [user, setUser] = useState(null);

    const resetFormFileds = () => {
        setFormFields(defaultFormFields);
    }

    useEffect(() => {
        if (user) {
            resetFormFileds();
            console.log("response", user);
        }
    }, [user]);

    const handlSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }
        try {
            const { user } = await createAuthUserwithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            setUser(user);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('already exist')
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
            <h2>Don't have an account??</h2>
            <span>sing up with your emain and password</span>
            <form onSubmit={handlSubmit}>
                <FormInput label='DisplayName' type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label='email' type="text" required onChange={handleChange} name="email" value={email} />
                <FormInput label='password' type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput  label='confirmPassword' type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button  type="submit">SingUp</Button>
            </form>
        </div>
    );
}

export default SingUpForm;
