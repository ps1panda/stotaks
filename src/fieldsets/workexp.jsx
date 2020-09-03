import React, { Component } from 'react';

export default class Workexp extends Component {
  render() {
    return (
        <fieldset>
        <legend>Опыт работы в такси</legend>
        <input type="radio" name="fieldset4" value='1' id="fieldset41" checked />
        <label htmlFor="fieldset41">С опытом работы</label>
        <input type="radio" name="fieldset4" value='2' id="fieldset42" />
        <label htmlFor="fieldset42">Без опыта работы</label>

      </fieldset>
    );
  }
}
