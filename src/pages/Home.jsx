import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()

    const onClickHandler = (e) => {
        navigate("/login")
    }
    return (
        <div className="relative min-h-screen bg-white">
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Welcome to PopX</h2>
                <p className="text-gray-600">Hello guys, welcome to PopX</p>
                <button className="bg-purple-500 text-white font-semibold py-2 rounded-lg">
                    Create Account
                </button>
                <button onClick={onClickHandler} className="bg-purple-200 font-semibold py-2 rounded-lg">
                    Already Registered? Login
                </button>
            </div>
        </div>
    );
}

export default Home;
