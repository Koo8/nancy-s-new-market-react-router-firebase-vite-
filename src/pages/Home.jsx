import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className='flex flex-col w-full flex-1'>
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
