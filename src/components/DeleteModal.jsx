import React from 'react';
import confrimDel from '@/images/confrimdel.png';
import Image from 'next/image';

const DeleteModal = ({closeModal,selectedItemId,handleloginDelete,handlesignDelete,selectedProduct}) => {
    return (
        
        <div class="min-w-screen h-screen animated fadeIn faster  fixed left-0  flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  id="modal-id">
               <div class="absolute bg-black opacity-5 inset-0 z-0"></div>
            <div class="w-[463px] max-w-lg p-[20px] relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
              
              <div class="">
                
                <div class="text-center">
                        <div className='flex justify-center'>
                        <Image src={confrimDel} height={100} width={100} />
                        </div>
                                <h2 class="text-[22px] text-black font-bold py-4 ">Are You Sure To Delate?</h2>
                                  
                </div>
                
{/* space-x-4 */}

                <div class="  mt-2 text-center flex justify-between">
                    <button onClick={closeModal} class=" bg-white w-[192px] h-[53px] text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded hover:shadow-lg hover:bg-gray-100">
                        Cancel
                    </button>
                    <button onClick={selectedProduct === 'login' ? ()=> handleloginDelete(selectedItemId):()=>handlesignDelete(selectedItemId)} class=" bg-red-500 border border-red-500 w-[192px] h-[53px] text-sm shadow-sm font-medium tracking-wider text-white rounded hover:shadow-lg hover:bg-red-600">Delete</button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default DeleteModal;