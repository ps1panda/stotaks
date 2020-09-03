import React, { Component } from 'react';

export default class Deposite extends Component {
  render() {
    return (
        <fieldset>
        <legend>Требования по депозиту</legend> 
      
            <p>
                <input type="checkbox" value="1" name="" id="dep1"/>
                <label htmlFor="dep1">Без депозита</label>
            </p>
            <p>
                <input type="checkbox" value="2" name="" id="dep2"/>
                <label htmlFor="dep2">Накопительный депозит</label>
            </p>
            <p>
                <input type="checkbox" value="3" name="" id="dep3"/>
                <label htmlFor="dep3">До 10 тыс.руб (при получении машины)</label>
            </p>
            <p>
                <input type="checkbox" value="4" name="" id="dep4"/>
                <label htmlFor="dep4">Более 10 тыс.руб (при получении машины)</label>
            </p>
      </fieldset>
      
    );
  }
}
