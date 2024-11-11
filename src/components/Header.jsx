import React, { useContext, useState } from 'react';

import { iconHover, logo } from '../assets/assetsIndex';
import { AiOutlineShopping, AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import LinkTab from './LinkTab';
import { Link } from 'react-router-dom';
import { storeContext } from '../context/StoreContext';
import { ToastContainer, toast } from 'react-toastify';
import { userInfoContext } from '../context/UserContext';

const Header = () => {
  const { itemCount } = storeContext();
  // console.log(`itemcount is ${itemCount}`);
  const [openMenu, setOpenMenu] = useState(false);

  const { userInfo } = userInfoContext();

  return (
    <div
      id='header'
      className='font-titleFont  w-full h-20 border-b-[1px] top-0 left-0 bg-white z-40 sticky '
    >
      <div className='max-w-5xl h-full mx-auto  items-center flex justify-between px-10 xl:px-0'>
        {/* for logo on left */}
        <Link to={'/'}>
          <img
            src={logo}
            alt='nancy market logo'
            className='w-20 rounded-md '
          />
        </Link>

        {/* for links tab on right */}
        <div
          className={`relative w-3/4 sm:w-auto bg-white sm:items-center gap-2 flex flex-col sm:flex sm:flex-row  ease-in-out sm:translate-y-0 py-5 sm:py-0  ${
            openMenu
              ? 'translate-y-1/2 duration-700 ease-in-out'
              : '-translate-y-[800px] '
          }`}
        >
          <ul className='flex sm:flex-row flex-col gap-2 mx-auto '>
            <AiOutlineClose
              size={36}
              onClick={() => setOpenMenu(false)}
              className={`${
                openMenu ? 'block' : 'hidden'
              } sm:hidden absolute right-3 top-2 text-skin-base `}
            />
            <LinkTab handleclick='/'>home</LinkTab>
            <LinkTab>pages</LinkTab>
            <LinkTab>shop</LinkTab>
            <LinkTab>element</LinkTab>
            {/* <LinkTab>blog</LinkTab> */}
            <a href="https://sailingdigital.online" className={` text-skin-base font-bold hover:text-skin-prime_blue hover:underline underline-offset-4 decoration-2 cursor-pointer duration-300 `}>blog</a>
            <LinkTab handleclick='/cart' custom={`sm:hidden`}>
              Go to cart ({itemCount} items )
            </LinkTab>
          </ul>
          <Link
            to='cart'
            className={`hidden sm:inline-block relative text-skin-prime_yellow ${iconHover} `}
          >
            <AiOutlineShopping size={36} />
            <span
              className={`absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/4 text-xs  font-semibold  `}
            >
              {itemCount}
            </span>
          </Link>
          <Link to='/login' className={`${iconHover}`}>
            <img
              src={
                userInfo
                  ? userInfo.photoURL
                  : 'https://images.pexels.com/photos/1162639/pexels-photo-1162639.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              className='w-8 h-8 rounded-full mx-auto '
              alt=''
            />
          </Link>
          <p className='text-xs text-skin-base'>{userInfo?.email}</p>
        </div>
        {/* for hamburger menu */}
        <div
          className={`sm:hidden text-skin-base ${
            openMenu ? 'hidden' : 'inline-block'
          }`}
        >
          <RxHamburgerMenu size={36} onClick={() => setOpenMenu(true)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
