import React, { Component } from 'react'
import District from '../../fieldsets/district';
import Metro from '../../fieldsets/metro';
import Work from '../../fieldsets/work';
import Citizenship from '../../fieldsets/citizenship';
import './drivers.css';
import Driverlicense from '../../fieldsets/driverlicense';
import Drivingexperience from '../../fieldsets/drivingexperience';
import Workexp from '../../fieldsets/workexp';
import Auto from '../../fieldsets/auto';
import Akpp from '../../fieldsets/akpp';
import Fuel from '../../fieldsets/fuel';
import PricePerDay from '../../fieldsets/priceperday';
import Deposite from '../../fieldsets/deposite';
import Agregators from '../../fieldsets/agregators';
import Dispatcher from '../../fieldsets/dispatcher';
import AgreBe from '../../fieldsets/agrebe';

export default class Driver_anketa extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page_title: 'Анкета водителей',
      page_name: 'driver_anketa_page',

    };

  };

  render() {
    return (
      <div className={this.state.page_name}>
        <div className="wrap">
          <div className="bread">
            <a href="/"> Главная</a>
            <span>{this.state.page_title}</span>
          </div>
          <h1 className='zag'>{this.state.page_title}</h1>
          <div className="driver_anketa_info">
            Заполните анкету Водителя - предоставление максимально полных и достоверных сведений ускорит Ваше трудоустройство у партнеров Столичного таксомоторного сообщества
                      </div>

          <form action="" className="driver_anketa_form" method="post">

            <div className="general_anketa anketa">
              <div className="anketa_title zag_another">
                Общие сведения
                              </div>
              <div className="anketa_wrap">
                <Citizenship />
                <Driverlicense />
                <Drivingexperience />
                <Workexp />

                <AgreBe />
              </div>
            </div>

            <div className="wishes anketa">
              <div className="wishes_title anketa_title zag_another">
                Пожелания к условиям работы
                              </div>
              <div className="anketa_wrap">
                <div className='anketa_wrap__oneline'>

                  <Work />
                  < Metro />
                  <District />
                </div>


                <div className="anketa_wrap__twoline">
                  <Auto />
                </div>

                <div className="anketa_wrap__threeline">
                  <fieldset>
                    <legend>Характеристики автомобиля</legend>
                      <Akpp />
                      <Fuel />
                  </fieldset>
                  <PricePerDay />
                  <Deposite />
                  <Agregators />
                </div>
                <div className="anketa_wrap__fourline">
                  <Dispatcher />
                </div>
              </div>
            </div>
          
            <div className="form_info">
            Для сохранения изменений нажмите кнопку «Сохранить»
                </div>
                <input type="submit" className="btn_gray act_btn" onClick='' value="Сохранить"/>

                <div className="policity_info">
                    Нажимая "Сохранить" , Вы подтверждаете, что ознакомились
                    с <a href="#"> Политикой конфиденциальности</a> и даете свое согласие на обработку введенных Вами персональных данных
                </div>
          
          
          </form>
        </div>
      </div>
    )
  }
}
