import React, { Component } from 'react';

export default class Fuel extends Component {
  render() {
    return (
        <fieldset>
        <legend className='gray_an'>Топливо</legend>
        <p>
        <input type="checkbox" value="1" name="" id="top1"/>
        <label htmlFor="top1">Бензин</label>
        </p>
        <p>
            <input type="checkbox" value="2" name="" id="top2"/>
            <label htmlFor="top2">Дизель</label>
        </p>
        <p>
            <input type="checkbox" value="3" name="" id="top3"/>
            <label htmlFor="top3">Газ/бензин</label>
        </p>
    </fieldset>
    );
  }
}
