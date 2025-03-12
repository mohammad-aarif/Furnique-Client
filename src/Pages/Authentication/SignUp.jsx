import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <h2 className='text-5xl py-5 font-medium text-amber-400'>Join Us Today!</h2>
            <form className='auth-form'>
                <div class="form-group">
                    <label for="name">Full Name:</label>
                    <input type="text" id="name" placeholder="Enter Your Name" />
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter Your Email" />
                </div>

                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter Your Password" />
                </div>
                <input type="submit" name="password" value='Sign Up' />
            </form>
            <button className='googleBtn'>Login with Google</button>
            <p className='py-2 text-gray-200 text-sm italic'>Already Have an Account? <Link to='/auth'>Sign In</Link></p>
        </div>
    );
};

export default SignUp;