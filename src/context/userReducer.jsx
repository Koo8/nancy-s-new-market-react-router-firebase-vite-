export const initialUserState = {
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
};

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SIGNIN':
      return {
        ...state,
        userInfo: payload.userInfo,
      };
    case 'SIGNOUT':
      return {
        ...state,
        userInfo: payload.userInfo,
      };
  }
};

// todo: check localStorage JSON
