// Signin.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);

    function Button({ value, onClick, style }) {
        return (
            <button
                onClick={onClick}
                className={`mt-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer ${style}`}>
                {value}
            </button>
        );
    }

    function handleClick() {
        // alert("Username: " + username + " Password: " + password);
        navigate("/Profile", { state: { mydata: username } });
    }

    const handleUsernameChange = (e) => {
        setCheck1(true);
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setCheck1(false);
        setPassword(e.target.value);
        setCheck2(true);
    };

    function Input({ type, id, name, label, placeholder, autofocus, value, onChange }) {
        return (
            <label className="text-gray-500 block mt-3">{label}
                <input
                    autoFocus={autofocus}
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100" />
            </label>
        );
    }

    return (
        <div className="bg-gray-200 flex justify-center items-center h-screen w-screen" style={{ backgroundImage: 'url("https://source.unsplash.com/1920x1080/?background")', backgroundSize: 'cover' }}>
            <div className=" border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
                <h1 className="font-bold text-center block text-2xl">Register Your Account</h1>
                <form>
                    <Input type="text" value={username} onChange={e => handleUsernameChange(e)} id="username" name="username" label="Username" placeholder="Jane" autofocus={check1} />
                    <Input type="password" value={password} onChange={e => handlePasswordChange(e)} id="password" name="password" label="Password" placeholder="••••••••••" autofocus={check2} />
                    <Button value="Next" onClick={handleClick} style="bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg" />
                </form>
            </div>
        </div>
    );
}

export default Signup;
