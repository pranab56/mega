'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import image1 from '@/images/devilgirl 2.png'
import flower from '@/images/flower.png';
import mega from '@/images/mega.png';
import meetnow from '@/images/meetnow.png';
import Link from 'next/link';
import CountryModal from '@/components/CountryModal';

const page = () => {
  const [showCountry,setShowCountry] = useState(false);
  const handleChange = () => {
    setShowCountry(prev=>!prev)
  }

  
  
  return (
    <menu className='p-[30px] w-[600px] mx-auto overflow-hidden'>
     <section className='flex items-start justify-center overflow-x-hidden'>

     <section>  
        <div>
          <Image src={image1} width={198} layout='responsive' objectFit='cover' height={260} alt='...'/>
         <div className='ml-[15px] mt-[-15px]'>
         <Link href={'/login'}><button className='text-white cursor-pointer bg-[#58C2FD] w-[158px] h-[35px] rounded' disabled>POST NOW</button></Link>
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

      <section className='flex flex-col gap-[48px]'>
        <div className='flex flex-col gap-3'>
          <Image src={mega} width={373} height={63} alt='mega'/>
          <Image src={meetnow} width={373} height={50} alt='meetnow'/>
          <h3 className='text-[#DCD1B1] text-[20px] font-bold text-center'>MegaPersonals is restricted to <br /> topersons 18 years of age or older*</h3>
        </div>

        <div className='flex flex-col gap-2'>
          <Link href={'/login'}><button className='w-[370px] h-[49px] rounded bg-[#C75400] text-white text-[30px] font-bold'>W seek M</button></Link>
          <Link href={'/login'}><button className='w-[370px] h-[49px] rounded bg-[#FFA300] text-white text-[30px] font-bold'>M seek W</button></Link>
          <Link href={'/login'}><button className='w-[370px] h-[49px] rounded bg-[#E7C660] text-white text-[30px] font-bold'>M seek M</button></Link>
          <Link href={'/login'}><button className='w-[370px] h-[49px] rounded bg-[#857A30] text-white text-[30px] font-bold'>W seek W</button></Link>
          <Link href={'/login'}><button className='w-[370px] h-[49px] rounded bg-[#A6A3A3] text-white text-[30px] font-bold'>Trans</button></Link>
        </div>
      </section>

     </section>

      

       <section className='flex flex-col gap-[30px] pt-6'>
       <div className='text-center'>
          <h3 className=' text-[#DCD1B1] text-[16px] italic'><span className='text-[#DCD1B1] text-[16px] font-semibold italic'>MegaPersonals</span> is a classifieds service</h3>
          <h3 className='text-[#DCD1B1] text-[16px] italic'>for people wanting to <span className='text-[#21D42B] text-[16px] italic font-bold'>MEET NOW!</span></h3>
        </div>


        <div className='text-center flex flex-col gap-[26px]'>
          <ul className='flex gap-2 justify-center text-[#0481C9] text-[13px] font-normal'>
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