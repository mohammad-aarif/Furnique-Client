import './authentication.css'
import { Outlet } from 'react-router-dom';

const Authentication = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="auth-container">
                <div className="auth">
                    <Outlet /> 
                </div>
            </div>
        </div>
    );
};

export default Authentication;