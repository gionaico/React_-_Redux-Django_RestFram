import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  PRODUCT_PAGE_LOADED,
  PRODUCT_PAGE_UNLOADED,
  ADD_COMMENTARIO,
  DELETE_COMMENTARIO
} from '../../constants/actionTypes';



const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.product,
  products: state.products.product
});
const mapDispatchToProps = dispatch => ({
  
  onClickTag: (tag, pager, payload) => dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),

  onLoad: (tab, pager, payload) => dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),

  onUnload: () => dispatch({  type: HOME_PAGE_UNLOADED })
});



class Products extends React.Component {
  componentWillMount() {
    
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div>

        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
