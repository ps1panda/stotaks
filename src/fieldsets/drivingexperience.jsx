import React, { Component } from 'react';

export default class Drivingexperience extends Component {
  render() {
    return (
        <fieldset>
        <legend>Водительский стаж</legend>
        <input type="radio" name="fieldset3" value='1' id="fieldset31" checked />
        <label htmlFor="fieldset31">Более 5-ти лет</label>
        <input type="radio" name="fieldset3" value='2' id="fieldset32" />
        <label htmlFor="fieldset32">От 3 до 5</label>

      </fieldset>
    );
  }
}
