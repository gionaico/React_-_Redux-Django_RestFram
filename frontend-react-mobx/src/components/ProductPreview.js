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
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} className="products-container__img" alt={product.slug}/>
        </Link>
        <div className="products-container__info">
          <Link to={`/product/${product.slug}`}>
            <h4 className="products-container__title">{product.name}</h4>
          </Link>
          <p>{product.price} $</p>
          <p className="products-container__destacado">User: {product.saler.username}</p>
          {/* <p>{product.slug}</p>  */}
          <p className="products-container__descr">{product.description}</p>
        </div>
      </div>
    );
  }
}

