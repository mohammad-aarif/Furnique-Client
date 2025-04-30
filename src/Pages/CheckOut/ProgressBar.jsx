import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineMapsHomeWork, MdOutlinePayments } from "react-icons/md";
const ProgressBar = () => {
    const progressActive = {
        background: '#f09',
    }
    return (
        <div className='py-4 flex items-center'>
            <div className="flex items-center">
                <FaShippingFast style={progressActive} className='text-4xl p-2 rounded-full progress-bg text-white' />
                <div style={progressActive} className="line progress-bg"></div>
            </div>
            <div className="flex items-center">
                <MdOutlineMapsHomeWork className='text-4xl p-2 rounded-full progress-bg text-white' />
                <div className="line progress-bg"></div>
            </div>
            <div className="flex items-center">
                <MdOutlinePayments className='text-4xl p-2 rounded-full progress-bg text-white' />
            </div>
        </div>
    );
};

export default ProgressBar;