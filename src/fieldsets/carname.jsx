import React, { Component } from 'react';

export default class CarName extends Component {
  render() {
    return (
        <fieldset>
        <legend>Марка автомобиля</legend> 
        
       
        <div>
            <p>
                <input type="checkbox" name="AUDI" value="AUDI" id="carname1"/>
                <label htmlFor="carname1">AUDI</label>
            </p>
            <p>
                <input type="checkbox" name="BMW" value="BMW" id="carname2"/>
                <label htmlFor="carname2">BMW</label>
            </p>
            <p>
                <input type="checkbox" name="CHEVROLET" value="CHEVROLET" id="carname3"/>
                <label htmlFor="carname3">CHEVROLET</label>
            </p>
            <p>
                <input type="checkbox" name="FORD" value="FORD" id="carname4"/>
                <label htmlFor="carname4">FORD</label>
            </p>
            <p>
                <input type="checkbox" name="HYUNDAI" value="HYUNDAI" id="carname5"/>
                <label htmlFor="carname5">HYUNDAI</label>
            </p>
            <p>
                <input type="checkbox" name="KIA" value="KIA" id="carname6"/>
                <label htmlFor="carname6">KIA</label>
            </p>
            <p>
                <input type="checkbox" name="LADA" value="LADA" id="carname7"/>
                <label htmlFor="carname7">LADA</label>
            </p>
            <p>
                <input type="checkbox" name="MAZDA" value="MAZDA" id="carname8"/>
                <label htmlFor="carname8">MAZDA</label>
            </p>
            <p>
                <input type="checkbox" name="MERSEDES-BENZ" value="MERSEDES-BENZ" id="carname9"/>
                <label htmlFor="carname9">MERSEDES-BENZ</label>
            </p>
            <p>
                <input type="checkbox" name="MITSUBISHI" value="MITSUBISHI" id="carname10"/>
                <label htmlFor="carname10">MITSUBISHI</label>
            </p>
            <p>
                <input type="checkbox" name="NISSAN" value="NISSAN" id="carname11"/>
                <label htmlFor="carname11">NISSAN</label>
            </p>
            <p>
                <input type="checkbox" name="RENAULT" value="RENAULT" id="carname12"/>
                <label htmlFor="carname12">RENAULT</label>
            </p>
            <p>
                <input type="checkbox" name="SKODA" value="SKODA" id="carname13"/>
                <label htmlFor="carname13">SKODA</label>
            </p>
            <p>
                <input type="checkbox" name="TOYOTA" value="TOYOTA" id="carname14"/>
                <label htmlFor="carname14">TOYOTA</label>
            </p>
            <p>
                <input type="checkbox" name="VOLKSWAGEN" value="VOLKSWAGEN" id="carname15"/>
                <label htmlFor="carname15">VOLKSWAGEN</label>
            </p>
            <p>
                <input type="checkbox" name="another" value="another" id="carname16"/>
                <label htmlFor="carname16">Другая</label>
            </p>
        </div>
        </fieldset>
    );
  }
}
