// src/store/reducer.js

export const initialState = {
  user: null,
  cart: [],
  products: [],
  loading: false,
  error: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    case actionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
