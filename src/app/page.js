import React from 'react';
import Header from './components/Header';
import ProductView from './components/ProductView';
import BrandsSection from './components/BrandsSection';
import HeroSection from './components/HeroSection'; // Import the HeroSection component
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection /> {/* Add the HeroSection here */}
        
        {/* Product Showcase */}
        <ProductView />


        {/* Brands Section */}
        <BrandsSection />

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About Siklo Supplies Co.</h2>
            <p className="text-lg text-gray-700">Siklo Supplies Co. has been providing top-notch motorcycle gear since 1990. Our mission is to ensure riders have access to the best and safest gear available. We value quality, safety, and customer satisfaction above all else.</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Customer Testimonials</h2>
            <div className="flex overflow-x-scroll">
              {/* Repeat this block for each testimonial */}
              <div className="m-4 bg-white p-6 shadow-lg">
                <p className="text-lg text-gray-700">"Best gear I've ever purchased! Highly recommend Siklo Supplies Co." - John Doe</p>
              </div>
              {/* Add more testimonials similarly */}
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Subscribe to Our Newsletter</h2>
            <form className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300"
              />
              <button type="submit" className="bg-black text-white p-2">Subscribe</button>
            </form>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg text-gray-700">123 Motorcycle Lane, Biker City, USA</p>
            <p className="text-lg text-gray-700">(123) 456-7890</p>
            <p className="text-lg text-gray-700">info@siklosupplies.com</p>
            <div className="mt-4 flex justify-center space-x-4">
              <Link href="https://facebook.com">
                <div className="mx-2 cursor-pointer">Facebook</div>
              </Link>
              <Link href="https://twitter.com">
                <div className="mx-2 cursor-pointer">Twitter</div>
              </Link>
              <Link href="https://instagram.com">
                <div className="mx-2 cursor-pointer">Instagram</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Siklo Supplies Co. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="/privacy">
                <div className="mx-2 cursor-pointer">Privacy Policy</div>
              </Link>
              <Link href="/terms">
                <div className="mx-2 cursor-pointer">Terms of Service</div>
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
