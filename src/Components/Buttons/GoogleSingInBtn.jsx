import useAuth from '../../Hooks/Auth/useAuth';
import './buttons.css'
const GoogleSingInBtn = ({redirect}) => {
    const {googleSignIn} = useAuth();
    return (
        <button onClick={() => googleSignIn(redirect)} className='googleBtn'>Login with Google</button>
    );
};

export default GoogleSingInBtn;