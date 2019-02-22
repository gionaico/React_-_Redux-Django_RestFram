import { observable, action, computed } from 'mobx';
import agent from '../agent';

const LIMIT = 10;

export class ProductsStore {

  @observable isLoading = false;
  @observable page = 0;
  @observable totalPagesCount = 0;
  @observable predicate = {};
  @observable productosDeCategoriasRelacionadas = observable.map();
  @observable comentarios = observable.map();
  @observable productsRegistry = observable.map();
  
  @computed get products() {
    return this.productsRegistry.values();
  };

  @computed get productosDeCategoriasRe() {
    return this.productosDeCategoriasRelacionadas.values();
  };


  @computed get comentariosAll() {
    return this.comentarios.values();
  };

  clear() {
    this.productsRegistry.clear();
    this.page = 0;
  }

  getProduct(slug) {
    return this.productsRegistry.get(slug);
  }
  

  @action setPage(page) {
    this.page = page;
  }

  @action setPredicate(predicate) {
    alert("predicate")
    if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
    this.clear();
    this.predicate = predicate;
    console.log("@action setPredicate(predicate) {", this.predicate)
  }
  
  $req() {
    if (this.predicate.category) return agent.Products.byCategory(this.predicate.category, this.page, LIMIT);
    if (this.predicate.saler) return agent.Products.bySaler(this.predicate.saler, this.page, LIMIT);
    return agent.Products.all(this.page, LIMIT, this.predicate);
  }

  @action loadProducts() {
    alert("loadProducts")
    this.isLoading = true;
    return this.$req()
      .then(action( ({ products, productsCount }) => {
        this.productsRegistry.clear();
        console.log(products, productsCount)
        products.forEach(product => this.productsRegistry.set(product.slug, product));
        console.log(this.productsRegistry)
        this.totalPagesCount = Math.ceil(productsCount / LIMIT);
      }))
      .finally(action(() => { this.isLoading = false; }));
  }

  @action loadProduct(slug, { acceptCached = false } = {}) {
    
    if (acceptCached) {
      const product = this.getProduct(slug);
      if (product) return Promise.resolve(product);
    }
    this.isLoading = true;
    return agent.Products.get(slug)
      .then(action(({ product }) => {
        this.productsRegistry.set(product.slug, product);
        console.warn("--------",product.categoryList[0], this.productsRegistry)
        return product;
      }))
      .then( product => {
        agent.Products.byCategory(product.categoryList[0]).then(action( productRelacionados  => {

          console.info("productRelacionados-----", productRelacionados)
          this.productosDeCategoriasRelacionadas.clear();
          
          productRelacionados.products.forEach(product => this.productosDeCategoriasRelacionadas.set(product.slug, product));
          
          console.info("productRelacionados222-----", product, this.productosDeCategoriasRelacionadas)
          return productRelacionados;
        }))

        /*----------*/console.info("console.info(product)", product.slug)
        
        agent.Comentarios.getAll(product.slug).then(action(comentarios => {
          
          this.comentarios.clear();
          comentarios.results.forEach(productComent => this.comentarios.set(productComent.id, productComent));

          console.error("Comentarios.getAll......-----", comentarios, "this.comentarios", this.comentarios)
          
          return;
        }))

      })
      .finally(action(() => { this.isLoading = false; }));
  }

  @action Comentar(slug, comment) {
    console.log("$$$$$$$$$$llega")
    return agent.Comentarios.create(slug, comment)
      .then((w)=>{
        agent.Comentarios.getAll(slug).then(action(comentarios => {

          this.comentarios.clear();
          comentarios.results.forEach(productComent => this.comentarios.set(productComent.id, productComent));

          console.error("Comentarios.getAll......-----", comentarios, "this.comentarios", this.comentarios)

          return;
        }))
      })
      .catch(e=>console.error(e))
  }

 
}

export default new ProductsStore();
