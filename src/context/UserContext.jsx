import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { initialUserState, userReducer } from './userReducer';
import { auth } from '../config/firebase';

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
  }, [state.userInfo]);

  const sign_in_google = (user) => {
    dispatch({
      type: 'SIGNIN',
      payload: {
        ...state,
        userInfo: user,
      },
    });
  };

  const sign_out_google = () => {
    dispatch({
      type: 'SIGNOUT',
      payload: {
        ...state,
        userInfo: null,
      },
    });
  };

  const value = {
    userInfo: state.userInfo,
    sign_in_google,
    sign_out_google,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const userInfoContext = () => {
  return useContext(UserContext);
};

// TODO: finish userContext, keep google sign in sync with state, change header login photo, process to checkout btn active only with signed in user.
