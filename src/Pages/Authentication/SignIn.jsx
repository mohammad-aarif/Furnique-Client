import { Link, useLocation } from 'react-router-dom';
import GoogleSingInBtn from '../../Components/Buttons/GoogleSingInBtn';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/Auth/useAuth';

const SignIn = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm()
    const {signInUser, error} = useAuth();

    const location = useLocation();
    const redirect = location?.state?.from?.pathname || '/user'

    const handleSignInData = (data) => {
        signInUser(data.email, data.password, redirect)
        reset()
    }
    return (
        <div>
            <h2 className='text-5xl py-5 font-medium text-amber-400'>Welcome Back!</h2>
            <form onSubmit={handleSubmit(handleSignInData)} className='auth-form'>

            <div className="form-group">
                    <label>Email:</label>
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
                        placeholder="Enter Your Name" />
                    {errors.email && <p className="bg-red-100 w-4/5 p-2 text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        {...register('password',
                            {  
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                                  }
                            })}
                        type='password'
                        autoComplete="current-password"
                        placeholder="Enter Your Email" />
                    {error && <p className="bg-red-100 p-2 w-4/5 text-sm text-red-500">{error}</p>}
                    {errors.password && <p className="bg-red-100 p-2 w-4/5 text-sm text-red-500">{errors.password.message}</p>}
                </div>
                <input type="submit" value='Sign In' />
            </form>
            <GoogleSingInBtn redirect={redirect}/>
            <p className='py-2 text-gray-200 text-sm italic'>Don't Have an Account? <Link to='/auth/sign-up'>Sign Up</Link></p>
        </div>
    );
};

export default SignIn;