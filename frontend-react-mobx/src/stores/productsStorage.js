import { observable, action, computed } from 'mobx';
import agent from '../agent';

const LIMIT = 10;

export class ProductsStore {

  @observable isLoading = false;
  @observable page = 0;
  @observable totalPagesCount = 0;
  @observable predicate = {};
  @observable productsRegistry = observable.map();
  
  @computed get products() {
    return this.productsRegistry.values();
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
    if (JSON.stringify(predicate) === JSON.stringify(this.predicate)) return;
    this.clear();
    this.predicate = predicate;
  }
  
  $req() {
    if (this.predicate.category) return agent.Products.byCategory(this.predicate.category, this.page, LIMIT);
    if (this.predicate.saler) return agent.Products.bySaler(this.predicate.saler, this.page, LIMIT);
    return agent.Products.all(this.page, LIMIT, this.predicate);
  }

  @action loadProducts() {
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
        return product;
      }))
      .finally(action(() => { this.isLoading = false; }));
  }

  @action createProduct(product) {
    return agent.Products.create(product)
      .then(({ product }) => {
        this.productsRegistry.set(product.slug, product);
        return product;
      })
  }

  @action updateProduct(data) {
    return agent.Products.update(data)
      .then(({ product }) => {
        this.productsRegistry.set(product.slug, product);
        return product;
      })
  }

  @action deleteProduct(slug) {
    this.productsRegistry.delete(slug);
    return agent.Products.del(slug)
      .catch(action(err => {
        this.loadProducts();
        throw err;
      }));
  }
}

export default new ProductsStore();
