import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './outlet.css'
const Outlets = () => {
    const navigate = useNavigate()
    const swiie = () => {
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: "https://unsplash.it/400/200",
            imageWidth: 400,
            confirmButtonText: "Login Now",
            imageHeight: 200,
            imageAlt: "Custom image",
            customClass: {
                popup: "popUp", // Style the alert box
                confirmButton: "popUp-btn", // Style confirm button
              },
          }).then(response => {
            // response.isConfirmed ? navigate('/auth') : navigate('/auth/sign-up')
          }); 
    }
    return (
        <div className="p-30">
            <button onClick={swiie}>hit</button>
        </div>
    );
};

export default Outlets;