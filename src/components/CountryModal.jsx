'use client';
import React, { useEffect, useState } from 'react';
import cross from '@/images/cancle.png';
import Image from 'next/image';
import Link from 'next/link';

const CountryModal = ({ setShowCountry, value }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showRegionDropdown, setShowRegionDropdown] = useState(false);

  const countries = [
    'Canada', 
    'United States', 
    'Europe', 
    'Oceania'
  ];
  
  const regions = {
    Canada: [
      'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
      'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 
      'Saskatchewan', 'Yukon', 'Ontario', 'Quebec'
    ],
    'United States': [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Colorado', 'Connecticut', 
      'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 
      'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
      'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
      'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 
      'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 
      'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 
      'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 
      'West Virginia', 'California', 'Florida'
    ],
    Europe: [
      'Germany', 'United Kingdom', 'Spain', 'Romania', 'Portugal', 
      'Netherlands', 'Turkey', 'Belgium', 'France', 'Italy'
    ],
    Oceania: [
      'Australia', 'New Zealand'
    ],
  };

  const toggleCountry = (country) => {
    if (selectedCountry === country) {
      setSelectedCountry(null);
      setShowRegionDropdown(false);
    } else {
      setSelectedCountry(country);
      setShowRegionDropdown(true);
    }
  };

  const handleRegionClick = (region) => {
    // You can do something with the selected region here if needed
    setSelectedCountry(null);
    setShowRegionDropdown(false);
    setShowCountry(false); // Close the modal
  };

  useEffect(() => {
    // Disable body scroll when modal is open
    if (value) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [value]);

  if (!value) return null; // Don't render modal if `value` is false

  return (
    <div
      className="fixed inset-0 top-0 left-0 bg-[#00000080] z-50 flex py-2 items-center justify-center sm:h-screen min-h-screen  overflow-y-scroll bg-center bg-no-repeat bg-cover outline-none min-w-screen animated fadeIn faster focus:outline-none"
      id="modal-id"
    >
      <div className="absolute inset-0 z-0 opacity-80"></div>
      <div className="w-[310px] max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        <div
          onClick={() => setShowCountry(false)}
          className="relative cursor-pointer flex justify-end left-[25px] top-[-26px]"
        >
          <Image src={cross} width={29} height={29} alt="close" />
        </div>

        <h3 className="relative top-[-25px] text-[#00CBFF] text-[20px] font-bold">
          Choose a Location
        </h3>

        <div className="relative top-[-10px] flex flex-col gap-[10px]">
          {countries.map((country) => (
            <div key={country}>
              <h3
                onClick={() => toggleCountry(country)}
                className="bg-[#F9A51C] hover:bg-[#f9a41caf] rounded-lg cursor-pointer text-white text-[22px] font-bold text-start py-[10px] px-[12px]"
              >
                {country}
              </h3>

              {selectedCountry === country && showRegionDropdown && (
                <div className="flex flex-col  gap-[10px] mt-2 transition-all duration-300 ease-in-out transform scale-100 rounded-md shadow-lg opacity-100 ">
                  {regions[selectedCountry].map((region) => (
                    <h3
                      key={region}
                      onClick={() => handleRegionClick(region)} // Pass the region
                      className="bg-[#00CBFF]   hover:bg-[#00ccffb6] rounded-lg cursor-pointer text-white text-[18px] font-bold text-start px-[14px] py-[10px]"
                    >
                     <Link href={'/login'}>
                     <span className="flex items-center justify-between">
                        <span>{region}</span>
                        <span className="font-bold text-[20px] pr-[5px]">+</span>
                      </span>
                     </Link>
                    </h3>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
