import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter, NavLink } from 'react-router-dom'

import MainBanner from "../MainBanner";

import slider1 from './media/slider1.png';
import slider2 from './media/slider2.png';
import slider3 from './media/slider3.png';
import ico1 from './media/ico1.svg';

@inject( 'commonStore', 'userStore')
@withRouter
@observer
export default class MainView extends React.Component {

  componentWillMount() {

  }

  componentDidMount() {
    /* this.props.articlesStore.loadArticles(); */
  }

  componentDidUpdate(previousProps) {
    
  }

  

  render() {
    /* const { currentUser } = this.props.userStore;
    const { articles, isLoading, page, totalPagesCount } = this.props.articlesStore; */
    const listMainBanner = [{
        icon: ico1,
        iconText: "Alternativa 1",
        title: "title 1",
        text: "text 11111",
        bg: slider1,
        to: "/"
      },
      {
        icon: ico1,
        iconText: "Alternativa 2",
        title: "title 2",
        text: "text 22222",
        bg: slider2,
        to: "/"
      },
      {
        icon: ico1,
        iconText: "Alternativa 3",
        title: "title 3",
        text: "text 333333",
        bg: slider3,
        to: "/"
      },
    ]



    return (
      <div>
        <MainBanner list={listMainBanner}/>
        main home
      </div>
    );
  }
};
