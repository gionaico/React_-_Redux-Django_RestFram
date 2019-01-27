import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import MainView from './MainView';
import './products.sass';

@inject('commonStore')
@withRouter
@observer
export default class Products extends React.Component {

  componentDidMount() {
    
  }
  render() {
    
    return (
      <div className="products-container">
            lllega0000000000s
            <MainView />
      </div>
    );
  }
}
