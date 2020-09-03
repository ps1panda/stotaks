import React, { Component } from 'react';

export default class Citizenship extends Component {
  render() {
    return (
        <fieldset>
        <legend>Гражданство</legend>
        <input type="radio" name="fieldset1" value='РФ' id="fieldset11" checked />
        <label htmlFor="fieldset11">РФ</label>
        <input type="radio" name="fieldset1" value='Беларусь' id="fieldset12" />
        <label htmlFor="fieldset12">Беларусь</label>
        <input type="radio" name="fieldset1" value='Казахстан' id="fieldset13" />
        <label htmlFor="fieldset13">Казахстан</label>
        <input type="radio" name="fieldset1" value='Кыргызстан' id="fieldset14" />
        <label htmlFor="fieldset14">Кыргызстан</label>
        <input type="radio" name="fieldset1" value='Другое' id="fieldset15" />
        <label htmlFor="fieldset15">Другое</label>
      </fieldset>
    );
  }
}
