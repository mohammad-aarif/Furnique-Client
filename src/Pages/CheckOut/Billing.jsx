import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Billing = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleBillingData = (data) => {
        localStorage.setItem('billing', JSON.stringify(data));
        navigate("/check-out/payment");
    };

    const handleCheckBox = (e) => {
        const data = JSON.parse(localStorage.getItem('shipping'));

        if (e.target.checked && data) {
            setValue("name", data.name || "");
            setValue("email", data.email || "");
            setValue("phone", data.phone || "");
            setValue("address", data.address || "");
        } else {
            setValue("name", "");
            setValue("email", "");
            setValue("phone", "");
            setValue("address", "");
        }
    };

    return (
        <div>
            <h1 className='p-2 my-4 font-bold'>Billing</h1>
            <div className='flex items-center my-4'>
                <input className='address-check-box' onChange={handleCheckBox} type="checkbox" />
                <label htmlFor="sameAsShipping">Same as shipping</label>
            </div>

            <form onSubmit={handleSubmit(handleBillingData)} className="space-y-4">

                <input
                    {...register('name', { required: "Name is required" })}
                    placeholder="Enter Your Name"
                    className="w-full border p-2"
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}

                <input
                    {...register('email', {
                        required: "E-mail is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email format"
                        }
                    })}
                    placeholder="Enter Your Email"
                    className="w-full border p-2"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

                <input
                    {...register('phone', {
                        required: "Phone is required",
                        pattern: {
                            value: /^(?:\+8801|01)[3-9]\d{8}$/,
                            message: "Invalid Phone Number"
                        }
                    })}
                    placeholder="Enter Your Phone Number"
                    className="w-full border p-2"
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}

                <input
                    {...register('address', { required: "Full Address is required" })}
                    placeholder="Enter Your Address"
                    className="w-full border p-2"
                />
                {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}

                <div className='flex justify-end space-x-3 mt-4'>
                    <button type="button" className='bg-gray-400 px-4 py-2 rounded-md'>Previous</button>
                    <button type="submit" className='bg-amber-400 px-4 py-2 rounded-md'>Next</button>
                </div>
            </form>
        </div>
    );
};

export default Billing;
