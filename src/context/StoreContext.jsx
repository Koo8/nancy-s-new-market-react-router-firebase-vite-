import { createContext, useContext, useEffect, useReducer } from 'react';
import storeReducer, { initialState } from './storeReducer';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // use Reducer
  const [state, action] = useReducer(storeReducer, initialState); // use 'dispatch' instead of 'action' is the convention, but since reducer is use 'state, action', I prefer this pair for useReducer() as well.

  useEffect(() => {
    localStorage.setItem('itemCount', JSON.stringify(state.itemCount));
    localStorage.setItem('products', JSON.stringify(state.products));
    localStorage.setItem('total', JSON.stringify(state.total));
  }, [state]);
  // functions that match action types of reducer
  // access state, make changes, then dispatch the changes,

  const addToCart = (product, count) => {
    if (count === 0) {
      return;
    }

    const productList = state.products;

    const findTheProduct = productList.find((item) => item.id === product.id);
    if (findTheProduct) {
      findTheProduct.howmany = Number(findTheProduct.howmany) + Number(count);
    } else {
      productList.push({ ...product, howmany: Number(count) });
    }

    const newcount = Number(state.itemCount) + Number(count);
    const totalCost = getTotal(productList);

    action({
      type: 'ADD_TO_CART',
      payload: {
        ...state,
        products: productList,
        itemCount: newcount,
        total: totalCost,
      },
    });
  };

  const removeItem = (item) => {
    const updated = state.products.filter((product) => product.id !== item.id);

    action({
      type: 'REMOVE',
      payload: {
        ...state,
        products: updated,
        itemCount: state.itemCount - item.howmany,
        total: getTotal(updated),
      },
    });
  };

  const updateItemQuan = (item, updatedValue) => {
    // update the key value directly

    let totalproducts;

    if (updatedValue === '0') {
      totalproducts = state.products.filter(
        (product) => product.id !== item.id
      );
      // console.log(`item removed`);
    } else {
      state.products.find((i) => i === item).howmany = updatedValue;
      totalproducts = state.products;
    }

    const newCount = totalproducts.reduce(
      (sum, product) => sum + Number(product.howmany), //Number() to cast string to number
      0
    );

    action({
      type: 'UPDATE',
      payload: {
        ...state,
        products: totalproducts,
        itemCount: newCount,
        total: getTotal(totalproducts),
      },
    });
  };

  const resetCart = () => {
    action({
      type: 'RESET',
      payload: {
        products: [],
        itemCount: 0,
        total: 0,
      },
    });
  };

  const getTotal = (products) => {
    return products.reduce(
      (sum, item) => sum + ((item.price.toFixed(2) * 100) / 100) * item.howmany,
      0
    );
  };

  const value = {
    total: state.total,
    products: state.products,
    itemCount: state.itemCount,
    addToCart,
    removeItem,
    updateItemQuan,
    resetCart,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const storeContext = () => {
  return useContext(StoreContext);
};
