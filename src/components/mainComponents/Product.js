import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCartProducts,
  getProducts,
} from '../../features/product/productSlice';
function Product(props) {
  let pro = useSelector(getProducts);
  const dispatch = useDispatch();
  const Product = props =>
    pro.map(entry => (
      <div className="card" key={entry.id}>
        <div className="proImg">
          <img src={entry.image} alt={entry.title} />
        </div>
        <div className="desc">
          <h3>{entry.title}</h3>
          <p>$ {entry.price}</p>
          <button onClick={() => dispatch(fetchCartProducts(entry.id))}>
            Add To Cart
          </button>
        </div>
      </div>
    ));

  let data = Product(props);
  return <>{data}</>;
}

export default Product;
