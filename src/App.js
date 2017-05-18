import React, { Component } from 'react';
import './App.css';
import List from './List'
import IngredientForm from './IngredientForm'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: []
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
    const URL = 'http://yamagucci.herokuapp.com/api/ingredients?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNob3VoZWkueWFtYXVjaGlAbGl2ZS5jb20iLCJpYXQiOjE0OTQ5OTMxMTV9.G0ctQghRRAqaZiGSZyT5Oi-YXUUfb3UsYQpsmMaVA0k'
    axios.get(URL)
      .then((response) => { //need to escape the context another option is to use bind
        this.setState({ ingredients: response.data })
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
      </div>
    );
  }
}

export default App;
