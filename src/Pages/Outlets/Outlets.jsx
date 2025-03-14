import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './outlet.css'
import useAuth from "../../Hooks/Auth/useAuth";
const Outlets = () => {
    const {logOut} = useAuth()
    return (
        <div className="p-30">
            <button onClick={logOut}>hit</button>
        </div>
    );
};

export default Outlets;