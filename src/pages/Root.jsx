import React, { lazy, Suspense } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { storeContext } from '../context/StoreContext';

const Root = () => {
  const mycontext = storeContext();
  // console.log(mycontext);
  return (
    <div className='font-bodyFont relative flex flex-col min-h-screen'>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
