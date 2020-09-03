import React, { Component } from 'react';

export default class District extends Component {
  render() {
    return (
        <fieldset className='okrug_ank'>
        <legend>Административный округ Москвы</legend>
        <div>
        <p>
          <input type="checkbox" value='Центральный АО (ЦАО)' name="" id="" />
          <label htmlFor="">Центральный АО (ЦАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Северный АО (САО)" name="" id="" />
          <label htmlFor="">Северный АО (САО)</label>
        </p>
        <p>
          <input type="checkbox" value="Северо-Восточный АО (СВАО)" name="" id="" />
          <label htmlFor="">Северо-Восточный АО (СВАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Восточный АО (ВАО)" name="" id="" />
          <label htmlFor="">Восточный АО (ВАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Юго-Восточный АО (ЮВАО)" name="" id="" />
          <label htmlFor="">Юго-Восточный АО (ЮВАО)</label>
        </p>
        </div>
       <div>
        <p>
          <input type="checkbox" value="Южный АО (ЮАО)" name="" id="" />
          <label htmlFor="">Южный АО (ЮАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Юго-Западный АО (ЮЗАО)" name="" id="" />
          <label htmlFor="">Юго-Западный АО (ЮЗАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Западный АО (ЗАО)" name="" id="" />
          <label htmlFor="">Западный АО (ЗАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Северо-Западный АО (СЗАО)" name="" id="" />
          <label htmlFor="">Северо-Западный АО (СЗАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Зеленоградский АО (ЗелАО)" name="" id="" />
          <label htmlFor="">Зеленоградский АО (ЗелАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Троицкий и Новомосковский АО (ТиНАО)" name="" id="" />
          <label htmlFor="">Троицкий и Новомосковский АО (ТиНАО)</label>
        </p>
        </div>
      </fieldset>
    );
  }
}
