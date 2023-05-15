import React from 'react';

const Button = ({ children, handleClick, height }) => {
  return (
    <button
      onClick={handleClick}
      className={`border ${height}  font-normal text-lg flex items-center justify-center px-3 py-2 hover:bg-skin-base hover:text-white cursor-pointer duration-300 active:bg-skin-base`}
    >
      {children}
    </button>
  );
};

export default Button;
