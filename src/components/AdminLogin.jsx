'use client';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';


const AdminLogin = () => {


    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with your actual authentication logic
    if (username === 'admin' && password === 'password') {
      // Set cookie for logged-in status
      sessionStorage.setItem('isLoggedIn', 'true');
  
      // Redirect to the dashboard on successful login
      router.push('/dashboard');
     
    } else {
      alert('Invalid credentials');
    }
  };

    return (
        <div>
            

<div class="dark:bg-gradient-to-l from-gray-900 to-gray-600 flex justify-center items-center w-screen h-screen p-5">
    <div class="bg-white shadow-md dark:shadow-gray-600 rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/3 dark:bg-gray-800">
        <h1 class="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-200">Admin Login</h1>
        <form onSubmit={handleLogin}>
            <div class="mb-4">
                <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" for="email">
                    Email <span class="text-red-500">*</span>
                </label>
                <input  value={username}
        onChange={(e) => setUsername(e.target.value)} class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="email" type="text" placeholder="UserName"/>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" for="password">
                    Password <span class="text-red-500">*</span>
                </label>
                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="shadow appearance-none border border-red-500 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" id="password" type="password" placeholder="******************"/>
            </div>
            <div class="flex items-center justify-between">
                <input type="submit" value="Login" class="bg-green-500 cursor-pointer hover:bg-green-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-green-600" />
            </div>
        </form>
    </div>
</div>

        </div>
    );
};

export default AdminLogin;