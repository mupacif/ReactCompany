/* Packages */
import React, { Component } from 'react';

/* Components */
import ProductCard from '../../../components/ProductCard/ProductCard';

class Home extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    fetch('https://api.zalando.com/articles')
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  render() {

    const products = this.state.products.map((product) => {
        return <ProductCard key={ product.id }
                  id={ product.id }
                  title={ product.title }
                  body={ product.body }/>;
    });

    return(
      <div>
        <h1 className="uk-text-center">Home</h1>
        <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match products" data-uk-grid>
          { products }
        </div>
      </div>
    );

  };
}

export default Home;
