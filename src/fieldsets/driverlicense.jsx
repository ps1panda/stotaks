import React, { Component } from 'react';

export default class Driverlicense extends Component {
  render() {
    return (
        <fieldset>
        <legend>Водительское удостоверение</legend>
        <input type="radio" name="fieldset2" value='РФ' id="fieldset21" />
        <label htmlFor="fieldset21">РФ</label>
        <input type="radio" name="fieldset2" value='Беларусь' id="fieldset22" />
        <label htmlFor="fieldset22">Беларусь</label>
        <input type="radio" name="fieldset2" value='Казахстан' id="fieldset23" />
        <label htmlFor="fieldset23">Казахстан</label>
        <input type="radio" name="fieldset2" value='Кыргызстан' id="fieldset24" />
        <label htmlFor="fieldset24">Кыргызстан</label>
        <input type="radio" name="fieldset2" value='Другое' id="fieldset25" />
        <label htmlFor="fieldset25">Другое</label>
      </fieldset>
    );
  }
}
