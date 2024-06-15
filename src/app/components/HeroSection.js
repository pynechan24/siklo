'use client'
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import image1 from '/public/hero_image1.jpg';
import image2 from '/public/hero_image2.jpg';
import image3 from '/public/hero_image3.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex items-center justify-center">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
        className="w-full h-full"
      >
         {/* Example Video Slide */}
         {/* <div className="w-full h-screen">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/public/Video1.mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}

        {/* Example Image Slide */}
        <div>
          {/* <img src={image1} alt="Hero Image 1" className="w-full h-screen object-cover" /> */}
          <Image src={image1} alt="Siklo Supplies Co. Logo" className="w-full h-screen object-cover" />
          <div className="absolute text-center w-full top-1/2 transform -translate-y-1/2">
            <h1 className="text-4xl font-bold">Gear Up, Ride Safe</h1>
            <p className="mt-4 text-lg">Discover the best motorcycle gear at Siklo Supplies Co.</p>
          </div>
        </div>
       
        {/* Add more slides as needed */}
        <div>
        <Image src={image3} alt="Siklo Supplies Co. Logo" className="w-full h-screen object-cover" />
        </div>
        <div>
        <Image src={image2} alt="Siklo Supplies Co. Logo" className="w-full h-screen object-cover" />
        </div>
      </Carousel>
      {/* <div className="absolute text-center w-full top-1/2 transform -translate-y-1/2">
        <h1 className="text-4xl font-bold">Gear Up, Ride Safe</h1>
        <p className="mt-4 text-lg">Discover the best motorcycle gear at Siklo Supplies Co.</p>
      </div> */}
    </section>
  );
};

export default HeroSection;
