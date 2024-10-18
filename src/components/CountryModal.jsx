'use client';
import React, { useEffect, useState } from 'react';
import cross from '@/images/cancle.png';
import Image from 'next/image';

const CountryModal = ({setShowCountry,value}) => {

    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);
  const [dropdownTransition, setDropdownTransition] = useState(false); 

  const countries = ['Canada', 'United States', 'Europe', 'Oceania'];
  const regions = {
    'Canada': ['Alberta', 'Ontario', 'Quebec'],
    'United States': ['Alabama', 'California', 'Florida'],
    'Europe': ['Germany', 'France', 'Italy'],
    'Oceania': ['Australia', 'New Zealand'],
  };


  const selectCountry = (country) => {
    setDropdownTransition(true);
    setSelectedCountry(country);
    setShowRegionDropdown(true);
  };


  useEffect(() => {
    if (showCountryDropdown || showRegionDropdown) {
      setDropdownTransition(true);
    }
  }, [showCountryDropdown, showRegionDropdown]);

    return (
        <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"  id="modal-id">
               <div class="absolute bg-[#00000080] opacity-80 inset-0 z-0"></div>
               
            <div class="w-[310px]   max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <div onClick={()=>setShowCountry(!value)} className='relative cursor-pointer flex justify-end left-[25px] top-[-26px]'><Image  src={cross} width={29} height={29}/></div>
            <h3 className='relative top-[-25px] text-[#00CBFF] text-[20px] font-bold'>Choose a Location</h3>
              <div class="relative top-[-10px] flex flex-col gap-[10px]">

              {countries.map((country) => (
            <div key={country}>
              <h3  onClick={() => selectCountry(country)} className='bg-[#F9A51C] rounded-lg cursor-pointer text-white text-[22px] font-bold text-start p-[10px]'>{country}</h3>

              {/* Region Dropdown under the selected country */}
              {selectedCountry === country && showRegionDropdown && (
                <div
                  className={` mt-[10px] rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${
                    dropdownTransition ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  {regions[selectedCountry].map((region) => (  
                    <h3 key={region} className='bg-[#00CBFF] mt-[10px] rounded-lg cursor-pointer text-white text-[18px] font-bold text-start p-[10px]'> 
                    <span className='flex items-center justify-between'>
                        <h3>{region}</h3>
                        <h3 className='font-bold text-[20px] pr-[5px]'>+</h3>
                    </span>
                    </h3>

                    
                  ))}
                </div>
              )}
            </div>
          ))}


                
                {/* 
                <h3 className='bg-[#F9A51C] rounded-lg cursor-pointer text-white text-[22px] font-bold text-start p-[10px]'>Canada</h3>
                <h3 className='bg-[#F9A51C] rounded-lg cursor-pointer text-white text-[22px] font-bold text-start p-[10px]'>Canada</h3> */}
                
              </div>
            </div>
          </div>

    );
};

export default CountryModal;