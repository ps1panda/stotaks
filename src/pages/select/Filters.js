import React, { Component } from 'react';

import Hidefilter from './js/Hidefilter.js';
import $ from "jquery";
import Deposite from '../../fieldsets/deposite.jsx';
import Agregators from '../../fieldsets/agregators.jsx';
import Dispatcher from '../../fieldsets/dispatcher.jsx';
import PricePerDay from '../../fieldsets/priceperday.jsx';
import Work from '../../fieldsets/work.jsx';
import Metro from '../../fieldsets/metro.jsx';
import District from '../../fieldsets/district.jsx';
import Citizenship from '../../fieldsets/citizenship.jsx';
import Driverlicense from '../../fieldsets/driverlicense.jsx';
import Drivingexperience from '../../fieldsets/drivingexperience.jsx';
import Workexp from '../../fieldsets/workexp.jsx';
import Auto from '../../fieldsets/auto.jsx';
import Akpp from '../../fieldsets/akpp.jsx';
import Fuel from '../../fieldsets/fuel.jsx';
import CarName from '../../fieldsets/carname.jsx';
import Ofdiler from '../../fieldsets/ofdiler.jsx';
import close from '../../images/Close.png'
export default class Filters extends Component {
    componentDidMount() {
        $(function(){
            var hide = 0;
            $('.filter_title, legend').click(function(){
                $(this).parent().toggleClass('hidden_filter')
                
            })
            $('.filter_title_mob img').click(function(){
                $('.filters_wrap').hide()
            })

        })
      }
  render() {
      if(this.props.kindfilter === 'taxopark'){
        return (
            <div className='filters_wrap'> 
                <div className="filter_title_mob">
                    <h2>Фильтры</h2>
                    <img src={close} alt=""/>
                </div>
                <p>
                <input type="checkbox" name="" id="use_anketa"/>
                <label htmlFor="use_anketa">Использовать анкетные данные</label>
                </p>
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
                <div className='workrules filter_box'>
                  <Work />
                </div>
                
                <Metro />
                <District />

                <div className='drive_treb filter_box'>
                    <p className="filter_title">
                    <span>Требования к водителям</span> 
                    </p>
                    <div>
                        <div className="inner_filter">
                         <Citizenship />
                        </div>
                        <div className="inner_filter">
                          <Driverlicense />
                        </div>
                        <div className="inner_filter">
                           <Drivingexperience />
                        </div>
                        <div className="inner_filter">
                            <Workexp />
                        </div>
                        <div className="inner_filter">
                            <Agregators />
                        </div>
                    </div>
                </div>
                <div className='autos filter_box'>
                    <p className="filter_title">
                    <span>Автомобили</span> 
                    </p>
                    <div>
                    <div className="inner_filter">
                            <p className="inner_filter_title">
                            <span> Модельный </span> 
                            </p>
                            <Auto />
                        </div>
                        
                        <div className="inner_filter">
                            <p className="inner_filter_title">
                            <span>Характеристики автомобилей</span> 
                            </p>
                            <div>
                                <Akpp />
                                <Fuel />
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='price filter_box'>
                    <PricePerDay />
                </div>
                <div className='deposit filter_box'>
                    <Deposite />
                   
                </div>
                <div className='agreg filter_box'>
                        <Agregators />
                </div>
                <div className='dispech filter_box'>
                    <Dispatcher />
                </div>
            </div>
        );
      }
      if(this.props.kindfilter === 'autosalon'){
        return (
            <div className='filters_wrap'> 
              
               <Metro />
                <District />
                        <div className='carname filter_box'>

                            <CarName />
                        </div>
                        <div className='dylers filter_box'>
                            <Ofdiler />
                           
                            
                        </div>
                        <div className='yslugi filter_box'>
                            <p className="filter_title">
                            <span>Предлагаемые услуги</span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Автомобили с пробегом</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Trade-in</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Выкуп автомобилей</label>
                                </p>
                               
                            </div>
                        </div>
                        
            </div>
                            
        )  
    }
    if(this.props.kindfilter === 'wash'){
        return (
            <div className='filters_wrap'> 
               
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
               <Metro />
                <District />
                <div className='samomoyka filter_box'>
                            <p className="filter_title">
                            <span>Мойка самообслуживания</span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Круглосуточная работа</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Пылесос</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Оплата картой</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Корпоративное обслуживание</label>
                                </p>
                                
                            </div>
                        </div>
                        <div className='persmoyla filter_box'>
                            <p className="filter_title">
                            <span>Мойка с персоналом (обычная)</span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Круглосуточная работа</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Полировка кузова</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Кафе/торговый автомат</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Оплата картой</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Экспресс мойка</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Химчистка салона</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Wi-Fi</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Корпоративное обслуживание</label>
                                </p>
                            </div>
                        </div>
                        <div className='automoyka filter_box'>
                            <p className="filter_title">
                            <span>Автоматическая мойка</span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">да</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">нет</label>
                                </p>
            
                               
                            </div>
                        </div>
                        
            </div>
                            
        )  
    }
    if(this.props.kindfilter === 'autocredit'){
        return (
            <div className='filters_wrap'> 
               
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
                <div className="filter_select">
                    <div className="credit_select">
                        <p className='credit_select__title'>
                            <input type="radio" name="credit_select" id=""/>
                            <label htmlFor="">АВТОКРЕДИТОВАНИЕ</label>
                            
                        </p>
                            <div className='sum_credit filter_box'>
                                <p className="filter_title">
                                <span>Сумма кредита</span> 
                                </p>
                                <div>
                                    <input type="range" id="sum_credit" name="sum_credit" min="500" max="11000" />
                                </div>
                            </div>
                            <div className='first_sum filter_box'>
                                <p className="filter_title">
                                <span>Первоначальный взнос</span> 
                                </p>
                                <div>
                                    <input type="range" id="first_sum" name="first_sum" min="500" max="11000" />
                                </div>
                            </div>
                            <div className='credit_year filter_box'>
                                <p className="filter_title">
                                <span>Срок кредита</span> 
                                </p>
                                <div>
                                    <input type="range" id="credit_year" name="credit_year" min="500" max="11000" />
                                </div>
                            </div>
                            <div className='musthave filter_box'>
                                <p className="filter_title">
                                <span>Требования по страхованию</span> 
                                </p>
                                <div>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">КАСКО</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">КАСКО и страхование жизни</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">не предъявляются</label>
                                    </p>
                
                                
                                </div>
                            </div>
                            <div className='ifcredit filter_box'>
                                <p className="filter_title">
                                <span>Условия кредитования</span> 
                                </p>
                                <div>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Без первоначального взноса</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Без справки о доходах</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Автомобили с пробегом</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Досрочное погашение</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Отсрочка платежа</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Страхование в кредит</label>
                                    </p>
                
                                
                                </div>
                            </div>
                        
                    </div>
                    <div className="lizing_select">
                        <p className='credit_select__title'>
                            <input type="radio" name="credit_select" id=""/>
                            <label htmlFor="">АВТОЛИЗИНГ</label>
                        </p>
                            <div className='sum_credit filter_box'>
                                <p className="filter_title">
                                <span>Сумма кредита</span> 
                                </p>
                                <div>
                                    <input type="range" id="sum_credit" name="sum_credit" min="500" max="11000" />
                                </div>
                            </div>
                            <div className='first_sum filter_box'>
                                <p className="filter_title">
                                <span>Первоначальный взнос</span> 
                                </p>
                                <div>
                                    <input type="range" id="first_sum" name="first_sum" min="500" max="11000" />
                                </div>
                            </div>
                            <div className='credit_year filter_box'>
                                <p className="filter_title">
                                <span>Срок кредита</span> 
                                </p>
                                <div>
                                    <input type="range" id="credit_year" name="credit_year" min="500" max="11000" />
                                </div>
                            </div>
                            
                            <div className='ifcredit filter_box'>
                                <p className="filter_title">
                                <span>Условия лизинга</span> 
                                </p>
                                <div>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Без первоначального взноса</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Работа с физлицами</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Оперативный лизинг</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Досрочный выкуп</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Отсрочка платежа</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Автомобили с пробегом</label>
                                    </p>
                
                                
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
                            
        )  
    }
    if(this.props.kindfilter === 'autostrah'){
        return (
            <div className='filters_wrap'> 

                <p className='clearfilter'>
                Сбросить фильтры
                </p>
                <div className='kasko filter_box'>
                            <p className="filter_title">
                            <span>КАСКО </span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Онлайн-калькулятор на сайте</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Полис в рассрочку</label>
                                </p>
                                
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Доставка полиса страхователю</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Круглосуточная поддержка</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Эвакуатор</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Аварийный комиссар</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Сбор справок в ГИБДД</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Стеклянные элементы без справок</label>
                                </p>
                            </div>
                        </div>
                        <div className='osago filter_box'>
                            <p className="filter_title">
                            <span>ОСАГО</span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Онлайн-калькулятор на сайте</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Полис в рассрочку</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Доставка полиса страхователю</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Электронный полис</label>
                                </p>
                             
                            </div>
                        </div>
                        <div className='dosago filter_box'>
                            <p className="filter_title">
                            <span>ДОСАГО</span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Онлайн-калькулятор на сайте</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Полис в рассрочку</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Доставка полиса страхователю</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Круглосуточная поддержка</label>
                                </p>
                                
                            </div>
                        </div>
                        
            </div>
                            
        )  
    }
    if(this.props.kindfilter === 'view'){
        return (
            <div className='filters_wrap'> 
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
               <Metro />
                <District />
                <div className='med filter_box'>
                            <p className="filter_title">
                            <span>Медицинский </span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Выездные</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Удаленные (дистанционные)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Послерейсовые</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ведение документации</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Лицензирование медкабинетов</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Трудоустройство в штат медика</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ежедневно</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Круглосуточно</label>
                                </p>
                            </div>
                </div>
                <div className='tech filter_box'>
                            <p className="filter_title">
                            <span>Технический </span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Выездные</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ежедневно</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ведение документации</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Аудит вопросов БДД</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Трудоустройство в штат специалиста по БДД</label>
                                </p>                                
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Круглосуточно</label>
                                </p>
                            </div>
                </div>            
            
            
            
               
            </div>
        )
    }
    if(this.props.kindfilter === 'equipment'){
        return (
            <div className='filters_wrap'> 
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
               <Metro />
                <District />
                <div className='editauto filter_box'>
                            <p className="filter_title">
                            <span>Подготовка автомобилей для работы в такси </span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Оклейка цветной пленкой</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Перерегистрация в ГИБДД</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Брендирование автомобиля</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Установка лайтбокса</label>
                                </p>
                            </div>
                </div>
                <div className='gbo filter_box'>
                            <p className="filter_title">
                            <span>Установка ГБО </span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Пропан</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Метан</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Техническая экспертиза</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Оформление в ГИБДД</label>
                                </p>
                            </div>
                </div>            
                <div className='gps filter_box'>
                            <p className="filter_title" onClick={Hidefilter(this)}>
                            <span>Установка ГЛОНАСС/GPS </span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Трекер</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Маяк</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Тревожная кнопка</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Дополнительное оборудование</label>
                                </p>
                            </div>
                </div>    
                <div className='dop filter_box'>
                            <p className="filter_title">
                            <span>Другое оборудования </span> 
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Автосигнализация</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Парктроники</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Видеорегистратор</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Камера заднего вида</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Световое оборудование</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Аудиосистема</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Мультимедийное оборудование</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Система радиосвязи</label>
                                </p>
                            </div>
                </div>                             
            
            
               
            </div>
        )
    }
    if(this.props.kindfilter === 'service'){
        return (
            <div className='filters_wrap'> 
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
               <Metro />
                <District />
                <div className='all filter_box'>
             
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Официальный дилерский центр</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Плановые ТО</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Кузовной ремонт и покраска</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ремонт двигателя</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ремонт трансмиссии</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ремонт ходовой части</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ремонт электрооборудования</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ремонт и замена стекол</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Тонировка стекол</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Детейлинг</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Шиномонтаж</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Предрейсовые техосмотры</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Предпродажная подготовка</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Техпомощь на дороге</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Эвакуатор</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Корпоративное обслуживание</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Оплата картой</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Кафе</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Wi-Fi</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Круглосуточно</label>
                                </p>
                            </div>
                </div>

               
            </div>
        )
    }
    if(this.props.kindfilter === 'hostels'){
        return (
            <div className='filters_wrap'> 
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
               <Metro />
                <District />
                <div className='price filter_box'>
                    <p className="filter_title">
                    <span>Стоимость в сутки (за ночь)</span> 
                    </p>
                    <div>
                        <input type="range" id="price" name="price" min="500" max="11000" />
                    </div>
                </div>
                <div className='uslugi filter_box'>
                    <p className="filter_title">
                        <span>Предоставляемые услуги</span> 
                    </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Корпоративное обслуживание</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Парковка </label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Питание</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Кухня</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Холодильник</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Телевизор</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Стиральная машина</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Круглосуточная регистрация</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Семейные номера</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ежедневная уборка</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Wi-Fi</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Камера хранения</label>
                                </p>
                            </div>
                </div>

               
            </div>
        )
    }
    if(this.props.kindfilter === 'documents'){
        return (
            <div className='filters_wrap'> 
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
                <div className='all filter_box'>
             
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Оформление разрешения на деятельность такси</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Изготовление электронной подписи</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Оформление дубликата разрешения на деятельность такси</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Путевая документация водителя</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Аннулирование разрешения на деятельность такси</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Подключение к таксопарку</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Открытие ИП</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Подключение к агрегаторам такси</label>
                                </p>
                               
                            </div>
                </div>
               
            </div>
        )
    }

  }
}
