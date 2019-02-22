import React from 'react';

import ProductPreview from './ProductPreview';

const ProductsList = props => {
  const products = [{
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
      "categoryList": [
        "Javascript",
        "Informatica"
      ],
      "createdAt": "2019-01-27T22:36:39.355837+00:00",
      "updatedAt": "2019-01-27T22:36:39.355867+00:00"
    },
    {
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
      "categoryList": [
        "Javascript",
        "Informatica"
      ],
      "createdAt": "2019-01-27T22:34:50.228101+00:00",
      "updatedAt": "2019-01-27T22:34:50.228144+00:00"
    },
    {
      "saler": {
        "username": "gionaico",
        "bio": "",
        "image": "",
        "following": false
      },
      "name": "PHP MVC",
      "price": "20.00",
      "description": "Aprende php MVC",
      "slug": "php-medio",
      "image": "https://as1.ftcdn.net/jpg/00/96/25/68/500_F_96256808_w3l5BKQiKWrg69nvNnPv3eRRb0QGgUiS.jpg",
      "categoryList": [
        "Php"
      ],
      "createdAt": "2019-01-27T22:33:23.840832+00:00",
      "updatedAt": "2019-01-27T22:33:23.840877+00:00"
    },
    {
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
      "categoryList": [
        "Javascript",
        "Informatica"
      ],
      "createdAt": "2019-01-27T22:31:56.372206+00:00",
      "updatedAt": "2019-01-27T22:31:56.372239+00:00"
    },
    {
      "saler": {
        "username": "gionaico",
        "bio": "",
        "image": "",
        "following": false
      },
      "name": "Curso de ilustrator para principiantes",
      "price": "15.99",
      "description": "Aprende a usar uno de los sofwares mas populares en diseno",
      "slug": "Ilustrator-Basic",
      "image": "https://cdn.pixabay.com/photo/2018/03/20/10/04/illustrator-3242713_960_720.jpg",
      "categoryList": [
        "Informatica"
      ],
      "createdAt": "2019-01-27T13:01:49.042463+00:00",
      "updatedAt": "2019-01-27T13:01:49.042495+00:00"
    },
    {
      "saler": {
        "username": "gionaico",
        "bio": "",
        "image": "",
        "following": false
      },
      "name": "Animaciones con CSS",
      "price": "20.50",
      "description": "Aprende a darle animaciones en tus imagenes y archivos js",
      "slug": "Animations-CSS",
      "image": "https://cdn.pixabay.com/photo/2016/08/04/10/37/office-1568780_960_720.jpg",
      "categoryList": [
        "Informatica"
      ],
      "createdAt": "2019-01-27T13:00:13.541952+00:00",
      "updatedAt": "2019-01-27T13:00:13.541983+00:00"
    },
    {
      "saler": {
        "username": "gionaico",
        "bio": "",
        "image": "",
        "following": false
      },
      "name": "CSS3-Avanzado",
      "price": "99.30",
      "description": "Conoce las novedades de css3",
      "slug": "CSS3-Avanzado",
      "image": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
      "categoryList": [
        "Informatica"
      ],
      "createdAt": "2019-01-27T12:59:11.050523+00:00",
      "updatedAt": "2019-01-27T12:59:11.050622+00:00"
    },
    {
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
      "categoryList": [
        "Javascript"
      ],
      "createdAt": "2019-01-20T17:19:12.739312+00:00",
      "updatedAt": "2019-01-20T17:19:12.739462+00:00"
    },
    {
      "saler": {
        "username": "gionaico",
        "bio": "",
        "image": "",
        "following": false
      },
      "name": "Php nivel avamzado",
      "price": "50.99",
      "description": "Nivel avanzado de php, conviertete en un profesional en esta area.",
      "slug": "php_avanzado",
      "image": "https://cdn.pixabay.com/photo/2017/02/14/19/16/php-2066704_960_720.jpg",
      "categoryList": [
        "Php"
      ],
      "createdAt": "2019-01-20T17:16:37.423273+00:00",
      "updatedAt": "2019-01-20T17:16:37.423298+00:00"
    },
    {
      "saler": {
        "username": "gionaico",
        "bio": "",
        "image": "",
        "following": false
      },
      "name": "Php nivel intermedio",
      "price": "20.99",
      "description": "Nivel medio de php, para personas con conocimientos basicos de php",
      "slug": "php_intermedio",
      "image": "https://cdn.pixabay.com/photo/2012/04/11/11/59/elephpant-27753_960_720.png",
      "categoryList": [
        "Php"
      ],
      "createdAt": "2019-01-20T17:14:57.924912+00:00",
      "updatedAt": "2019-01-20T17:14:57.924942+00:00"
    }
  ];
  
  return (
    <div className="products-container__product-list-cont centrar-by-margin">
      <div className="products-container__product-list">
        {
          products.map(product => {
            return (
              <ProductPreview product={product} key={product.slug} />
            );
          })
        }
      </div>
    </div>
  );
};

export default ProductsList;
