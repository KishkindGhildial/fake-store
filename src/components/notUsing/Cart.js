import React from 'react';
import CartProduct from '../CartProduct';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartProduct: [] };
    this.data = [];
    // this.cartProduct = [];
    this.fetchCartProducts = this.fetchCartProducts.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(props) {
    this.fetchCartProducts(this.props.cartList);
  }

  fetchCartData = async i => {
    const res = await fetch(`https://fakestoreapi.com/products/${i}`);
    const products = await res.json();
    console.log(products);
    this.data.push(products);
    // console.log(this.cartProducts);
  };

  fetchCartProducts = async cartList => {
    for (let i = 0; i < cartList.length; i++) {
      this.fetchData(cartList[i]);
    }
    this.setState({ cartProduct: this.data });
    // this.cartProduct = this.data;
  };
  render() {
    console.log(this.state.cartProduct);
    return <CartProduct Products={this.state.cartProduct} />;
  }
}

export default Cart;
