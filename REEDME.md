

## Develoment
    sweetalert2 https://sweetalert2.github.io/
    sass-loader to have css by modules.
    jsdoc to document my code.
    Django relations (many to many, one to many) 
    Productos de la misma cadegoria sugeridos en la vista details
    Reutilizacion de componentes.
    Mobx
    react-hooks 
    Pagination
    Slug - busqueda por slug 
    Product-List
    Product-Details
    Social-Login Firebase
    Update profile
    Visualizar comentarios de un producto en la vista detalles-product
    Crear comentarios de un producto en la vista detalles-product

    *En la parte de redux
    Tiene el form con redux-form/validation y sweet alerts.



## Dis. Interfices
    
   
Etiquetas html5 
- [head, title, main](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/public/index.html)
- [nav](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Header.js)
- [section](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Loader/index.js)
- [address](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Footer/index.js)
- [picture](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Header.js)
- [Humans.txt/Robots.txt](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/public)

BEM
He intentado utilizar "BEM" la mayoria de veces, sin embargo en ocasiones resulta dificil, ya que si en codigo cambias un div "padre" de lugar, este deja de ser el elemento raiz de un conjunto y pierdo un poco la referencia primera.
- [fichero](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Products/products.sass)
- [address](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Footer/Footer.scss)

Clases y variables globales - [sass/scss](https://github.com/gionaico/React_-_Redux-Django_RestFram/tree/master/frontend-react-mobx/src/styles.sass)
    
sass/scss
- [fichero Products](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Products/products.sass)
- [fichero Footer](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Footer/Footer.scss)
- [fichero loader](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Loader/loader.scss)
- [fichero Hero](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Hero/Hero.sass)
- [fichero home](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Home/home.sass)
- [fichero MainBanner](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/MainBanner/MainBanner.sass)
- [fichero Page](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Page/Page.sass)

Animaciones svg con scss
- [fichero loader](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Loader/loader.scss)
- [fichero index](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Loader/index.js)
    
Efecto acordeon
    Las imagenes tienen un efecto acordeos segun pasemos sobre ellas
- [fichero](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/MainBanner/MainBanner.sass)

Efecto Saturation
    La imagen toma unos bordes y la satura para crear un mayor contraste 
- [fichero](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Home/home.sass)   .imgCarrusel

Efecto con Transition
    Expande la imagen al hacer hover sobre la imagen
- [fichero](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Products/products.sass)  .products-container__img

Grid/Flex
    Grid-Layout (auto-fill auto-fit, gap ...)
- [fichero products](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Products/products.sass)
- [fichero MainBanner](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/MainBanner/MainBanner.sass)
- [fichero Footer](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Footer/Footer.scss)
- [fichero Hero](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Hero/Hero.sass)
- [fichero loader](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Loader/loader.scss)

MediaQueries (print/min/max)
    Al ser un proyecto sin aun mucha envergadura no me ha sido necesario usar tanto el tema de media queries ya que en su lugar uso grid-templeate-columns seguido por repeat(auto-fill .....) esto hace que el control con las unidades "fr" me facilite el tema de la distrubucion de los elementos cuando la pantalla crece o disminuye. En cuanto al tema de queries to print si que provoca que oculte el menu y el footer y que distrubuya unos cuantos elementos usando la media query especifica.
- [fichero details](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/ProductDetails/products-details.scss)
- [fichero home](https://github.com/gionaico/React_-_Redux-Django_RestFram/blob/master/frontend-react-mobx/src/components/Home/home.sass)
- [fichero styles](https://github.com/gionaico/React_-_Redux-Django_RestFram/tree/master/frontend-react-mobx/src/styles.sass)

    


    

    

        

