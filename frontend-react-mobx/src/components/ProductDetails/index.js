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
  

  render() {
    
    let slider, comments;
    

    
    const  product= {
        "saler": {
          "username": "gionaico",
          "bio": "",
          "image": "",
          "following": false
        },
        "name": "AngularJS desde 0",
        "price": "18.00",
        "description": "Aprende un de los frameworks mas populares.",
        "slug": "AngularJS",
        "image": "https://as2.ftcdn.net/jpg/00/73/01/33/500_F_73013357_eDyPWw1tmiYMuGQW4BW71FKEdQG8MF3r.jpg",
        "categoryList": ["Javascript", "Informatica"],
        "createdAt": "2019-01-27T22:34:50.228101+00:00",
        "updatedAt": "2019-01-27T22:34:50.228144+00:00"
      }
    
    
     const productosDeCategoriasRe= [{
        "saler": {
          "username": "gionaico",
          "bio": "",
          "image": "",
          "following": false
        },
        "name": "NodeJS",
        "price": "35.00",
        "description": "Aprende nodeJS en empieza a trabajar en backend",
        "slug": "NodeJS-basico",
        "image": "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png",
        "categoryList": ["Javascript", "Informatica"],
        "createdAt": "2019-01-27T22:36:39.355837+00:00",
        "updatedAt": "2019-01-27T22:36:39.355867+00:00"
      }, {
        "saler": {
          "username": "gionaico",
          "bio": "",
          "image": "",
          "following": false
        },
        "name": "AngularJS desde 0",
        "price": "18.00",
        "description": "Aprende un de los frameworks mas populares.",
        "slug": "AngularJS",
        "image": "https://as2.ftcdn.net/jpg/00/73/01/33/500_F_73013357_eDyPWw1tmiYMuGQW4BW71FKEdQG8MF3r.jpg",
        "categoryList": ["Javascript", "Informatica"],
        "createdAt": "2019-01-27T22:34:50.228101+00:00",
        "updatedAt": "2019-01-27T22:34:50.228144+00:00"
      }, {
        "saler": {
          "username": "gionaico",
          "bio": "",
          "image": "",
          "following": false
        },
        "name": "Material-ui",
        "price": "50.00",
        "description": "Conviertete en un experto manejando material ui",
        "slug": "CSS3-Material-ui",
        "image": "https://cdn.pixabay.com/photo/2016/08/04/10/37/office-1568780_960_720.jpg",
        "categoryList": ["Javascript", "Informatica"],
        "createdAt": "2019-01-27T22:31:56.372206+00:00",
        "updatedAt": "2019-01-27T22:31:56.372239+00:00"
      }, {
        "saler": {
          "username": "gionaico",
          "bio": "",
          "image": "",
          "following": false
        },
        "name": "Curso de jquery",
        "price": "15.99",
        "description": "este es un curso para aquellos que deseen obtener conocimientos sobre esta tecnologia enfocada a la telefonia movil.",
        "slug": "Jquery_para_movil",
        "image": "https://cdn.pixabay.com/photo/2014/09/14/01/13/jquery-444684_960_720.png",
        "categoryList": ["Javascript"],
        "createdAt": "2019-01-20T17:19:12.739312+00:00",
        "updatedAt": "2019-01-20T17:19:12.739462+00:00"
      }, {
        "saler": {
          "username": "gionaico",
          "bio": "",
          "image": "",
          "following": false
        },
        "name": "Javascript para princcipientes",
        "price": "9.99",
        "description": "Este curso va dirigido a aquellas personas que quieren iniciarse en el mundo de la programacion web.",
        "slug": "Programacion_javascript",
        "image": "https://cdn.pixabay.com/photo/2016/08/04/10/37/office-1568780_960_720.jpg",
        "categoryList": ["Javascript"],
        "createdAt": "2019-01-20T16:36:47.115718+00:00",
        "updatedAt": "2019-01-20T16:36:47.115748+00:00"
      }]
    
      const comentariosAll=[{
          "id": 12,
          "saler": {
            "username": "prueba10",
            "bio": "",
            "image": "https://cdn.pixabay.com/photo/2016/12/29/12/20/woman-1938429_960_720.jpg",
            "following": false
          },
          "body": "hola mundo",
          "createdAt": "2019-02-22T15:39:55.929990+00:00",
          "updatedAt": "2019-02-22T15:39:55.930042+00:00"
        }, {
          "id": 11,
          "saler": {
            "username": "prueba10",
            "bio": "",
            "image": "https://cdn.pixabay.com/photo/2016/12/29/12/20/woman-1938429_960_720.jpg",
            "following": false
          },
          "body": "ssssssssssss",
          "createdAt": "2019-02-22T15:33:23.262110+00:00",
          "updatedAt": "2019-02-22T15:33:23.262153+00:00"
        }, {
          "id": 9,
          "saler": {
            "username": "prueba10",
            "bio": "",
            "image": "https://cdn.pixabay.com/photo/2016/12/29/12/20/woman-1938429_960_720.jpg",
            "following": false
          },
          "body": "hola prueba 5",
          "createdAt": "2019-02-22T02:24:43.122774+00:00",
          "updatedAt": "2019-02-22T02:24:43.122808+00:00"
        }, {
          "id": 8,
          "saler": {
            "username": "prueba10",
            "bio": "",
            "image": "https://cdn.pixabay.com/photo/2016/12/29/12/20/woman-1938429_960_720.jpg",
            "following": false
          },
          "body": "fgdfgdf",
          "createdAt": "2019-02-22T02:23:16.824195+00:00",
          "updatedAt": "2019-02-22T02:23:16.824243+00:00"
        }, {
          "id": 7,
          "saler": {
            "username": "prueba10",
            "bio": "",
            "image": "https://cdn.pixabay.com/photo/2016/12/29/12/20/woman-1938429_960_720.jpg",
            "following": false
          },
          "body": "dsfsdgghfghfgh",
          "createdAt": "2019-02-22T02:22:53.062950+00:00",
          "updatedAt": "2019-02-22T02:22:53.063004+00:00"
        }, {
          "id": 6,
          "saler": {
            "username": "prueba10",
            "bio": "",
            "image": "https://cdn.pixabay.com/photo/2016/12/29/12/20/woman-1938429_960_720.jpg",
            "following": false
          },
          "body": "ssssssssssssssssssssssss",
          "createdAt": "2019-02-22T02:19:38.728023+00:00",
          "updatedAt": "2019-02-22T02:19:38.728070+00:00"
        }, {
          "id": 5,
          "saler": {
            "username": "uno",
            "bio": "",
            "image": "https://api.adorable.io/avatars/285/i.png",
            "following": false
          },
          "body": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed minus adipisci cumque, explicabo natus veritatis officia maxime deserunt nulla hic, beatae provident? Quam neque vitae eius veritatis voluptatibus quisquam consequuntur?",
          "createdAt": "2019-02-21T01:36:23.027325+00:00",
          "updatedAt": "2019-02-21T01:36:23.027358+00:00"
        }, {
          "id": 4,
          "saler": {
            "username": "a",
            "bio": "",
            "image": "https://api.adorable.io/avatars/285/i.png",
            "following": false
          },
          "body": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed minus adipisci cumque, explicabo natus veritatis officia maxime deserunt nulla hic, beatae provident? Quam neque vitae eius veritatis voluptatibus quisquam consequuntur?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed minus adipisci cumque, explicabo natus veritatis officia maxime deserunt nulla hic, beatae provident? Quam neque vitae eius veritatis voluptatibus quisquam consequuntur?",
          "createdAt": "2019-02-21T01:36:02.916300+00:00",
          "updatedAt": "2019-02-21T01:36:02.916336+00:00"
        }, {
          "id": 3,
          "saler": {
            "username": "prueba15",
            "bio": "sxdazvf",
            "image": "https://api.adorable.io/avatars/285/i.png",
            "following": false
          },
          "body": "Lorem ipsum dolor sit amet consectetur, adipisicin",
          "createdAt": "2019-02-21T01:35:47.948762+00:00",
          "updatedAt": "2019-02-21T01:35:47.948835+00:00"
        }, {
          "id": 2,
          "saler": {
            "username": "prueba10",
            "bio": "",
            "image": "https://cdn.pixabay.com/photo/2016/12/29/12/20/woman-1938429_960_720.jpg",
            "following": false
          },
          "body": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed minus adipisci cumque, explicabo natus veritatis officia maxime deserunt nulla hic, beatae provident? Quam neque vitae eius veritatis voluptatibus quisquam consequuntur?",
          "createdAt": "2019-02-21T01:35:23.626725+00:00",
          "updatedAt": "2019-02-21T01:35:23.626754+00:00"
        }]
      

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

            <textarea  name="textComment" rows="4" cols="50"></textarea>            
            <button type="button" class="btn btn-large btn-block btn-primary">Enviar</button>
            
            
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
