import React, { Component } from 'react';

export default class AgreBe extends Component {
  render() {
    return (
        <fieldset>
        <legend>Наличие аккаунтов у агрегаторов такси</legend>
        <input type="radio" name="fieldset5" value='1' id="fieldset51" />
        <label htmlFor="fieldset51">Есть</label>
        <input type="radio" name="fieldset5" value='0' id="fieldset52" />
        <label htmlFor="fieldset52">Нет</label>
      </fieldset>
    );
  }
}
