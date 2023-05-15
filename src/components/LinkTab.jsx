import React from 'react';
import { Link } from 'react-router-dom';

const LinkTab = ({ children, handleclick, custom }) => {
  return (
    <li
      className={` text-skin-base font-bold hover:text-skin-prime_blue hover:underline underline-offset-4 decoration-2 cursor-pointer duration-300 ${custom}`}
    >
      <Link to={handleclick}>{children} </Link>
    </li>
  );
};

export default LinkTab;
