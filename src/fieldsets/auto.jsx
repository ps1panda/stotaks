import React, { Component } from 'react';

export default class Auto extends Component {
  render() {
    return (
        <fieldset>
        <legend>Автомобиль</legend>
                        <fieldset>
                          <legend className='gray_an'>Эконом</legend>
                          <p>
                          <input type="checkbox" value="Hyundai Solaris" name="" id="ek1"/>
                          <label htmlFor="ek1">Hyundai Solaris</label>
                          </p>
                          <p>
                              <input type="checkbox" value="Kia Rio" name="" id="ek2"/>
                              <label htmlFor="ek2">Kia Rio</label>
                          </p>
                          <p>
                              <input type="checkbox" value="Skoda Rapid" name="" id="ek3"/>
                              <label htmlFor="ek3">Skoda Rapid</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Volkswagen Polo" name="" id="ek4"/>
                              <label htmlFor="ek4">Volkswagen Polo</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Ford Focus" name="" id="ek5"/>
                              <label htmlFor="ek5">Ford Focus</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Chevrolet Cruze" name="" id="ek6"/>
                              <label htmlFor="ek6">Chevrolet Cruze</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Nissan Almera" name="" id="ek7"/>
                              <label htmlFor="ek7">Nissan Almera</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Renault Logan" name="" id="ek8"/>
                              <label htmlFor="ek8">Renault Logan</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Lada Vesta" name="" id="ek9"/>
                              <label htmlFor="ek9">Lada Vesta</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Другой" name="" id="ek10"/>
                              <label htmlFor="ek10">Другой</label>
                          </p>  
                      </fieldset>
                      <fieldset>
                          <legend className='gray_an'>Комфорт</legend>
                          <p>
                          <input type="checkbox" value="Skoda Octavia" name="" id="k1"/>
                          <label htmlFor="k1">Skoda Octavia</label>
                          </p>
                          <p>
                              <input type="checkbox" value="Hyundai i30" name="" id="k2"/>
                              <label htmlFor="k2">Hyundai i30</label>
                          </p>
                          <p>
                              <input type="checkbox" value="Kia Ceed SW" name="" id="k3"/>
                              <label htmlFor="k3">Kia Ceed SW</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Chevrolet Captiva" name="" id="k4"/>
                              <label htmlFor="k4">Chevrolet Captiva</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Ford Kuga" name="" id="k5"/>
                              <label htmlFor="k5">Ford Kuga</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Renault Fluence" name="" id="k6"/>
                              <label htmlFor="k6">Renault Fluence</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Другой" name="" id="k7"/>
                              <label htmlFor="k7">Другой</label>
                          </p>  
                      </fieldset>
                      <fieldset>
                          <legend className='gray_an'>Комфорт + </legend>
                          <p>
                          <input type="checkbox" value="Toyota Camry" name="" id="kp1"/>
                          <label htmlFor="kp1">Toyota Camry</label>
                          </p>
                          <p>
                              <input type="checkbox" value="Kia Optima" name="" id="kp2"/>
                              <label htmlFor="kp2">Kia Optima</label>
                          </p>
                          <p>
                              <input type="checkbox" value="Hyundai Sonata" name="" id="kp3"/>
                              <label htmlFor="kp3">Hyundai Sonata</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Другой"  name="" id="kp4"/>
                              <label htmlFor="kp4">Другой</label>
                          </p>  
                      </fieldset>
                      <fieldset>
                          <legend className='gray_an'>Бизнес</legend>
                          <p>
                          <input type="checkbox" value="Mercedes E-klasse" name="" id="bis1"/>
                          <label htmlFor="bis1">Mercedes E-klasse</label>
                          </p>
                          <p>
                              <input type="checkbox" value="BMW 5er" name="" id="bis2"/>
                              <label htmlFor="bis2">BMW 5er</label>
                          </p>
                          <p>
                              <input type="checkbox" value="Audi A6" name="" id="bis3"/>
                              <label htmlFor="bis3">Audi A6</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Другой" name="" id="bis4"/>
                              <label htmlFor="bis4">Другой</label>
                          </p>  
                      </fieldset>
                      <fieldset>
                          <legend className='gray_an'>Премиум</legend>
                          <p>
                          <input type="checkbox" value="Mercedes S-klasse" name="" id="prem1"/>
                          <label htmlFor="prem1">Mercedes S-klasse</label>
                          </p>
                          <p>
                              <input type="checkbox" value="BMW 7er" name="" id="prem2"/>
                              <label htmlFor="prem2">BMW 7er</label>
                          </p>
                          <p>
                              <input type="checkbox" value="Audi A8" name="" id="prem3"/>
                              <label htmlFor="prem3">Audi A8</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Другой" name="" id="prem4"/>
                              <label htmlFor="prem4">Другой</label>
                          </p>  
                      </fieldset>
                      <fieldset>
                          <legend className='gray_an'>Минивэн</legend>
                          <p>
                          <input type="checkbox"  value="Ford Transit" name="" id="mini1"/>
                          <label htmlFor="mini1">Ford Transit</label>
                          </p>
                          <p>
                              <input type="checkbox"  value="Volkswagen Transporter" name="" id="mini2"/>
                              <label htmlFor="mini2">Volkswagen Transporter</label>
                          </p>
                          <p>
                              <input type="checkbox"  value="Fiat Ducato" name="" id="mini3"/>
                              <label htmlFor="mini3">Fiat Ducato</label>
                          </p>  
                          <p>
                              <input type="checkbox" value="Другой" name="" id="mini4"/>
                              <label htmlFor="mini4">Другой</label>
                          </p>  
                      </fieldset>
                      </fieldset>
      
    );
  }
}
