import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate()
    const handleShippingData = (data) => {
        localStorage.setItem('shipping', JSON.stringify(data))
        navigate("billing")
    }

    return (
        <div>
            <h1 className='p-2 my-4 font-bold'>Shipping</h1>
            <form onSubmit={handleSubmit(handleShippingData)}>
                    
                    <input 
                        {...register('name',
                            {   required: "Name is required",
                            })
                        }
                        placeholder="Enter Your Name" />
                    {errors.name && <p className="bg-red-100 w-4/5 p-2 text-sm text-red-500">{errors.name.message}</p>}

                    <input 
                        {...register('email',
                            {   required: "E-mail is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email format"
                                }
                            })
                        }
                        placeholder="Enter Your Email" />
                    {errors.email && <p className="bg-red-100 w-4/5 p-2 text-sm text-red-500">{errors.email.message}</p>}


                    <input 
                        {...register('phone',
                            {   required: "Phone is required",
                                pattern: {
                                    value: /^(?:\+8801|01)[3-9]\d{8}$/,
                                    message: "Invalid Phone Number"
                                }
                            })
                        }
                        placeholder="Enter Your Phone Number" />
                    {errors.phone && <p className="bg-red-100 w-4/5 p-2 text-sm text-red-500">{errors.phone.message}</p>}
                    
                    <input 
                        {...register('address',
                            {   required: "Full Address is required",
                            })
                        }
                        placeholder="Enter Your Address" />
                    {errors.address && <p className="bg-red-100 w-4/5 p-2 text-sm text-red-500">{errors.address.message}</p>}
                <button type='submit'  className='bg-amber-400 rounded-md float-end'>Next</button>
                </form>
        </div>
    );
};

export default Shipping;