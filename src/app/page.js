'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import image1 from '@/images/devilgirl 2.png'
import flower from '@/images/flower.png';
import mega from '@/images/mega.png';
import meetnow from '@/images/meetnow.png';
import Link from 'next/link';
import CountryModal from '@/components/CountryModal';
import useClickTracker from '@/Hooks/useClickTracker';

const page = () => {

  useClickTracker('/')
  const [showCountry,setShowCountry] = useState(false);
  const handleChange = () => {
    setShowCountry(prev=>!prev)
  }

  
  
  return (
    <menu className='sm:p-[40px] sm:w-[600px] p-[20px]   sm:mx-auto '>
     <section className='flex items-start justify-center gap-3'>

     <section>  
        <div>
          <Image src={image1} width={200} height={280} alt='...'/>
         <div className='ml-[15px] mt-[-15px]'>
         <Link href={'/login'}><button className='text-white cursor-pointer bg-[#58C2FD] w-[180px] h-[35px] rounded'>POST NOW</button></Link>
         </div>
        </div>
        <div className='text-center p-[15px]'>
          <h3 className='text-[#810107] font-bold text-[14px] cursor-pointer'>Select location</h3>
          <h3 onClick={handleChange} className='select-none relative flex flex-col items-center justify-center bg-white text-[#FCBCE6] text-[13px] font-bold underline cursor-pointer'>change location</h3>  
          {
        showCountry && <CountryModal setShowCountry ={setShowCountry} value={showCountry}></CountryModal>
      }
        </div>
      
        <div>
          <Image src={flower} width={170} height={120} alt='flower' />
        </div>
      </section>

      <section className='flex w-full flex-col sm:gap-[45px] gap-[30px]'>
        <div className='flex flex-col gap-3'>
          <Image src={mega} width={373} height={63} alt='mega'/>
          <Image src={meetnow} width={373} height={50} alt='meetnow'/>
          <h3 className='text-[#DCD1B1] sm:text-[20px] text-[14px] font-bold text-center'>MegaPersonals is restricted to <br /> topersons 18 years of age or older*</h3>
        </div>

        <div className='flex flex-col gap-4'>
          <Link href={'/login'}><button className='sm:w-[370px] shadow-2xl w-full h-[49px] rounded bg-[#C75400] text-white sm:text-[30px] text-[20px] font-medium'>W seek M</button></Link>
          <Link href={'/login'}><button className='sm:w-[370px] shadow-2xl w-full h-[49px] rounded bg-[#FFA300] text-white sm:text-[30px] text-[20px] font-medium'>M seek W</button></Link>
          <Link href={'/login'}><button className='sm:w-[370px] shadow-2xl w-full h-[49px] rounded bg-[#E7C660] text-white sm:text-[30px] text-[20px] font-medium'>M seek M</button></Link>
          <Link href={'/login'}><button className='sm:w-[370px] shadow-2xl w-full h-[49px] rounded bg-[#857A30] text-white sm:text-[30px] text-[20px] font-medium'>W seek W</button></Link>
          <Link href={'/login'}><button className='sm:w-[370px] shadow-2xl w-full h-[49px] rounded bg-[#A6A3A3] text-white sm:text-[30px] text-[20px] font-medium'>Trans</button></Link>
        </div>
      </section>

     </section>

      

       <section className='flex flex-col gap-[30px] pt-6'>
       <div className='text-center'>
          <h3 className=' text-[#DCD1B1] text-[16px] italic'><span className='text-[#DCD1B1] text-[16px] font-semibold italic'>MegaPersonals</span> is a classifieds service</h3>
          <h3 className='text-[#DCD1B1] text-[16px] italic'>for people wanting to <span className='text-[#21D42B] text-[16px] italic font-bold'>MEET NOW!</span></h3>
        </div>


        <div className='text-center flex flex-col gap-[26px]'>
          <ul className='flex sm:gap-2 gap-[2px] justify-center text-[#0481C9] text-[13px] font-normal'>
            <a href="/"><li className='cursor-pointer'>Home</li></a>
            <li>|</li>
            <Link href={'/login'}><li className='cursor-pointer'>Manage Posts</li></Link>
            <li>|</li>
            <Link href={'/login'}><li className='cursor-pointer'>Contact Us</li></Link>
            <li>|</li>
            <Link href={'/login'}><li className='cursor-pointer'>Policies & Terms</li></Link>
          </ul>
          <h3 className='text-[#0481C9] text-[13px]'>Copyright @2024 MegaPersonals.eu</h3>
        </div>

       
       </section>


    </menu>
  );
};

export default page;