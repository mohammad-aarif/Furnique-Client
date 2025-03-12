import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <h2 className='text-5xl py-5 font-medium text-amber-400'>Welcome Back!</h2>
            <form className='auth-form'>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter Your Email" />
                </div>

                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter Your Password" />
                </div>
                <input type="submit" name="password" value='Sign In' />
            </form>
            <button className='googleBtn'>Login with Google</button>
            <p className='py-2 text-gray-200 text-sm italic'>Don't Have an Account? <Link to='/auth/sign-up'>Sign Up</Link></p>
        </div>
    );
};

export default SignIn;