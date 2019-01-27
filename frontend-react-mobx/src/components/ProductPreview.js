import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';




@inject('productsStorage')
@observer
export default class ProductPreview extends React.Component {

  

  render() {
    const { product } = this.props;
    console.log(product.categoryList)
    //console.log(product.categoryList.map(tag => tag))
    return (
      <div className="products-container__product-preview">
        <img src={product.image} className="products-container__img" alt={product.slug}/>
        <div className="products-container__info">
          <h4 className="products-container__title">{product.name}</h4>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.saler.username}</p>
          <p>{product.slug}</p> 
        </div>
      </div>
    );
  }
}
