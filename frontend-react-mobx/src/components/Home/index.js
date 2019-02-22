
import MainView from './MainView';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import './home.sass';

@inject('commonStore')
@withRouter
@observer
export default class Home extends React.Component {
  render() {
    const categories = [
        "Php",
        "Javascript",
        "Programacion C",
        "Audio",
        "Elctrodomesticos",
        "Informatica"
      ];
      
    return (
      <section className="home-page">
            <MainView categories={categories}/>            
      </section>
    );
  }
}
