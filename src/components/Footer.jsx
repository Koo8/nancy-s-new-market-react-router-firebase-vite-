import React from 'react';
import { logo, paymentCards, iconHover } from '../assets/assetsIndex';
import { Link } from 'react-router-dom';
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiInstagramLine,
  RiDiscordLine,
  RiYoutubeLine,
} from 'react-icons/ri';
import {
  MdAccountCircle,
  MdShoppingCartCheckout,
  MdAddToHomeScreen,
  MdSupportAgent,
  MdEmail,
  MdSendToMobile,
  MdPhoneInTalk,
} from 'react-icons/md';
import { BsMailbox } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='w-full  bg-skin-base text-skin-prime_blue py-10'>
      <div className='max-w-screen-xl flex flex-col sm:flex-row gap-4 justify-between mx-auto font-titleFont px-6 xl:px-0'>
        <div className='flex flex-col gap-4'>
          <img src={logo} alt='' className='w-24 rounded-3xl' />
          <div className='hover:text-skin-prime_yellow'>
            <Link href='/'>@ nancynewmarket.com</Link>
          </div>
          <img
            src={paymentCards}
            alt='payment cards'
            className='w-48 bg-white'
          />
          <div className='flex gap-1  '>
            <RiFacebookCircleLine className={iconHover} />
            <RiTwitterLine className={iconHover} />
            <RiInstagramLine className={iconHover} />
            <RiDiscordLine className={iconHover} />
            <RiYoutubeLine className={iconHover} />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold'>Locat Us:</h2>
          <div className='font-thin text-xs flex flex-col gap-2 tracking-tighter '>
            <div className='flex gap-2 items-center'>
              <BsMailbox className={iconHover} />
              <p>1 New york Street, NY, US</p>
            </div>
            <div className='flex gap-2 items-center'>
              <MdEmail className={iconHover} />
              <p>nancynewmarket@yahoo.com</p>
            </div>
            <div className='flex gap-2 items-center'>
              <MdSendToMobile className={iconHover} />
              <p>123-456-7890</p>
            </div>
            <div className='flex gap-2 items-center'>
              <MdPhoneInTalk className={iconHover} />
              <p>245-347-2222</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold'>Profile</h2>
          <div className='font-thin text-xs flex flex-col gap-2 tracking-tighter '>
            <div className='flex gap-2 items-center'>
              <MdAccountCircle className={iconHover} />
              <p>my account</p>
            </div>
            <div className='flex gap-2 items-center'>
              <MdShoppingCartCheckout className={iconHover} />
              <p>check out</p>
            </div>
            <div className='flex gap-2 items-center'>
              <MdAddToHomeScreen className={iconHover} />
              <p>order tracking</p>
            </div>
            <div className='flex gap-2 items-center'>
              <MdSupportAgent className={iconHover} />
              <p>customer support</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold'>Subscribe</h2>
          <form action='' className='flex flex-col gap-3 max-w-[10rem]'>
            <input
              type='text'
              placeholder='email'
              className='bg-transparent border border-skin-prime_blue rounded-md px-4 outline-none hover:scale-105 duration-200'
            />
            <button
              type='button'
              //   type='submit'
              className='text-sm font-thin text-skin-prime_yellow hover:scale-105 duration-200 cursor-pointer border border-skin-prime_blue rounded-md px-4'
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
