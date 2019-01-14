import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
import contact from './reducers/contact';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
  article,
  articleList,
  auth,
  common,
  editor,
  home,
  contact,
  profile,
  settings,
  router: routerReducer,
  form: reduxFormReducer
});
