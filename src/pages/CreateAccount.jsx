import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate("/account-setting");
    };

    return (
        <div className='flex flex-col gap-10 px-2 pt-2'>
            <div>
           <h2 className='text-2xl font-semibold'>Create your popX account</h2>
            </div>
            <form onSubmit={onSubmitHandler} className='relative flex w-full flex-col gap-4'>

                <div className='relative w-full'>
                    <label className='text-purple-500 absolute top-[-20%] left-[10%] bg-white' htmlFor='fullname'>Full Name</label>
                    <input className='border w-full py-3 px-4' type='text' placeholder='Enter full name' id='fullname' required />
                </div>

                <div className='relative w-full'>
                    <label className='text-purple-500 absolute top-[-20%] left-[10%] bg-white' htmlFor='phone'>Phone Number</label>
                    <input className='border w-full py-3 px-4' type='tel' placeholder='Enter phone number' id='phone' required />
                </div>

                <div className='relative w-full'>
                    <label className='text-purple-500 absolute top-[-20%] left-[10%] bg-white' htmlFor='email'>Email Address</label>
                    <input className='border w-full py-3 px-4' type='email' placeholder='Enter email address' id='email' required />
                </div>

                <div className='relative w-full'>
                    <label className='text-purple-500 absolute top-[-20%] left-[10%] bg-white' htmlFor='password'>Password</label>
                    <input className='border w-full py-3 px-4' type='password' placeholder='Enter password' id='password' required />
                </div>

                <div className='relative w-full'>
                    <label className='text-purple-500 absolute top-[-20%] left-[10%] bg-white' htmlFor='company'>Company Name</label>
                    <input className='border w-full py-3 px-4' type='text' placeholder='Enter company name' id='company' />
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-gray-700'>Are you an agency?</p>
                    <div className='flex gap-6'>
                        <label className='flex items-center gap-2'>
                            <input type='radio' name='agency' value='yes' required />
                            Yes
                        </label>
                        <label className='flex items-center gap-2'>
                            <input type='radio' name='agency' value='no' />
                            No
                        </label>
                    </div>
                </div>

                <button onSubmit={onSubmitHandler} type='submit' className='absolute -bottom-[40%] bg-purple-600 w-full text-white font-semibold py-3 text-xl rounded-md'>
                    Create Account
                </button>

            </form>
        </div>
    );
};

export default CreateAccount;
