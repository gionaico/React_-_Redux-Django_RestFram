import {
  SET_PAGE,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
        currentPage: action.page
      };

    default:
      return state;
  }
};
