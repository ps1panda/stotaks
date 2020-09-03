import React, { Component } from 'react';

export default class Agregators extends Component {
  render() {
    return (
        <fieldset>
        <legend>Подключение к агрегаторам</legend> 
         
  
              <p>
                  <input type="checkbox" value="Яндекс.Такси" name="" id="agr1"/>
                  <label htmlFor="agr1">Яндекс.Такси</label>
              </p>
              <p>
                  <input type="checkbox" value="Gett" name="" id="agr2"/>
                  <label htmlFor="agr2">Gett</label>
              </p>
              <p>
                  <input type="checkbox" value="Ситимобил" name="" id="agr3"/>
                  <label htmlFor="agr3">Ситимобил</label>
              </p>
              <p>
                  <input type="checkbox" value="Wheely" name="" id="agr4"/>
                  <label htmlFor="agr4">Wheely</label>
              </p>
              <p>
                  <input type="checkbox" value="Собственная диспетчерская" name="" id="agr5"/>
                  <label htmlFor="agr5">Собственная диспетчерская</label>
              </p>
              <p>
                  <input type="checkbox" value="Другое" name="" id="agr6"/>
                  <label htmlFor="agr6">Другое</label>
              </p>
        </fieldset>
      
    );
  }
}
