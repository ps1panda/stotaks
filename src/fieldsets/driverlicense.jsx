import React, { Component } from 'react';

export default class Driverlicense extends Component {
  render() {
    return (
        <fieldset>
        <legend>Водительское удостоверение</legend>
        <input type="radio" name="fieldset2" value='РФ' id="fieldset21" checked />
        <label htmlFor="fieldset11">РФ</label>
        <input type="radio" name="fieldset2" value='Беларусь' id="fieldset22" />
        <label htmlFor="fieldset12">Беларусь</label>
        <input type="radio" name="fieldset2" value='Казахстан' id="fieldset23" />
        <label htmlFor="fieldset13">Казахстан</label>
        <input type="radio" name="fieldset2" value='Кыргызстан' id="fieldset24" />
        <label htmlFor="fieldset14">Кыргызстан</label>
        <input type="radio" name="fieldset2" value='Другое' id="fieldset25" />
        <label htmlFor="fieldset15">Другое</label>
      </fieldset>
    );
  }
}
