import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    return (
        <fieldset>
        <legend>Условия работы</legend>
        <p>
          <input type="checkbox" name="" id="yr1" />
          <label htmlFor="yr1">Зарплатный проект</label>
        </p>
        <p>
          <input type="checkbox" name="" id="r2" />
          <label htmlFor="yr2">Аренда</label>
        </p>
        <p>
          <input type="checkbox" name="" id="yr3" />
          <label htmlFor="yr3">Только подключение к агрегаторам</label>
        </p>
      </fieldset>
    );
  }
}
