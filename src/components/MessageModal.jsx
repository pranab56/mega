import Image from 'next/image';
import React from 'react';
import benner from '@/images/warning.png';


const MessageModal = ({setShowMessage,showMessage}) => {
    return (
        <div className="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover outline-none min-w-screen animated fadeIn faster focus:outline-none"  id="modal-id">
        <div className="absolute bg-[#00000080] opacity-80 inset-0 z-0"></div>
        
     <div className=" w-[510px] py-2 px-12 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
    
         <div className='flex flex-col items-center justify-center py-3 '>
         <Image src={benner} height={180} width={350} alt='...' />
         <span className='text-center'>
         <div className='flex flex-col gap-2'>
         <div>
         <span className='text-[#696969] text-[20px] text-center'>
         Scammers send emails and <br />
         msg links to fake websites. <br />
         They will lie and pretend to be <br />
         the real <span className='text-[#222222] text-[20px]'>https://megapersonals.eu</span> to <br />
         steal your account. <br />
         </span>
         </div>
         <div>
         <span className='text-[#696969] text-[20px]'>
         ONLY enter your password on <br />
         <span className='text-blue-500'>MEGA</span><span className='text-fuchsia-500'>PERSONALS</span><span className='text-blue-500'>.EU</span>.
         </span>
         </div>
         <div className='text-[#696969] text-[20px]'>
         (scams: megapersonals.cam, <br />megaperasonals.com etc...)
         </div>
         <div className='flex justify-center'>
         <button onClick={()=>setShowMessage(!showMessage)} className='bg-[#5CB85C] w-[105px] h-[46px] text-white rounded'>I GET IT.</button>
         </div>
         </div>
         </span>
         </div>
       
    
    
         
       
     </div>
    </div>
    );
};

export default MessageModal;