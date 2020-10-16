import React, { Component } from 'react';
import search from '../images/lupa.png'
export default class Metro extends Component {
  render() {
    return (
        <fieldset className='subway filter_box'>
        <legend>Метро, МЦК</legend>
        <img src={search} alt=""/>
        <input type="text" name="" id="subwaysearch" placeholder="Введите станцию метро, МЦК" />
      </fieldset>
    );
  }
}
