import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Swal from "sweetalert2";
import Slider from "react-slick";

import RedError from '../RedError';
import arrow_l from './media/arrow_l.png';
import arrow_r from './media/arrow_r.png';
import { NavLink } from 'react-router-dom'
import Hero from '../Hero';
import Page from "../Page";
import Loader from '../Loader';
import banner from './media/contacto_bg.png'
import "./products-details.scss";

function SampleNextArrow(props) {
  const { className,  onClick } = props;
  return (
    <img src={arrow_r} 
      className={className}
      onClick={onClick}
      alt = "Ir a la siguiente"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img src={arrow_l}
      className={className}
      onClick={onClick}
      alt = "Ir a la anterior"
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

@inject('productsStorage', "userStore")
@withRouter
@observer
export default class ProductDetails extends React.Component {
  
  constructor(props) {
    super(props)
    this.slug=this.props.match.params.id;
    this.state = {
      textComment:""
    };
    this.handleClick = this.handleClick.bind(this);
    this.product
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

  handleClick(product, user) {
    console.log(product, user)
    if (user) {
      this.props.productsStorage.Comentar(product.slug, { body: this.state.textComment });
      this.setState({textComment: ""});
    }else{
       const Toast = Swal.mixin({
         toast: true,
         position: 'center',
         showConfirmButton: false,
         timer: 5000,
       });

       Toast.fire({
         type: 'error',
         title: 'You need to login in before to do a comment'
       })
    }
  }
  
  handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const {  userStore } = this.props;
    const { currentUser } = userStore;
    const product = this.props.productsStorage.getProduct(this.slug);
    const {
      productosDeCategoriasRe,
      isLoading,
      comentariosAll
    } = this.props.productsStorage;
    let slider, comments;
    if (isLoading) return (<Loader prueba="pooopo"/>)
    if (!product) return (<RedError message="Can't load product" />);
    
    if (!comentariosAll) return ( < RedError message = "Can't load product"/> );
    
    console.log("-+++++++++++++ comentariosAll", comentariosAll, "-+++++++++++++", currentUser, productosDeCategoriasRe)


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

    if (comentariosAll) {
      comments=(
        <div className="comments">
          <Page title="Comentarios sobre este producto" />
          {comentariosAll.map((item, key) => 
            <div className="comments-text" key={key}>
              <p>{item.body}</p>
              <img src={item.saler.image} className="comments-img__user" alt={`User ${item.saler.username}`}/>
              <span className={`${(key+1)%2==0?"p1":"p2"}`}>{item.saler.username}</span>
            </div>)}

            <textarea value={this.state.textComment} name="textComment" onChange={(e)=>this.handleChange(e)} rows="4" cols="50"></textarea>            
            <button type="button" onClick={()=>this.handleClick(product, currentUser)} class="btn btn-large btn-block btn-primary">Enviar</button>
            
            
        </div>)
    }
    
    return (

      <div>
        <Hero title="Detalle de producto" bg={banner}/>

        
        <section className="product-section">          
          <img className="product-section__img" src={product.image} alt={product.slug}/> 
          <div className="product-section__inform">
              <p className="product-section__text">
                <strong className="product-section__strong">Nombre del curso:</strong>{product.name}
              </p>

              <p className="product-section__text">
                <strong className="product-section__strong">Precio del curso:</strong>{product.price}
              </p>

              <p className="product-section__text">
                <strong className="product-section__strong">Usuario creador del curso:</strong>{product.saler.username}
              </p>

              <p className="product-section__text">
                <strong className="product-section__strong">Descripcion:</strong>{product.description}
              </p>
          </div>
        </section>


        {slider}

        
        {comments}

      </div>
    );
  }
}
