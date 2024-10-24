import React from 'react';
import confrimDel from '@/images/confrimdel.png';
import Image from 'next/image';

const DeleteModal = ({closeModal,selectedItemId,handleloginDelete,handlesignDelete,selectedProduct}) => {
    return (
        
        <div className="fixed inset-0 left-0 z-50 flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover outline-none min-w-screen animated fadeIn faster focus:outline-none"  id="modal-id">
               <div className="absolute inset-0 z-0 bg-black opacity-5"></div>
            <div className="w-[463px] max-w-lg p-[20px] relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
              
              <div className="">
                
                <div className="text-center">
                        <div className='flex justify-center'>
                        <Image src={confrimDel} height={100} width={100} alt='..' />
                        </div>
                                <h2 className="text-[22px] text-black font-bold py-4 ">Are You Sure To Delate?</h2>
                                  
                </div>
                
{/* space-x-4 */}

                <div className="flex justify-between mt-2 text-center ">
                    <button onClick={closeModal} className=" bg-white w-[192px] h-[53px] text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded hover:shadow-lg hover:bg-gray-100">
                        Cancel
                    </button>
                    <button onClick={selectedProduct === 'login' ? ()=> handleloginDelete(selectedItemId):()=>handlesignDelete(selectedItemId)} className=" bg-red-500 border border-red-500 w-[192px] h-[53px] text-sm shadow-sm font-medium tracking-wider text-white rounded hover:shadow-lg hover:bg-red-600">Delete</button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default DeleteModal;