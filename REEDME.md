D
## Disign
    SASS implementation
    BEM methodology
    GRID
    FLEX
    ANIMATIONS
    SVG
    SVG-ANIMATIONS


## Develoment
    sass-loader to have css by modules.
    jsdoc to document my code.
    sweetalert2 https://sweetalert2.github.io/
    Mobx
    react-hooks 
    Pagination
    Slug 
    Django relations (many to many, one to many) 
    List
    Details
    Productos de la misma cadegoria sugeridos en la vista details
    Reutilizacion de componentes.



## Dis. Interfices
    
    Etiquetas html5 
        head, title, main =>> /public/index.html,
        nav ==> /src/componets/header.js, 
        section ==> /src/componets/loader/index.js   /src/componets/footer/index.js,,
        address ==> /src/componets/footer/index.js,
    
    Humans.txt/Robots.txt ==> /public

    Clases y variables globales sass/scss
        /src/styles.sass

    sass/scss
        /src/componets/products/products.sass,
        /src/componets/footer/footer.scss,
        /src/componets/loader/loader.scss,
        /src/componets/hero/hero.sass,
        /src/componets/home/home.sass,
        /src/componets/MainBanner/MainBanner.sass,
        /src/componets/Page/Page.sass,
        /src/componets/products/products.sass,
    
    Animaciones svg con scss
        /src/componets/loader/loader.scss,
        /src/componets/loader/index.js,
        
    Efecto acordeon
        Las imagenes tienen un efecto acordeos segun pasemos sobre ellas
        /src/componets/MainBanner/MainBanner.sass,
    Efecto Saturation
        La imagen toma unos bordes y la satura para crear un mayor contraste 
        /src/components/Home/home.sass  .imgCarrusel
    Efecto con Transition
        Expande la imagen al hacer hover sobre la imagen
        /src/components/Products/products.sass  .products-container__img

    Grid/Flex
        Grid-Layout (auto-fill, auto-fit, gap ...)
        /src/components/Products/products.sass
        /src/components/MainBanner/MainBanner.sass
        /src/components/Footer/Footer.scss
        /src/components/Hero/Hero.sass
        /src/components/Loader/loader.scss
    
    MediaQueries (print/min/max)
        Al ser un proyecto sin aun mucha envergadura no me ha sido necesario usar tanto el tema de media queries ya que en su lugar uso grid-templeate-columns seguido por repeat(auto-fill .....) esto hace que el control con las unidades "fr" me facilite el tema de la distrubucion de los elementos cuando la pantalla crece o disminuye. En cuanto al tema de queries to print si que provoca que oculte el menu y el footer y que distrubuya unos cuantos elementos usando la media query especifica.
        /src/components/ProductDetails/products-details.scss
        /src/components/Home/home.sass
        /src/styles.sass
    
    BEM
        /src/componets/products/products.sass,
        address ==> /src/componets/footer/footer.scss,


    

    

        



<picture>
    <source srcset="smaller.jpg, smaller_retina.jpg 2x" media="(max-width: 768px)">
    <source srcset="default.jpg, default_retina.jpg 2x">
    <img srcset="default.jpg, default_retina.jpg 2x" alt="My default image">
</picture>

    mejoras

    React social-login
    Faker Orm
    React GoogleMaps
    Codigo Generico
    react DRF-FileUploader
    React ApolloGraphQl
    Hoobs-React
    WhishList/Reviews
    codigo generico
    mas funcionalidad