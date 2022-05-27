import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCartProducts,
  removeCartProduct,
} from '../../features/product/productSlice';

function CartProduct(props) {
  const dispatch = useDispatch();
  let pro = useSelector(getCartProducts);
  console.log(pro);
  const Product = props =>
    pro.map(entry => (
      <div className="cartcard" key={entry.id}>
        <div className="proImg">
          <img src={entry.image} alt={entry.title} />
        </div>
        <div className="desc">
          <h3>{entry.title}</h3>
          <p>$ {entry.price}</p>
          <button onClick={() => dispatch(removeCartProduct(entry.id))}>
            Delete
          </button>
        </div>
      </div>
    ));
  let subtotal = 0;
  let total = 0;
  let shipping = '0  (Free!)';
  pro.forEach(elem => {
    subtotal = subtotal + elem.price;
  });
  if (subtotal < 30) {
    shipping = 9.99;
  }
  total = subtotal + parseFloat(shipping);
  subtotal = subtotal.toFixed(2);
  total = total.toFixed(2);
  let data = Product(props);
  return (
    <>
      <div className="cartdata">{data}</div>
      <div className="carttotal">
        <div className="ctotal">
          <h3>Cart Total</h3>
        </div>
        <div className="subtotal">
          <h4>Subtotal:</h4>
          <h4>${subtotal}</h4>
        </div>
        <div className="shipping">
          <h4>Shipping</h4>
          <h5>Shipping Charges:</h5>
          <h5>${shipping}</h5>
        </div>
        <div className="total">
          <h4>TOTAL:</h4>
          <h4>${total}</h4>
        </div>
        <button>Proceed To Checkout</button>
      </div>
    </>
  );
}

export default CartProduct;
