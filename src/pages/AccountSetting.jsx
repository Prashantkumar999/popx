import React from 'react';
import johnCena from '../assets/johnCena.webp'
import { FaCamera } from "react-icons/fa6";

const AccountSetting = () => {
    return (
        <div className='bg-gray-100'>
            <div className='bg-white py-5 px-3 font-md text-lg'>
                Account Settings
            </div>
            <div className='flex gap-5 pl-2 py-3'>
                <div className='relative'>
                    <img className='rounded-full h-20 w-20 object-cover' src={johnCena} />
                    <div className='absolute -right-2 bottom-[20%] bg-purple-500 p-1 rounded-full text-white'>
                    <FaCamera />
                    </div>
                </div>
                <div>
                    <p className='font-semibold'>John Cena</p>
                    <p>Johncena@gmail.com</p>
                </div>
            </div>
            <p className='px-2 py-2'>John Cena is a legendary professional wrestler, actor, and philanthropist. Known for his strength, charisma, and catchphrase "You can't see me," he has inspired millions worldwide through entertainment and kindness.
            </p>
        </div>
    );
}

export default AccountSetting;
