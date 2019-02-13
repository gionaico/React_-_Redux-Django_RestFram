import ReactDOM from 'react-dom';
import promiseFinally from 'promise.prototype.finally';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools'
import firebase from 'firebase'

import App from './components/App';

import articlesStore from './stores/articlesStore';
import commentsStore from './stores/commentsStore';
import authStore from './stores/authStore';
import commonStore from './stores/commonStore';
import editorStore from './stores/editorStore';
import userStore from './stores/userStore';
import profileStore from './stores/profileStore';
import productsStorage from './stores/productsStorage';

const stores = {
  productsStorage,
  articlesStore,
  commentsStore,
  authStore,
  commonStore,
  editorStore,
  userStore,
  profileStore,
};

firebase.initializeApp({
    apiKey: "AIzaSyALE9IKqhLrVNpePEsYJTUolWWFPT3AtZ0",
    authDomain: "django-react-cursos.firebaseapp.com",
    databaseURL: "https://django-react-cursos.firebaseio.com",
    projectId: "django-react-cursos",
    storageBucket: "django-react-cursos.appspot.com",
    messagingSenderId: "320584218024"
})


// For easier debugging
window._____APP_STATE_____ = stores;

promiseFinally.shim();
useStrict(true);

ReactDOM.render((
  <div>
    <Provider {...stores}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
    <DevTools />
  </div>
), document.getElementById('root'));
