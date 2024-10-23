'use client';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';


const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

   
    if (username === 'admin' && password === 'password') {
      sessionStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboardAdmin');
    } else {
      alert('Invalid credentials');
    }
  };

    return (
        <div>
            

<div className="flex items-center justify-center w-screen h-screen p-5 dark:bg-gradient-to-l from-gray-900 to-gray-600">
    <div className="flex flex-col w-full px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md dark:shadow-gray-600 md:w-1/3 dark:bg-gray-800">
        <h1 className="mb-4 text-2xl font-semibold text-center text-gray-900 dark:text-gray-200">Admin Login</h1>
        <form onSubmit={handleLogin}>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-400" for="email">
                    Email <span className="text-red-500">*</span>
                </label>
                <input  value={username}
        onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="email" type="text" placeholder="UserName"/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-400" for="password">
                    Password <span className="text-red-500">*</span>
                </label>
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded-md shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="password" type="password" placeholder="******************"/>
            </div>
            <div className="flex items-center justify-between">
                <input type="submit" value="Login" className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded cursor-pointer hover:bg-green-700 focus:outline-none focus:shadow-outline dark:bg-green-600" />
            </div>
        </form>
    </div>
</div>

        </div>
    );
};

export default AdminLogin;