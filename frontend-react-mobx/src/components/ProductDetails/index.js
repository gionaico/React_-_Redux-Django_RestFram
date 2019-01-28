import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import RedError from '../RedError';



@inject('productsStorage')
@withRouter
@observer
export default class ProductDetails extends React.Component {
  componentDidMount() {
    const slug = this.props.match.params.id;
    console.log("slug----------", slug)
    this.props.productsStorage.loadProduct(slug, { acceptCached: true });
  }
  

  render() {
    const slug = this.props.match.params.id;
    console.log("slug render() ----------", slug)
    const product = this.props.productsStorage.getProduct(slug);
    
    if (!product) return <RedError message="Can't load article" />;
    console.log(product, product.image)
    return (
      <div>
        <img src={product.image}/> 
      </div>
    );
  }
}
