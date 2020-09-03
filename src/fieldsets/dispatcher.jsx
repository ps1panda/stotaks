import React, { Component } from 'react';

export default class Dispatcher extends Component {
  render() {
    return (
        <fieldset>
        <legend>Наличие диспетчерской / Техподдержки водителей</legend> 
         
              <p>
                  <input type="checkbox" value="1" name="" id="dtv1"/>
                  <label htmlFor="dtv1">Есть, круглосуточно</label>
              </p>
              <p>
                  <input type="checkbox" value="2" name="" id="dtv2"/>
                  <label htmlFor="dtv2">Есть, в рабочее время</label>
              </p>
              <p>
                  <input type="checkbox" value="3" name="" id="dtv3"/>
                  <label htmlFor="dtv3">Нет</label>
              </p>

        </fieldset>
    );
  }
}
