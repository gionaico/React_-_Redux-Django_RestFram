
import MainView from './MainView';
import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import './home.sass';

@inject('commonStore')
@withRouter
@observer
export default class Home extends React.Component {
  componentDidMount() {
    this.props.commonStore.loadCategories();
  }
  
  render() {
    const { categories, isLoadingCategories } = this.props.commonStore;
    
    console.log(categories, isLoadingCategories)
    if (isLoadingCategories)
        categories.map(i => console.log(i))

    return (
      <section className="home-page">
            <MainView categories={categories}/>            
      </section>
    );
  }
}
