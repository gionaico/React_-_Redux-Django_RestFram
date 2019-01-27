import React from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  
});

const ProductPreview = props => {
  const product = props.article;

  const handleClick = ev => {
    ev.preventDefault();
    
  };

  return (
    <div>
      product
    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ProductPreview);
