import React from 'react';
import { Link } from 'react-router-dom';
import { storeContext } from '../context/StoreContext';
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({ item }) => {
  const { id, title, category, description, image, price, rating } = item;
  const { addToCart } = storeContext();

  return (
    <div className='max-w-xs shadow-md h-96 group w-full relative'>
      <Link to={`product/${item.title}`} state={{ item: item }}>
        <img
          src={image}
          alt={title}
          className='w-full object-cover h-60 group-hover:scale-105 transform duration-300 shadow-sm ease-in-out'
        />
      </Link>

      <div className='w-full font-light text-sm text-start py-4 flex flex-col justify-between h-36 px-3 md:px-1'>
        <div className='flex-1 relative group/title font-titleFont '>
          <p>{title.substring(0, 30)}</p>
          <p className='absolute font-bodyFont text-[10px] leading-4  top-0 scale-0 text-white bg-black group-hover/title:scale-100 transition-transform duration-500 p-1 rounded-s-lg -right-1'>
            {title}
          </p>
        </div>
        <p className='text-xs order-1'>
          <span className='font-semibold'>${price}</span>
          <span className='float-right'>{category.substring(0, 10)}</span>
        </p>
        <p>
          rating: <i>{rating.rate}</i>
        </p>
      </div>
      {/* for fixed tag  */}
      <div className='absolute top-10 right-0 w-20 h-6 text-skin-bright_yellow bg-skin-base px-2 py-1 font-thin rounded-s-lg text-xs  flex overflow-hidden'>
        <div className='absolute -translate-x-32 group-hover:translate-x-0 duration-1000 flex justify-center'>
          <span
            className='cursor-pointer'
            onClick={() => {
              addToCart(item, 1);
              toast.success(`${item.title} is added to the cart.`);
            }}
          >
            Add to cart
          </span>
        </div>
        <div className='w-16 flex justify-center translate-x-0 group-hover:translate-x-32 duration-1000'>
          <span>{rating.count} left</span>
        </div>
      </div>
      {/* for Toastcontainer */}
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};
// TODO:to finish the add to cart animation

export default ProductCard;
