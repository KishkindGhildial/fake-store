import React, { Compoent } from 'react';

class MainContent extends Component {
  state = {
    products: [],
  };

  componentDidMount = async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products${this.props.path}`
    );
    const products = res.json();

    this.setState({ products });
  };

  render() {
    return <Product products={this.state.products} />;
  }
}

const Product = props =>
  props.products.map(entry => (
    <div className="card">
      <div className="proImg">
        <img src={entry.image} />
      </div>
      <div className="desc">
        <h3>{entry.title}</h3>
        <p>$ {entry.price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  ));
