import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class IngredientForm extends Component{

  handleInputChange(e){
    //not used just for reference
    console.log(e.target.value)
  };

  focus(){
    console.log(this.nameInput.value);
  }

  newIngredient(){
    const URL = 'https://blooming-sierra-23405.herokuapp.com/api';
    axios.post(URL + '?song_name=' + this.nameInput.value)
      .then((response) =>{
        console.log(response)
        this.nameInput.value = '';
        this.props.getIngredientlist();
      })
      .catch(function(error){
        console.log(error)
      })
  }

  render(){
    return (
      <div>
        <input type="text"
          ref={input => {this.nameInput = input; }}
          onChange={(e) => this.handleInputChange(e)} />
        <button onClick={() => this.newIngredient()}>Create!</button>
      </div>
    )
  }
}


export default IngredientForm;
