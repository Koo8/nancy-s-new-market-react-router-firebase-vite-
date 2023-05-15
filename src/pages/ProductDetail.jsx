import React, { useContext, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaQuoteLeft } from 'react-icons/fa';
import { AiFillStar, AiOutlineShopping } from 'react-icons/ai';
import Button from '../components/Button';
import { storeContext } from '../context/StoreContext';

const ProductDetail = () => {
  const [count, setCount] = useState(0);
  // const [showModal, setShowModal] = useState(false);
  const { state } = useLocation();
  const { addToCart, products } = storeContext();
  const navigate = useNavigate();
  const { id, title, category, description, image, price, rating } = state.item;
  const thisItem = products.find((item) => item.id === id);
  const numPurchased = thisItem ? thisItem.howmany : 0;
  const [show, setShow] = useState(false);
  return (
    <div className=' flex flex-col sm:flex-row max-w-5xl mx-auto gap-6 px-6 sm:px-2 py-6 text-skin-base'>
      <img
        src={image}
        alt={title}
        className='w-full sm:w-2/5 h-auto object-cover shadow-sm p-4 '
      />
      {/* right part */}
      <div className='flex flex-col flex-1 relative'>
        <h2 className=' text-xl sm:text-3xl font-titleFont font-normal text-skin-base '>
          {title.substring(0, 50)}
        </h2>
        <p className='  text-skin-prime_purple'>
          Category:{' '}
          <Link
            to={`../../category/${category}`}
            state={{ category: category }}
          >
            {category}
          </Link>
        </p>
        <div className={`flex justify-between text-skin-prime_yellow `}>
          <p className='text-skin-base pb-2  font-semibold'>${price}</p>
          <span className='flex'>
            {Array.from(Array(Math.round(rating.rate)), (e, i) => {
              return <AiFillStar key={Math.random()} />;
            })}
          </span>
        </div>
        <hr className='border-skin-highlight w-28' />
        {/* bellow the orange line */}
        {/* for shopping cart displaying of this specific item */}
        <div
          className='relative'
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <div className='relative flex items-center justify-center'>
            <Link to='/cart' className={`inline-block text-skin-prime_yellow `}>
              <AiOutlineShopping size={36} />
              <span
                className={`absolute text-xs font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3`}
              >
                {numPurchased}
              </span>
            </Link>
          </div>
          <div className='absolute left-1/2 text-[8px]  '>
            {/* tooltip */}
            <div
              className={`${
                show ? 'scale-100 -translate-x-1/2 ' : 'scale-0'
              } duration-300`}
            >
              Your cart has{' '}
              <span className='text-skin-highlight text-xs'>
                {numPurchased}
              </span>{' '}
              of this product.
            </div>
          </div>
        </div>

        <p className='font-light mt-6 relative flex-1'>
          <span className='inline-block -top-3 -left-2 absolute '>
            <FaQuoteLeft className='text-skin-base' />
          </span>
          <span className='ml-2 text-xs'>{description}</span>
        </p>

        <div className='flex justify-between mt-4 sm:mt-0  gap-4 sm:mb-4 flex-col sm:flex-row'>
          <div className='flex ml-2 items-center'>
            <p className='text-sm mr-3'>Quantity:</p>
            <Button
              handleClick={() => (count === 0 ? '' : setCount(count - 1))}
            >
              -
            </Button>
            <span className='mx-5'>{count}</span>
            <Button handleClick={() => setCount(count + 1)}>+</Button>
          </div>
          <div className='ml-2'>
            <Button
              handleClick={() => {
                if (count === 0) {
                  toast.success(`Please choose a quantity first.`);
                } else {
                  addToCart(state.item, count);
                  toast.success(`${title} has been added to the cart.`);
                  setTimeout(() => navigate('/'), 2000);
                }
              }}
              height='sm:text-xs md:text-sm'
            >
              Add to cart
            </Button>
          </div>
        </div>
        {/* for the pop up motal - REPLACED by react-toastify */}
        {/* {showModal && (
          <div className='absolute right-0 sm:right-10 bottom-2  bg-black w-56 h-36 border-slate-800 flex items-center justify-center'>
            {' '}
            <div className='w-40 h-24 flex items-center justify-center '>
              <div className='absolute top-5 right-5 hover:text-skin-bright_yellow'>
                <AiOutlineClose size={24} onClick={() => setShowModal(false)} />
              </div>
              <p className='m-auto'>Please choose a quantity first</p>
            </div>
          </div>
        )} */}

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
          theme='colored'
        />
        {/* )} */}
      </div>
    </div>
  );
};

export default ProductDetail;
