import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productArray: [],
  cartArray: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    newCartArray: (state, action) => {
      state = { ...state };
      state.cartArray = action.payload;

      return state;
    },
    clearProduct: state => {
      state = { ...state };
      state.productArray = [];

      return state;
    },
    newProductArray: (state, action) => {
      state = { ...state };
      state.productArray = action.payload;

      return state;
    },
    pushCartProducts: (state, action) => {
      state.cartArray.push(action.payload);
    },
  },
});

export const removeCartProduct = value => (dispatch, getState) => {
  let val = getCartProducts(getState());
  let newState = val.filter(item => {
    return item.id !== value;
  });
  dispatch(newCartArray(newState));
};

export const fetchCartProducts =
  (path = '') =>
  async (dispatch, getState) => {
    const res = await fetch(`https://fakestoreapi.com/products/${path}`);
    const products = await res.json();
    dispatch(pushCartProducts(products));
  };

export const fetchProducts =
  (path = '') =>
  async (dispatch, getState) => {
    dispatch(clearProduct());
    const res = await fetch(`https://fakestoreapi.com/products/${path}`);
    const products = await res.json();
    dispatch(newProductArray(products));
  };

export const getProducts = state => state.product.productArray;

export const getCartProducts = state => state.product.cartArray;

export const { newCartArray, clearProduct, pushCartProducts, newProductArray } =
  productSlice.actions;

export default productSlice.reducer;
