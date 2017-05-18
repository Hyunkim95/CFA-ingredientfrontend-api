import React, { Component } from 'react';
import './App.css';
import List from './List'
import IngredientForm from './IngredientForm'
import RecipeList from './RecipeList'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: [],
      ingredients_array: [],
      recipes: []
    }
    // console.log('Constructor');
  };

  // componentWillMount(){
  //   console.log('componentWillMount');
  // };

  componentDidMount(){
    this.getIngredient();
  };

  getIngredient(){
    console.log('componentDidMount');
    const URL = 'https://blooming-sierra-23405.herokuapp.com/api'
    axios.get(URL)
      .then((response) => { //need to escape the context another option is to use bind
        this.setState({ ingredients: response.data })
        this.getRecipe(this.ingredient_concat());
      })
      .catch(function(error){
        console.log(error)
      });
  }

  ingredient_concat(){
    let array = this.state.ingredients.map((food) => food.name).toString();
    return array
  }


  getRecipe(ingredient_string){
    console.log('componentDidMount');
    const URL = 'http://food2fork.com/api/search?key=159e17ab3cd078154a30d202dc2349a3&q='
    axios.get(URL + ingredient_string)
      .then((response) => { //need to escape the context another option is to use bind
        this.setState({recipes: response.data.recipes})
        console.log(this.state.recipes)
      })
      .catch(function(error){
        console.log(error)
      });
  }

  render() {
    // console.log('render');
    return (
      <div>
        <h1>Recipes Frontend</h1>
        <IngredientForm getIngredientlist={() =>
        this.getIngredient()}/>
        {this.state.ingredients.length < 1 ? 'empty' :         <List ingredients = {this.state.ingredients}/>}
        <RecipeList recipes = {this.state.recipes}/>
      </div>
    );
  }
}

export default App;
