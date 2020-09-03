import React, { Component } from 'react';

export default class PricePerDay extends Component {
  render() {
    return (
        <fieldset>
                  
        <legend>Стоимость аренды в сутки</legend> 
        
            <input type="range" id="price" name="price" min="500" max="11000" />
       
      </fieldset>
    );
  }
}
