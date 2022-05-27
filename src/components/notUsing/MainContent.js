import Product from '../Product';

import React, { Component } from 'react';

class MainContent extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   products: [],
    // };
    // this.showProducts = this.showProducts.bind(this);
  }

  // showProducts = async () => {
  //   console.log(this.props.path);
  //   const res = await fetch(
  //     `https://fakestoreapi.com/products${this.props.path}`
  //   );
  //   const products = await res.json();
  //   this.setState({ products });
  // };

  // componentDidMount = async () => {
  //   console.log(this.props.path);
  //   const res = await fetch(
  //     `https://fakestoreapi.com/products${this.props.path}`
  //   );
  //   const products = await res.json();
  //   this.setState({ products });
  // };

  // componentDidUpdate = async () => {
  //   console.log(this.props.path);
  //   const res = await fetch(
  //     `https://fakestoreapi.com/products${this.props.path}`
  //   );
  //   const products = await res.json();
  //   this.setState({ products });
  // };

  render() {
    // let data = this.gettpro();
    return (
      <div className="maincontent">
        <Product products={this.props.products} />
      </div>
    );
  }
}

// function MainContent(props) {
//   return (
//     <div className="maincontent">
//       <Product path={props.path} />
//     </div>
//   );
// }

export default MainContent;
