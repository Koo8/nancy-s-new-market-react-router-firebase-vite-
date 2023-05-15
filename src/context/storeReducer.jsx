// a reducer is a switch statement is defining all the possible actions a context can perform,

//and only updating the part of the global state related to that action.

export default function storeReducer(state, action) {
  const { type, payload } = action; // this is determined by storecontext dispatch() that passed an object with 'type' and 'payload' keys
  switch (type) {
    case 'ADD_TO_CART':
      console.log('ADD TO CART', payload);
      return {
        ...state,
        products: payload.products,
        itemCount: payload.itemCount,
        total: payload.total,
      };
    case 'REMOVE':
      console.log('REMOVE', payload);
      return {
        ...state,
        products: payload.products,
        itemCount: payload.itemCount,
        total: payload.total,
      };
    case 'UPDATE':
      console.log('UPDATE', payload);
      return {
        ...state,
        products: payload.products,
        itemCount: payload.itemCount,
        total: payload.total,
      };

    case 'RESET':
      console.log('RESET', payload);
      return {
        ...state,
        products: payload.products,
        itemCount: payload.itemCount,
        total: payload.total,
      };

    default:
      throw new Error(`no case for type ${type} found in this storeReducer.`);
  }
}

export const initialState = {
  products: JSON.parse(localStorage.getItem('products')) || [],
  total: JSON.parse(localStorage.getItem('total')) || 0,
  itemCount: JSON.parse(localStorage.getItem('itemCount')) || 0,
};
