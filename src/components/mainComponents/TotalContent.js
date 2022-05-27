import Header from '../HeaderComponents/Header';
import Product from './Product';
import CartProduct from './CartProduct';
import React, { useEffect, useState } from 'react';
import EmptyCart from './EmptyCart';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCartProducts,
  fetchProducts,
} from '../../features/product/productSlice';

export const NavClickContext = React.createContext();

function TotalContent() {
  const [isCart, setIsCart] = useState(false);
  const cartList = useSelector(getCartProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(''));
  }, [dispatch]);

  const category = async categorypath => {
    dispatch(fetchProducts(categorypath));
    setIsCart(false);
  };

  const handleCartClick = async () => {
    setIsCart(true);
  };
  return (
    <>
      <NavClickContext.Provider value={category}>
        <Header handleCartClick={handleCartClick} />
      </NavClickContext.Provider>

      <div className={isCart ? 'cartcontent' : 'maincontent'}>
        {isCart ? (
          <>{cartList.length ? <CartProduct /> : <EmptyCart />}</>
        ) : (
          <>
            <Product />
          </>
        )}
      </div>
    </>
  );
}

export default TotalContent;

// useEffect(() => {
//   async function fetchData() {
// You can await here
// const response = await MyAPI.getData(someId);
// ...
//   }
//   fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state
