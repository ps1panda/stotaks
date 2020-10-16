import React, { Component } from 'react';

export default class Ofdiler extends Component {
  render() {
    return (
        <fieldset>
        <legend>Официальный дилер</legend> 
        
        
        <p>
            <input type="checkbox" name="" value="1" id="ofd1"/>
            <label htmlFor="ofd1">да</label>
        </p>
        <p>
            <input type="checkbox" name="" value="0" id="ofd2"/>
            <label htmlFor="ofd2">нет</label>
        </p>
    
        </fieldset>
    );
  }
}
