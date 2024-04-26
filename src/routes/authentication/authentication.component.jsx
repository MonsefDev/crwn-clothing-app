import SingUpForm from '../../components/sign-up/sign-up.component.jsx';
import SingInForm from '../../components/sign-in/sign-in.component.jsx';
import './authentication.styles.scss';

const Authentication=()=>{
    return(
        <div className='authentication-continer'>
        <SingInForm />
        <SingUpForm />
    </div>)
}

export default Authentication;
