import UserDashBoard from '../Layout/UserDashBoard';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const UserRoute = () => {
    const user = useSelector(state => state.auth.user)
    const location = useLocation()
    if(!user){
        return <Navigate to='/auth' state={{from: location}} replace />
    }
    return (
        <div>
            <UserDashBoard />
        </div>
    )
};

export default UserRoute;