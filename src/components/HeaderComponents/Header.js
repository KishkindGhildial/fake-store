import Heading from './Heading';
import List from './List';
import './Header.css';
import cart from '../../Assets/shoppingCart.png';
import React from 'react';

function Header(props) {
  const navitem = [
    'Electronics',
    'Jewelery',
    "Men's Clothing",
    "Women's Clothing",
  ];

  return (
    <div className="header">
      <div className="home">
        <Heading>Hyper-Market</Heading>
      </div>
      <div className="navC">
        <List contents={navitem} />
      </div>
      <div className="cart">
        <img
          alt="cart"
          onClick={() => {
            props.handleCartClick();
          }}
          src={cart}
        />
        <p className="itemnum">{props.len}</p>
      </div>
    </div>
  );
}

export default Header;
