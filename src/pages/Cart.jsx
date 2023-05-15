import React, { useState } from 'react';
import { storeContext } from '../context/StoreContext';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import { userInfoContext } from '../context/UserContext';

const Cart = () => {
  const { products, itemCount, total, removeItem, resetCart } = storeContext();
  const { userInfo } = userInfoContext();
  const handleFee = (total * 0.032).toFixed(2);
  const finalTotal = Number(total) + Number(handleFee);

  const navigate = useNavigate();

  return (
    <div className={`flex-1 flex flex-col  mx-10 py-10 gap-6 `}>
      <div
        className={`flex flex-col items-start gap-6 max-w-5xl mx-auto w-full`}
      >
        {/*  NOTE: add bg img with black overlay with backdrop-brightness */}
        <div className='bg-[url("/src/assets/logo.jpg")] bg-cover bg-center w-full h-48 '>
          {/*  NOTE: add bg img with black overlay with backdrop-brightness */}
          <div className='w-full h-full backdrop-brightness-50 text-skin-bright_yellow p-5'>
            <h2 className='font-titleFont font-semibold text-2xl'>
              {itemCount === 0 ? 'Oops!' : 'Congraduate!'} <br /> You have{' '}
              {itemCount} items in your cart
            </h2>
            {!itemCount && (
              <p className='text-lg'>
                Go to the market
                <Link
                  to='/'
                  className='inline-block ml-2 hover:text-skin-highlight'
                >
                  <HiOutlineArrowUpRight size={24} />
                </Link>
              </p>
            )}
          </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-6 '>
          {/* cart products list */}
          <div className={` flex flex-col sm:w-3/4 w-full`}>
            {/* FOR EACH ITEM IN THE CART */}
            {products.map((item) => {
              return (
                <div key={`${item.title}:${item.howmany}`} className='mb-10'>
                  <h3 className='text-skin-prime_purple font-titleFont text-lg'>
                    {item.title}
                  </h3>
                  <div className='flex flex-col sm:flex-row gap-4 mt-3 relative'>
                    <Link
                      to={`/product/${item.title}`}
                      state={{ item: item }}
                      className='w-1/3 mx-auto sm:w-1/6 hover:scale-105 duration-300'
                    >
                      <img src={item.image} alt={item.title} />
                    </Link>
                    <div className='flex flex-col gap-1 flex-1 '>
                      <p className='text-skin-base font-light '>
                        {item.description.substring(0, 100)}...
                      </p>
                      <p className='text-sm text-skin-base capitalize'>
                        Unit price: ${item.price}
                      </p>
                      <p>
                        <label htmlFor=''>Qty:</label>
                        <Options item={item} />
                      </p>
                    </div>
                    <div className='w-1/6 min-w-[100px] text-sm'>
                      <p>Cost:</p>
                      <p className='font-titleFont'>
                        ${((item.price * 100) / 100) * item.howmany}
                      </p>
                    </div>
                    <div
                      className='text-slate-500 absolute right-2 bottom-1 sm:right-10 sm:bottom-5 text-xs hover:text-slate-300 cursor-pointer'
                      onClick={() => {
                        removeItem(item);
                        toast.success(
                          `${item.title} has been removed from your cart.`
                        );
                      }}
                    >
                      delete
                    </div>
                  </div>
                </div>
              );
            })}
            {itemCount !== 0 ? (
              <Button
                height='md:w-1/4 w-1/2 text-skin-base'
                handleClick={() => {
                  toast.error('Clearing all items from your cart...');
                  setTimeout(() => resetCart(), 2200);
                }}
              >
                Clear Cart
              </Button>
            ) : (
              ''
            )}
            <ToastContainer
              position='top-center'
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
          {/* FOR PAYMENT */}
          {itemCount !== 0 && (
            <div className='sm:w-1/4 w-full '>
              {products.length > 0 && (
                <div className=' flex flex-col gap-3'>
                  <hr className='w-full h-[1px] bg-skin-base sm:hidden' />
                  <h2 className='text-xl text-skin-prime_purple'>
                    Cart Totals
                  </h2>
                  <p className='text-sm'>
                    Subtotal ({products.length} products): <br />
                    <span className='text-base font-titleFont'>
                      $ {total.toFixed(2)}
                    </span>
                  </p>
                  <p className='text-sm'>
                    Shipping and handle fee:{' '}
                    <span className='text-base font-titleFont'>
                      $ {handleFee}
                    </span>
                  </p>

                  <p className='text-sm'>
                    Shipping Address: <br />
                    <span className='font-light'>
                      {' '}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </p>
                  <hr className='w-full h-[1px] bg-skin-base my-2' />
                  <p className='text-sm  pb-2'>
                    Total:{' '}
                    <span className=' font-semibold text-skin-base'>
                      $ {finalTotal}
                    </span>
                  </p>
                  <div>
                    <Button
                      height='text-skin-highlight'
                      handleClick={() => {
                        if (!userInfo) {
                          toast.error('please login to preceed with payment.');
                          setTimeout(() => {
                            navigate('/login');
                          }, 2500);
                        } else {
                          toast.success('Proceed to payment');
                          setTimeout(() => {
                            navigate('/');
                          }, 2500);
                        }
                      }}
                    >
                      Proceed to check
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Options = ({ item }) => {
  const { updateItemQuan } = storeContext();

  return (
    <select
      onChange={(e) => {
        // console.log(`inside options com: item is ${item.id}`);
        updateItemQuan(item, e.target.value);
      }}
      // defaultValue={item.howmany}
      value={item.howmany}
    >
      {Array.from(Array(10), (e, i) => {
        return (
          <option key={i} value={i}>
            {i}
          </option>
        );
      })}
    </select>
  );
};

export default Cart;
