import ListPagination from './ListPagination';
import LoadingSpinner from './LoadingSpinner';
import React from 'react';

import ProductPreview from './ProductPreview';

const ProductsList = props => {
  if (props.loading && props.products.length === 0) {
    return (
      <LoadingSpinner />
    );
  }

  if (props.products.length === 0) {
    return (
      <div className="article-preview">
        No products are here... yet.
      </div>
    );
  }

  return (
    <div className="products-container__product-list-cont centrar-by-margin">
      <div className="products-container__product-list">
        {
          props.products.map(product => {
            return (
              <ProductPreview product={product} key={product.slug} />
            );
          })
        }
      </div>

      <ListPagination
        onSetPage={props.onSetPage}
        totalPagesCount={props.totalPagesCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ProductsList;
