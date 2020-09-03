import React, { Component } from 'react';

export default class Akpp extends Component {
  render() {
    return (
        <fieldset>
        <legend className='gray_an'>Трансмиссия</legend>
        <p>
        <input type="checkbox" value="1" name="" id="akpp1"/>
        <label htmlFor="akpp1">АКП</label>
        </p>
        <p>
            <input type="checkbox" value="2" name="" id="akpp2"/>
            <label htmlFor="akpp2">МКПП</label>
        </p>
    </fieldset>
    );
  }
}
