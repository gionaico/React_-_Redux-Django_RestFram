import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Hero from '../Hero';
import MainView from './MainView';
import './products.sass';
import banner from './media/contacto_bg.png'

@inject('commonStore')
@withRouter
@observer
export default class Products extends React.Component {

  componentDidMount() {
    
  }
  render() {
    
    return (
      <div>
        <Hero title="Nuestros cursos" bg={banner} />
        <div className="products-container">
              <MainView />
        </div>
      </div>
    );
  }
}
