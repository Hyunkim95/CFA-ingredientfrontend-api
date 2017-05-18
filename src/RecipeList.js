import React, { Component } from 'react';
import PropTypes from 'prop-types';

const RecipeList = (props) => {
  return (
      <ul>
        {props.recipes.map((recipe,i) => <li key={i}>{recipe.title} <img src={recipe.image_url} /> </li>)}
      </ul>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
};

export default RecipeList;
