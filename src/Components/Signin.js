// Signin.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { getDatabase, ref, get } from "firebase/database";
import { onValue } from "firebase/database";
import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";

function Signin() {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);


    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)

    function Button({ value, onClick, style }) {
        return (
            <button
                onClick={onClick}
                className={`mt-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer ${style}`}>
                {value}
            </button>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userRef = ref(db, 'users/' + username);
            const snapshot = await get(userRef);
            if (snapshot.exists()) {
                handleClick();
            } else {
                handleCreateAccountClick();
            }
        } catch (error) {
            alert(error.message);
        }
    };
    // alert(username)


    const handleusernameChange = (e) => {
        setusername(e.target.value);
        setCheck1(true);
    };

    const handlePasswordChange = (e) => {
        setCheck1(false);
        setPassword(e.target.value);
        setCheck2(true);
    };

    function handleClick() {
        navigate("/Service", { state: { mydata: username } });
    }

    function handleCreateAccountClick() {
        navigate("/Signup"); // Replace with the actual path to your registration page
    }

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
                <h1 className="font-bold text-center block text-2xl">Sign In</h1>
                <form>
                    <Input type="username" value={username} onChange={handleusernameChange} id="username" name="username" label="username" placeholder="Jane" autofocus={check1} />
                    <Input type="password" value={password} onChange={handlePasswordChange} id="password" name="password" label="Password" placeholder="••••••••••" autofocus={check2} />
                    <Button value="Submit" onClick={handleSubmit} style="bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg" />
                    <Button value="Create an Account" onClick={handleCreateAccountClick} style="bg-gray-500 hover:bg-gray-600" />
                </form>
            </div>
        </div>
    );
}

export default Signin;
