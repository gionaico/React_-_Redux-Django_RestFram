import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import commonStore from './stores/commonStore';
import authStore from './stores/authStore';

const superagent = superagentPromise(_superagent, global.Promise);

/* const API_ROOT = 'https://conduit.productionready.io/api'; */
const API_ROOT = 'http://localhost:4000/api';
/* "custom-react-scripts": "0.2.0", */
const encode = encodeURIComponent;

const handleErrors = err => {
  if (err && err.response && err.response.status === 401) {
    authStore.logout();
  }
  return err;
};
/* http: //0.0.0.0:4000/api/products?category=Javascript&page=1
http: //0.0.0.0:4000/api/products?category=Javascript&limit=10&offset=10 */

const responseBody = res => {console.log(res); return res.body};

const tokenPlugin = req => {
  if (commonStore.token) {
    req.set('authorization', `Token ${commonStore.token}`);
  }
};

const requests = {
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
};

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count, p) => { console.log("---", `limit=${count}&offset=${p ? p * count : 0}`); return `limit=${count}&offset=${p ? p * count : 0}`};
const omitSlug = article => Object.assign({}, article, { slug: undefined })

const Articles = {
  all: (page, lim = 10) =>
    requests.get(`/articles?${limit(lim, page)}`),
  byAuthor: (author, page, query) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag, page, lim = 10) =>
    requests.get(`/articles?tag=${encode(tag)}&${limit(lim, page)}`),
  del: slug =>
    requests.del(`/articles/${slug}`),
  favorite: slug =>
    requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () =>
    requests.get('/articles/feed?limit=10&offset=0'),
  get: slug =>
    requests.get(`/articles/${slug}`),
  unfavorite: slug =>
    requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    requests.post('/articles', { article })
};

const Comments = {
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`/articles/${slug}/comments`)
};

const Profile = {
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  get: username =>
    requests.get(`/profiles/${username}`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`)
};

/* --------------------------------------------------------------------------------------------- */


const Categories = {
  getAll: () => requests.get('/categories')
};

const Products = {
  /**
   * Hace peticiones con este formato
   * http: //0.0.0.0:4000/api/products?limit=2&offset=1 
   * @page La pagina que se quiere visualizar
   * @limit el numero de items por page
   */
  all: (page, lim = 10) =>
    requests.get(`/products?${limit(lim, page)}`),
  /**
   * Hace peticiones con este formato
   * @saler salerName guardado en DB
   * @page La pagina que se quiere visualizar
   * http: //0.0.0.0:4000/api/products?limit=2&offset=1 
   */
  bySaler: (saler, page) =>
    requests.get(`/products?saler=${encode(saler)}&${limit(5, page)}`),
  /**
   * Hace peticiones con este formato
   * @category tiene que ser uno de los nombres de la DB de lo contrario devuelve un objeto vacio
   * @page La pagina que se quiere visualizar
   * @limit el numero de items por page
   * http: //0.0.0.0:4000/api/products?category=Php
   * http: //0.0.0.0:4000/api/products?limit=2&offset=1 
   */
  byCategory: (category, page, lim = 10) =>
    requests.get(`/products?category=${encode(category)}&${limit(lim, page)}`),

  /**
   * http: //0.0.0.0:4000/api/products/basic_php
   * @slug es el SLUG que un producto concreto en la DB
   * Importante usar el metodo delete a la hora de enviar los datos y hacer pruebas en un software tipo postman
   */
  del: slug =>
    requests.del(`/products/${slug}`),
  /**
   * http: //0.0.0.0:4000/api/products/feed/?limit=10&offset=0
   * Trae todos los productos
   */
  feed: () =>
    requests.get('/products/feed/?limit=10&offset=0'),
  /**
   * http: //0.0.0.0:4000/api/products/basic_php
   * @slug es el SLUG que un producto concreto en la DB
   * Importante usar el metodo delete a la hora de enviar los datos y hacer pruebas en un software tipo postman
   */
  get: slug =>
    requests.get(`/products/${slug}`),



/******************************************************************************************************************************************************** */  
  update: product =>
    requests.put(`/products/${product.slug}`, {
      product: omitSlug(product)
    }),
  create: product =>
    requests.post('/products', {
      product
    })
};


export default {
  Products,
  Articles,
  Auth,
  Comments,
  Profile,
  Tags,
  Categories
};
