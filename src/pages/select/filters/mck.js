import React, { Component } from 'react';

export default class Mck extends Component {
  render() {
    return (
    <div className='mck filter_box'>
        <p className="filter_title">
        <span>Метро МЦК </span> 
        </p>
        <div>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Автозаводская</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Зорге</label>
            </p>
            <p>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Стрешнево</label>
            </p>
        </div>
    </div>
    );
  }
}
