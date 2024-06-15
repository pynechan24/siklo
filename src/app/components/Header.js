import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/siklo_supplies_co_logo_high_quality.png'; // Replace with actual path

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="Siklo Supplies Co. Logo" width={50} height={50} />
          <span className="ml-3 text-xl font-bold">Siklo Supplies Co.</span>
        </div>
        <nav className="flex space-x-4">
          <Link href="/">
            <div className="hover:text-gray-400 cursor-pointer">Home</div>
          </Link>
          <Link href="/about">
            <div className="hover:text-gray-400 cursor-pointer">About</div>
          </Link>
          <Link href="/shop">
            <div className="hover:text-gray-400 cursor-pointer">Shop</div>
          </Link>
          <Link href="/brands">
            <div className="hover:text-gray-400 cursor-pointer">Brands</div>
          </Link>
          <Link href="/contact">
            <div className="hover:text-gray-400 cursor-pointer">Contact</div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
