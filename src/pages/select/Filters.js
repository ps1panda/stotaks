import React, { Component } from 'react';

export default class Filters extends Component {
  render() {
    return (
        <div> 
            <p>
            <input type="checkbox" name="" id="use_anketa"/>
            <label htmlFor="use_anketa">Использовать анкетные данные</label>
            </p>
            <p className='clearfilter'>
            Сбросить фильтры
            </p>
            <div className='workrules'>
                <p className="filter_title">
                Условия работы
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
            
            <div className='mck'>
                <p className="filter_title">
                Метро МЦК
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
            <div className='okrug'>
                <p className="filter_title">
                Административный округ Москвы
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
            <div className='drive_treb'>
                <p className="filter_title">
                Требования к водителям
                </p>
                <div>
                    <div className="inner_filter">
                        <p className="inner_filter_title">
                        Гражданство
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
                        Водительское удостоверение
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
                        Водительский стаж
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
                        Опыт работы в такси
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
                        Наличие аккаунтов у агрегаторов такси
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
            <div className='autos'>
                <p className="filter_title">
                Автомобили
                </p>
                <div>
                <div className="inner_filter">
                        <p className="inner_filter_title">
                        Модельный ряд
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
                        Характеристики автомобилей
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
            <div className='price'>
                <p className="filter_title">
                Стоимость аренды в сутки
                </p>
                <div>
                    <input type="range" id="price" name="price" min="500" max="11000" />
                </div>
            </div>
            <div className='deposit'>
                <p className="filter_title">
                Требования по депозиту
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
            <div className='deposit'>
                <p className="filter_title">
                Подключение к агрегаторам
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
            <div className='deposit'>
                <p className="filter_title">
                Наличие диспетчерской / Техподдержки водителей
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
}
