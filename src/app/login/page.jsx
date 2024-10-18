'use client';
import React, { useState } from 'react';
import loginBenner from '@/images/loginbenner.png';
import reloadbutton from '@/images/reloadButton.png';
import Image from 'next/image';


const page = () => {
    const images = [
        '/images/image1.png',
        '/images/image2.png',
        '/images/image3.png',
        '/images/image4.png',
        '/images/image5.png',
        '/images/image6.png',
        '/images/image7.png',
        '/images/image8.png',
        '/images/image9.png',
        '/images/image10.png',
        '/images/image11.png',
        '/images/image12.png',
        '/images/image13.png',
        '/images/image14.png',
        '/images/image15.png',
        '/images/image16.png',
        '/images/image17.png',
        '/images/image18.png',
        '/images/image19.png',
        '/images/image20.png',
        '/images/image21.png',
        '/images/image22.png',
        '/images/image23.png',
        '/images/image24.png',
        '/images/image25.png',
        '/images/image26.png',
        '/images/image27.png',
        '/images/image28.png',
        '/images/image29.png',
        '/images/image30.png',
      ];


      const [currentImage, setCurrentImage] = useState(images[0]);

      // Step 3: Function to change the image randomly
      const changeImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setCurrentImage(images[randomIndex]);
      };


    return (
        <main className='p-[40px] flex justify-center'>
           <section className='flex flex-col gap-[20px]'>
           <Image src={loginBenner} width={413} height={83} alt='login Benner'/>
           <section className='flex flex-col items-center gap-4'>
            <div className='flex flex-col items-center gap-2'>
                <h3 className='text-[#B9A697] text-[18px] font-normal'>Is this your first time posting?</h3>
                <button className='w-[253px] px-[10px] rounded text-white font-bold text-[27px] bg-[#0492FF]'>Start Here</button>
            </div>
            <h3 className='text-[#B9A697] text-[18px] font-normal '>Already have an account?</h3>

            <form className='flex flex-col gap-3'>
                <input type="email" name="" className='block outline-none w-[253px] h-[33px] rounded border-2 border-[#c0c0c0] px-2 text-[#222222] text-[18px] ' placeholder='Email' required/>
                <input type="password" name="" className='block outline-none w-[253px] h-[33px] rounded border-2 border-[#c0c0c0] px-2 text-[#222222] text-[18px]' placeholder='Password' required/>
                <div className='flex items-center justify-between'>
                    <div className='border-2 border-[#c0c0c0] rounded'><Image className='p-[2px]' src={currentImage} width={191} height={37}/></div>
                    <span onClick={changeImage} className='cursor-pointer'><Image src={reloadbutton} width={41} height={41}/></span>
                </div>
                <input type="email" name="" className='block outline-none w-[253px] h-[33px] rounded border-2 border-[#c0c0c0] px-2 text-[#222222] text-[18px] ' placeholder='Enter code from the picture'/>

                <div className='flex flex-col items-center'>
                <button className='w-[120px] h-[44px]  bg-[#FEB161] text-[#FFFFFF] text-[22px]'>SUBMIT</button>
                </div>

                <div className=' rounded bg-[#F6DB4D] p-[10px]'>
                    <div className='border-2 border-black rounded px-[10px]'>
                        <h3 className='font-bold text-[19px] text-[#1B1B1B]'>DON’T GET SCAMMED!</h3>
                        <div className='flex items-center justify-between '>
                            <span className='p-0 m-0'>
                                <h3 className='text-[#1B1B1B] text-[16px] font-normal'>Is the address up top:</h3>
                                <h3 className='text-[#1B1B1B] text-[16px] font-normal'>megapersonals.eu</h3>
                            </span>
                            <h2 className='text-[50px] w-[31px] font-bold'>?</h2>
                        </div>
                    </div>
                </div>
            </form>

            <h3 className='text-[#0000EE] text-[14px] font-normal cursor-pointer'>FORGOT PASSWORD?</h3>

            <div className='text-center flex flex-col gap-[26px]'>
          <ul className='flex gap-2 justify-center text-[#0481C9] text-[13px] font-normal'>
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
           </section>

        </main>
    );
};

export default page;