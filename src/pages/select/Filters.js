import React, { Component } from 'react';

export default class Filters extends Component {
  render() {
      if(this.props.kindfilter === 'taxopark'){
        return (
            <div> 
                <p>
                <input type="checkbox" name="" id="use_anketa"/>
                <label htmlFor="use_anketa">Использовать анкетные данные</label>
                </p>
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
                <div className='workrules filter_box'>
                    <p className="filter_title">
                    <span>Условия работы</span> <span className='filter_hide'>+</span>
                    </p>
                    <div>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Зарплатный проект</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Аренда</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Только подключение к агрегаторам</label>
                        </p>
                    </div>
                </div>
                
                <div className='mck filter_box'>
                    <p className="filter_title">
                    <span>Метро МЦК </span> <span className='filter_hide'>+</span>
                    </p>
                    <div>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Автозаводская</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Зорге</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Стрешнево</label>
                        </p>
                    </div>
                </div>
                <div className='okrug filter_box'>
                    <p className="filter_title">
                    <span>Административный округ Москвы</span> <span className='filter_hide'>+</span>
                    </p>
                    <div>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Центральный АО (ЦАО)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Северный АО (САО)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Северо-Восточный АО (СВАО)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Восточный АО (ВАО)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Юго-Восточный АО (ЮВАО)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Южный АО (ЮАО)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Юго-Западный АО (ЮЗАО)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Западный АО (ЗАО)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Северо-Западный АО (СЗАО)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Зеленоградский АО (ЗелАО)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Троицкий и Новомосковский АО (ТиНАО)</label>
                        </p>
                    </div>
                </div>
                <div className='drive_treb filter_box'>
                    <p className="filter_title">
                    <span>Требования к водителям</span> <span className='filter_hide'>+</span>
                    </p>
                    <div>
                        <div className="inner_filter">
                            <p className="inner_filter_title">
                            <span>Гражанство </span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">РФ</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Беларусь</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Казахстан</label>
                                </p>  
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Кыргызстан</label>
                                </p>  
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Другое</label>
                                </p>  
                            </div>
                        </div>
                        <div className="inner_filter">
                            <p className="inner_filter_title">
                            <span>Водительское удостоверение</span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">РФ</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Беларусь</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Казахстан</label>
                                </p>  
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Кыргызстан</label>
                                </p>  
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Другое</label>
                                </p>  
                            </div>
                        </div>
                        <div className="inner_filter">
                            <p className="inner_filter_title">
                            <span>Водительский стаж</span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <p>
                                    <input type="radio" name="group1" id=""/>
                                    <label htmlFor="">Более 3-х лет</label>
                                </p>
                                <p>
                                <input type="radio" name="group1" id=""/>
                                    <label htmlFor="">Более 5-ти лет</label>
                                </p>
    
                            </div>
                        </div>
                        <div className="inner_filter">
                            <p className="inner_filter_title">
                            <span>Опыт работы в такси</span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <p>
                                    <input type="radio" name="group1" id=""/>
                                    <label htmlFor="">Обязателен</label>
                                </p>
                                <p>
                                <input type="radio" name="group1" id=""/>
                                    <label htmlFor="">Неважно</label>
                                </p>
    
                            </div>
                        </div>
                        <div className="inner_filter">
                            <p className="inner_filter_title">
                            <span> Наличие аккаунтов у агрегаторов такси</span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Яндекс.Такси</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Gett</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ситимобил</label>
                                </p>  
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Wheely</label>
                                </p>  
                                
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Собственная диспетчерская</label>
                                </p>  
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Другое</label>
                                </p>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className='autos filter_box'>
                    <p className="filter_title">
                    <span>Автомобили</span> <span className='filter_hide'>+</span>
                    </p>
                    <div>
                    <div className="inner_filter">
                            <p className="inner_filter_title">
                            <span> Модельный </span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <fieldset>
                                    <legend>Эконом</legend>
                                    <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Hyundai Solaris</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Kia Rio</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Skoda Rapid</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Volkswagen Polo</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Ford Focus</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Chevrolet Cruze</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Nissan Almera</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Renault Logan</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Lada Vesta</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Другой</label>
                                    </p>  
                                </fieldset>
                                <fieldset>
                                    <legend>Комфорт</legend>
                                    <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Skoda Octavia</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Hyundai i30</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Kia Ceed SW</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Chevrolet Captiva</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Ford Kuga</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Renault Fluence</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Другой</label>
                                    </p>  
                                </fieldset>
                                <fieldset>
                                    <legend>Комфорт +</legend>
                                    <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Toyota Camry</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Kia Optima</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Hyundai Sonata</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Другой</label>
                                    </p>  
                                </fieldset>
                                <fieldset>
                                    <legend>Бизнес</legend>
                                    <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Mercedes E-klasse</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">BMW 5er</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Audi A6</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Другой</label>
                                    </p>  
                                </fieldset>
                                <fieldset>
                                    <legend>Премиум</legend>
                                    <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Mercedes S-klasse</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">BMW 7er</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Audi A8</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Другой</label>
                                    </p>  
                                </fieldset>
                                <fieldset>
                                    <legend>Минивэн</legend>
                                    <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Ford Transit</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Volkswagen Transporter</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Fiat Ducato</label>
                                    </p>  
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Другой</label>
                                    </p>  
                                </fieldset>
                            </div>
                        </div>
                        
                        <div className="inner_filter">
                            <p className="inner_filter_title">
                            <span>Характеристики автомобилей</span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <fieldset>
                                    <legend>Трансмиссия</legend>
                                    <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">АКП</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">МКПП</label>
                                    </p>
                                </fieldset>
                                <fieldset>
                                    <legend>Топливо</legend>
                                    <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Бензин</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Дизель</label>
                                    </p>
                                    <p>
                                        <input type="checkbox" name="" id=""/>
                                        <label htmlFor="">Газ/бензин</label>
                                    </p>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='price filter_box'>
                    <p className="filter_title">
                    <span>Стоимость аренды в сутки</span> <span className='filter_hide'>+</span>
                    </p>
                    <div>
                        <input type="range" id="price" name="price" min="500" max="11000" />
                    </div>
                </div>
                <div className='deposit filter_box'>
                    <p className="filter_title">
                    <span>Требования по депозиту</span> <span className='filter_hide'>+</span>
                    </p>
                    <div>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Без депозита</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Накопительный депозит</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">До 10 тыс.руб (при получении машины)</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Более 10 тыс.руб (при получении машины)</label>
                        </p>
                    </div>
                </div>
                <div className='agreg filter_box'>
                    <p className="filter_title">
                    <span>Подключение к агрегаторам</span> <span className='filter_hide'>+</span>
                    </p>
                    <div>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Яндекс.Такси</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Gett</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Ситимобил</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Wheely</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Собственная диспетчерская</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Другое</label>
                        </p>
                    </div>
                </div>
                <div className='dispech filter_box'>
                    <p className="filter_title">
                    <span>Наличие диспетчерской / Техподдержки водителей</span> <span className='filter_hide'>+</span>
                    </p>
                    <div>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Есть, круглосуточно</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Есть, в рабочее время</label>
                        </p>
                        <p>
                            <input type="checkbox" name="" id=""/>
                            <label htmlFor="">Нет</label>
                        </p>
    
                    </div>
                </div>
            </div>
        );
      }
      if(this.props.kindfilter === 'autosalon'){
        return (
            <div> 
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
                <div className='mck filter_box'>
                            <p className="filter_title">
                            <span>Метро МЦК </span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Автозаводская</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Зорге</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Стрешнево</label>
                                </p>
                            </div>
                        </div>
                        <div className='okrug filter_box'>
                            <p className="filter_title">
                            <span>Административный округ Москвы</span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Центральный АО (ЦАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Северный АО (САО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Северо-Восточный АО (СВАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Восточный АО (ВАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Юго-Восточный АО (ЮВАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Южный АО (ЮАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Юго-Западный АО (ЮЗАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Западный АО (ЗАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Северо-Западный АО (СЗАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Зеленоградский АО (ЗелАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Троицкий и Новомосковский АО (ТиНАО)</label>
                                </p>
                            </div>
                        </div>
                        <div className='carname filter_box'>
                            <p className="filter_title">
                            <span>Марка автомобиля</span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">AUDI</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">BMW</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">CHEVROLET</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">FORD</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">HYUNDAI</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">KIA</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">LADA</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">MAZDA</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">MERSEDES-BENZ</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">MITSUBISHI</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">NISSAN</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">RENAULT</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">SKODA</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">TOYOTA</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">VOLKSWAGEN</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Другая</label>
                                </p>
                            </div>
                        </div>
                        <div className='dylers filter_box'>
                            <p className="filter_title">
                            <span>Официальный дилер</span> <span className='filter_hide'>+</span>
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
                        <div className='yslugi filter_box'>
                            <p className="filter_title">
                            <span>Предлагаемые услуги</span> <span className='filter_hide'>+</span>
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
            <div> 
               
                <p className='clearfilter'>
                Сбросить фильтры
                </p>
                <div className='mck filter_box'>
                            <p className="filter_title">
                            <span>Метро МЦК </span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Автозаводская</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Зорге</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Стрешнево</label>
                                </p>
                            </div>
                        </div>
                        <div className='okrug filter_box'>
                            <p className="filter_title">
                            <span>Административный округ Москвы</span> <span className='filter_hide'>+</span>
                            </p>
                            <div>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Центральный АО (ЦАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Северный АО (САО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Северо-Восточный АО (СВАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Восточный АО (ВАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Юго-Восточный АО (ЮВАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Южный АО (ЮАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Юго-Западный АО (ЮЗАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Западный АО (ЗАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Северо-Западный АО (СЗАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Зеленоградский АО (ЗелАО)</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="" id=""/>
                                    <label htmlFor="">Троицкий и Новомосковский АО (ТиНАО)</label>
                                </p>
                            </div>
                        </div>
                        <div className='samomoyka filter_box'>
                            <p className="filter_title">
                            <span>Мойка самообслуживания</span> <span className='filter_hide'>+</span>
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
                            <span>Мойка с персоналом (обычная)</span> <span className='filter_hide'>+</span>
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
                            <span>Автоматическая мойка</span> <span className='filter_hide'>+</span>
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
            <div> 
               
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
                                <span>Сумма кредита</span> <span className='filter_hide'>+</span>
                                </p>
                                <div>
                                    <input type="range" id="sum_credit" name="sum_credit" min="500" max="11000" />
                                </div>
                            </div>
                            <div className='first_sum filter_box'>
                                <p className="filter_title">
                                <span>Первоначальный взнос</span> <span className='filter_hide'>+</span>
                                </p>
                                <div>
                                    <input type="range" id="first_sum" name="first_sum" min="500" max="11000" />
                                </div>
                            </div>
                            <div className='credit_year filter_box'>
                                <p className="filter_title">
                                <span>Срок кредита</span> <span className='filter_hide'>+</span>
                                </p>
                                <div>
                                    <input type="range" id="credit_year" name="credit_year" min="500" max="11000" />
                                </div>
                            </div>
                            <div className='musthave filter_box'>
                                <p className="filter_title">
                                <span>Требования по страхованию</span> <span className='filter_hide'>+</span>
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
                                        <label htmlFor="">не предъявляются(продать душу дъяволу)</label>
                                    </p>
                
                                
                                </div>
                            </div>
                            <div className='ifcredit filter_box'>
                                <p className="filter_title">
                                <span>Условия кредитования</span> <span className='filter_hide'>+</span>
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
                                <span>Сумма кредита</span> <span className='filter_hide'>+</span>
                                </p>
                                <div>
                                    <input type="range" id="sum_credit" name="sum_credit" min="500" max="11000" />
                                </div>
                            </div>
                            <div className='first_sum filter_box'>
                                <p className="filter_title">
                                <span>Первоначальный взнос</span> <span className='filter_hide'>+</span>
                                </p>
                                <div>
                                    <input type="range" id="first_sum" name="first_sum" min="500" max="11000" />
                                </div>
                            </div>
                            <div className='credit_year filter_box'>
                                <p className="filter_title">
                                <span>Срок кредита</span> <span className='filter_hide'>+</span>
                                </p>
                                <div>
                                    <input type="range" id="credit_year" name="credit_year" min="500" max="11000" />
                                </div>
                            </div>
                            
                            <div className='ifcredit filter_box'>
                                <p className="filter_title">
                                <span>Условия лизинга</span> <span className='filter_hide'>+</span>
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
            <div> 

                <p className='clearfilter'>
                Сбросить фильтры
                </p>
                <div className='kasko filter_box'>
                            <p className="filter_title">
                            <span>КАСКО </span> <span className='filter_hide'>+</span>
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
                            <span>ОСАГО</span> <span className='filter_hide'>+</span>
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
                            <span>ДОСАГО</span> <span className='filter_hide'>+</span>
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
    


  }
}
