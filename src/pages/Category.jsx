import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';

const Category = () => {
  const { state } = useLocation();
  console.log(state.category);
  return <dib>Category</dib>;
};

export default Category;
