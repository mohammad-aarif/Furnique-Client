import useAuth from '../../Hooks/Auth/useAuth';
import './buttons.css'
const GoogleSingInBtn = () => {
    const {googleSignIn} = useAuth();
    return (
        <button onClick={googleSignIn} className='googleBtn'>Login with Google</button>
    );
};

export default GoogleSingInBtn;