import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter, NavLink, Link } from 'react-router-dom'
import Slider from "react-slick";

import MainBanner from "../MainBanner";
import Page from "../Page";
import {Utils} from './../../utils/utilsFunctions'

import slider1 from './media/slider1.png';
import slider2 from './media/slider2.png';
import slider3 from './media/slider3.png';
import ico1 from './media/ico1.svg';
import arrow_l from './media/arrow_l.png';
import arrow_r from './media/arrow_r.png';



function SampleNextArrow(props) {
  const { className,  onClick } = props;
  return (
    <img src={arrow_r} 
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img src={arrow_l}
      className={className}
      onClick={onClick}
    />
  );
}

const urlPublicMedia = "/media"

const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      speed: 50,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};


@inject('commonStore', 'userStore', 'productsStorage')
@withRouter
@observer
export default class MainView extends React.Component {

  constructor(props){
    super()
    this.filterProducts = this.filterProducts.bind(this)
  }
  componentWillMount() {

  }

  componentDidMount() {
    /* this.props.articlesStore.loadArticles(); */
  }

  componentDidUpdate(previousProps) {
    
  }

  filterProducts(category) {
    this.props.productsStorage.setPredicate({
      category: Utils.capitalizar(category.toLowerCase())
    });
  }
  

  render() {
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
        
  
    
    /* {ic.imagen} */
    
    return (
      <div>

        <MainBanner list={listMainBanner}/>    

        <Page title="este es un titulo" html="texto html" subtitle="este es un subtitulo"/>

        <div className="containerSlider" style={{padding:"30px"}}>
          <Slider {...settings}>
            {this.props.categories.map((ic, i) => (
              <div key={i} className="prueba divTimelineElem">
                <img className="imgCarrusel" src={`${urlPublicMedia}/${ic.toLowerCase()}.jpg`} alt="" />
                <Link to="/products" onClick={()=>this.filterProducts(ic)}><p className="textYear">{ic}</p></Link>                
              </div>
            ))}          
          </Slider>
        </div>
     
      </div>
    );
  }
};
