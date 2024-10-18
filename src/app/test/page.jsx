'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const page = () => {

      // Step 1: Create an array of local image paths
  const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
  ];

  // Step 2: Create a state to track the current image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Step 3: Function to change the image randomly
  const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };
    return (
        <div style={{ textAlign: 'center' }}>
      <h1>Random Image Changer</h1>
      {/* Display the current image using next/image for optimization */}
      <Image
        src={currentImage}
        alt="Random"
        width={300}
        height={200}
      />
      <br />
      {/* Button to change the image */}
      <button onClick={changeImage} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Change Image
      </button>
    </div>
    );
};

export default page;