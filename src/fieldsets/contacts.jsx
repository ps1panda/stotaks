import React, { Component } from 'react';
import District from './district';
import Metro from './metro';

export default class Contacts extends Component {
  render() {
    return (
        <div className='contatcs'>
        <h1 className="zag">Контактные данные</h1>
        <div>
        <p>
            <label htmlFor="adress">Адрес</label>
            <input type="text" name="" id="adress" placeholder = 'Введите адрес'/>
            
        </p>
        <Metro />
        <p>
            <label htmlFor="dop_phone">Дополнительный телефон</label>
            <input type="text" name="dop_phone" id="dop_phone" placeholder='Укажите при необходимости'/>
        </p>
        </div>
        <div>
            <District />
            <p>
            Если необходимо указать дополнительный адрес или телефон, нажмите
            <div className="btn_add add_adress">Добавить адрес / </div>
            <div className="btn_add add_phone">телефон</div>
            </p>
        </div>
        </div>
        
    );
  }
}
