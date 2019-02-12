import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import RedError from '../RedError';
import Slider from "react-slick";
import arrow_l from './media/arrow_l.png';
import arrow_r from './media/arrow_r.png';
import { NavLink } from 'react-router-dom'
import Hero from '../Hero';
import Loader from '../Loader';
import banner from './media/contacto_bg.png'

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

const SETTINGS_SLIDER = {
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

@inject('productsStorage')
@withRouter
@observer
export default class ProductDetails extends React.Component {
  
  constructor(props) {
    super(props)
    this.slug=this.props.match.params.id;
    this.state = {}
  }

  componentDidMount() {
    /* alert("componentDidMount") */
    this.props.productsStorage.loadProduct(this.slug, { acceptCached: true });
  }
  componentWillUpdate(newProps) {
    const { match } = this.props;
    const prevPostId = match.params.id;
    const nextPostId = newProps.match.params.id;
    if(nextPostId && prevPostId !== nextPostId){
      this.slug = newProps.match.params.id;
      this.props.productsStorage.loadProduct(this.slug, { acceptCached: true });
    }
  }
 
  render() {
    const product = this.props.productsStorage.getProduct(this.slug);
    const { products,productosDeCategoriasRe, isLoading, page, totalPagesCount } = this.props.productsStorage;
    let slider;
    if (isLoading) return (<Loader prueba="pooopo"/>)
    if (!product) return (<RedError message="Can't load product" />);
    
    /* console.log("-+++++++++++++", productosDeCategoriasRe) */
    if (productosDeCategoriasRe) { //&& productosDeCategoriasRe.length>2
      slider=(
        <section className="containerSlider" style={{padding:"30px"}}>
            <Slider {...SETTINGS_SLIDER}>
              {productosDeCategoriasRe.map((ic, i) => (
                <div key={i} className="prueba divTimelineElem">
                  <img className="imgCarrusel" src={ic.image} alt="" />
                  <NavLink to={`/product/${ic.slug}`}>
                    <p className="textYear">{ic.name}</p>
                  </NavLink>                
                </div>
              ))}          
            </Slider>
        </section> )
    }else{
      slider =""
    }

    return (

      <div>
        <Hero title="Detalle de producto" bg={banner}/>

        
        <section>          
          <img src={product.image}/> 
          <div>
              <p>
                <strong>Nombre del curso:</strong>{product.name}
              </p>

              <p>
                <strong>Precio del curso:</strong>{product.price}
              </p>

              <p>
                <strong>Usuario creador del curso:</strong>{product.saler.username}
              </p>

              <p>
                <strong>Descripcion:</strong>{product.description}
              </p>
          </div>
        </section>


        {slider}


      </div>
    );
  }
}
