import React, { Component } from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  return (
      <ul>
        {props.ingredients.map((ingredient,i) => <li key={i}>{ingredient.name}</li>)}
      </ul>
  )
}

List.propTypes = {
  ingredients: PropTypes.array.isRequired
};

export default List;
