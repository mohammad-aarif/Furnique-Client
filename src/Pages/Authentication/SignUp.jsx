import { Link } from 'react-router-dom';
import GoogleSingInBtn from '../../Components/Buttons/GoogleSingInBtn';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/Auth/useAuth';

const SignUp = () => {
    const {handleSubmit, register, reset, formState: { errors }} = useForm()
    const {createUser} = useAuth()
    
    const handleSignUpData = (data) => {
        createUser(data.email, data.password)
        reset()
    }   
    return (
        <div>
            <h2 className='text-5xl py-5 font-medium text-amber-400'>Join Us Today!</h2>
            <form onSubmit={handleSubmit(handleSignUpData)} className='auth-form'>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input {...register('name', {required: "Name is required"})} placeholder="Enter Your Name" />
                    {errors.name && <p className="bg-red-100 p-2 w-4/5 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div className="form-group">
                    <label>E-mail:</label>
                    <input 
                        {...register('email',
                            {   required: "E-mail is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email format"
                                }
                            })
                        } 
                        autoComplete='username'
                        placeholder="Enter Your Email" />
                    {errors.email && <p className="bg-red-100 p-2 w-4/5 text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        {...register('password',
                            {  
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Password must be at least 8 characters long and include 1 letter & 1 number"
                                  }
                            })}
                        type="password"
                        autoComplete="new-password"
                        placeholder="Enter Your Password" />
                        {errors.password && <p className="bg-red-100 w-4/5 p-2 text-sm text-red-500">{errors.password.message}</p>}
                </div>


                <input type="submit" name="password" value='Sign Up' />
            </form>
            <GoogleSingInBtn />
            <p className='py-2 text-gray-200 text-sm italic'>Already Have an Account? <Link to='/auth'>Sign In</Link></p>
        </div>
    );
};

export default SignUp;