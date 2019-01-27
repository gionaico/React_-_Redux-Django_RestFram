import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter, NavLink } from 'react-router-dom'

import ProductsList from '../ProductsList';



@inject('productsStorage')
@withRouter
@observer
export default class MainView extends React.Component {

  componentWillMount() {
    
  }

  componentDidMount() {
    this.props.productsStorage.loadProducts();
  }

  componentDidUpdate(previousProps) {
    
  }

  handleSetPage = page => {
    this.props.productsStorage.setPage(page);
    this.props.productsStorage.loadArticles();
  };

  render() {
    const { products, isLoading, page, totalPagesCount } = this.props.productsStorage;
    console.log(products, isLoading, page, totalPagesCount)
    
    
    return (
      <div>
        <div className="media">main home component</div>
        
        <ProductsList
          products={products}
          loading={isLoading}
          totalPagesCount={totalPagesCount}
          currentPage={page}
          onSetPage={this.handleSetPage}
        />

      </div>
    );
  }
};
