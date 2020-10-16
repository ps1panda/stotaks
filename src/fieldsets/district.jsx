import React, { Component } from 'react';

export default class District extends Component {
  render() {
    return (
        <fieldset className='okrug_ank'>
        <legend>Административный округ Москвы</legend>
        <div>
        <p>
          <input type="checkbox" value='Центральный АО (ЦАО)' name="" id="aom1" />
          <label htmlFor="aom1">Центральный АО (ЦАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Северный АО (САО)" name="" id="aom2" />
          <label htmlFor="aom2">Северный АО (САО)</label>
        </p>
        <p>
          <input type="checkbox" value="Северо-Восточный АО (СВАО)" name="" id="aom3" />
          <label htmlFor="aom3">Северо-Восточный АО (СВАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Восточный АО (ВАО)" name="" id="aom4" />
          <label htmlFor="aom4">Восточный АО (ВАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Юго-Восточный АО (ЮВАО)" name="" id="aom5" />
          <label htmlFor="aom5">Юго-Восточный АО (ЮВАО)</label>
        </p>
        </div>
       <div>
        <p>
          <input type="checkbox" value="Южный АО (ЮАО)" name="" id="aom6" />
          <label htmlFor="aom6">Южный АО (ЮАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Юго-Западный АО (ЮЗАО)" name="" id="aom7" />
          <label htmlFor="aom7">Юго-Западный АО (ЮЗАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Западный АО (ЗАО)" name="" id="aom8" />
          <label htmlFor="aom8">Западный АО (ЗАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Северо-Западный АО (СЗАО)" name="" id="aom9" />
          <label htmlFor="aom9">Северо-Западный АО (СЗАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Зеленоградский АО (ЗелАО)" name="" id="aom10" />
          <label htmlFor="aom10">Зеленоградский АО (ЗелАО)</label>
        </p>
        <p>
          <input type="checkbox" value="Троицкий и Новомосковский АО (ТиНАО)" name="" id="aom11" />
          <label htmlFor="aom11">Троицкий и Новомосковский АО (ТиНАО)</label>
        </p>
        </div>
      </fieldset>
    );
  }
}
