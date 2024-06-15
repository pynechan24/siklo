// src/pages/index.js
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl mb-4">Welcome to Siklo Supplies Co.</h2>
        <p>Your source for premium motorcycle gear.</p>
      </main>
    </div>
  );
};

export default Home;
