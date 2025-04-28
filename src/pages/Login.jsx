import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate("/account-setting");
    };

    return (
        <div className='flex flex-col gap-10 px-2 pt-2'>
            <div>
                <h2 className='text-2xl font-semibold'>Signin to your popX account</h2>
                <p>Sign-in to your account by entering your email and password</p>
            </div>
            <form onSubmit={onSubmitHandler} className='flex w-full flex-col gap-4'>
                <div className='relative w-full'>
                    <label className='text-purple-500 absolute top-[-20%] left-[10%] bg-white' htmlFor='email'>Email Address</label>
                    <input className='border w-full py-3 px-4' type='email' placeholder='Enter email address' id='email' required />
                </div>
                <div className='relative w-full'>
                    <label className='text-purple-500 absolute top-[-20%] left-[10%] bg-white' htmlFor='password'>Password</label>
                    <input className='border w-full py-3 px-4' type='password' placeholder='Enter your password' id='password' required />
                </div>
                <button type='submit' className='bg-gray-300 w-full text-white font-semibold py-3 text-xl rounded-md'>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
    