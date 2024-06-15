// src/components/ProductView.js
import React from 'react';
import Image from 'next/image';
import product1 from '/public/product1.jpg';
import product2 from '/public/product2.jpg';
import product3 from '/public/product3.jpg';
import product4 from '/public/product4.jpg';

const ProductView = ({ product }) => {
  return (
    <section className="py-12 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 color text-black">
        {/* Repeat this block for each product */}
        <div className="border p-4">
          <Image
            src={product1}// Replace with actual product image path
            alt="Product Image"
            width={500}
            height={500}
          />
          <h3 className="mt-2 text-xl font-bold">Product Name</h3>
          <p className="mt-1 text-gray-700">$99.99</p>
          <button className="mt-2 bg-black text-white py-2 px-4">Add to Cart</button>
        </div>
        {/* Add more products similarly */}
        <div className="border p-4">
          <Image
            src={product2}// Replace with actual product image path
            alt="Product Image"
            width={500}
            height={500}
          />
          <h3 className="mt-2 text-xl font-bold">Product Name</h3>
          <p className="mt-1 text-gray-700">$99.99</p>
          <button className="mt-2 bg-black text-white py-2 px-4">Add to Cart</button>
        </div>
        <div className="border p-4">
          <Image
            src={product3}// Replace with actual product image path
            alt="Product Image"
            width={500}
            height={500}
          />
          <h3 className="mt-2 text-xl font-bold">Product Name</h3>
          <p className="mt-1 text-gray-700">$99.99</p>
          <button className="mt-2 bg-black text-white py-2 px-4">Add to Cart</button>
        </div>
        <div className="border p-4">
          <Image
            src={product4}// Replace with actual product image path
            alt="Product Image"
            width={500}
            height={500}
          />
          <h3 className="mt-2 text-xl font-bold">Product Name</h3>
          <p className="mt-1 text-gray-700">$99.99</p>
          <button className="mt-2 bg-black text-white py-2 px-4">Add to Cart</button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProductView;
