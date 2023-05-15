import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
  const data = useLoaderData();
  const storeitems = data.data;
  // console.log(data.data[0]);
  return (
    <div className='flex flex-col gap-4 py-10 max-w-5xl mx-auto items-center text-skin-base text-center sm:px-10 '>
      <div className='group flex flex-col gap-3 mx-auto items-center cursor-pointer'>
        <h1 className='font-titleFont font-bold text-lg bg-skin-prime_yellow px-4 group-hover:-translate-y-1 duration-300'>
          Shopping Everyday
        </h1>
        <span className='w-14 h-0 border-t-skin-base border block group-hover:border-t-skin-highlight duration-300'></span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
          assumenda quasi! Repudiandae, dolore ipsam cum temporibus delectus
          unde sit beatae qui quidem dolores necessitatibus nesciunt excepturi
          labore doloremque voluptate. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Tenetur deleniti consequuntur fugit magni qui saepe
          iusto, molestias obcaecati? Repellat soluta natus consectetur
          necessitatibus nemo nulla eum delectus qui animi aperiam!
        </p>
      </div>
      <div className='w-full max-w-screen-xl flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8 my-10'>
        {data.data ? (
          data.data.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default Products;
