import React, { Component } from 'react';

export default class Okrug extends Component {
  render() {
    return (
        <div className='okrug filter_box'>
        <p className="filter_title">
        <span>Административный округ Москвы</span> <span className='filter_hide'>+</span>
        </p>
        <div>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Центральный АО (ЦАО)</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Северный АО (САО)</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Северо-Восточный АО (СВАО)</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Восточный АО (ВАО)</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Юго-Восточный АО (ЮВАО)</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Южный АО (ЮАО)</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Юго-Западный АО (ЮЗАО)</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Западный АО (ЗАО)</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Северо-Западный АО (СЗАО)</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Зеленоградский АО (ЗелАО)</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Троицкий и Новомосковский АО (ТиНАО)</label>
            </p>
        </div>
    </div>
    );
  }
}
