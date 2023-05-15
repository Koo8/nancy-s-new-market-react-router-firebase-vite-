import React from 'react';
import axios from 'axios';

export const dataLoader = async () => {
  return await axios.get('https://fakestoreapi.com/products');
};

// how to cache data uploaded with Context?
