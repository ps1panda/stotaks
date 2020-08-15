import React, { Component } from 'react'
import './Home.css';
import Icon1 from '../../images/Icon1.svg'
import Icon2 from '../../images/Icon2.svg'
import Icon3 from '../../images/Icon3.svg'
import Icon4 from '../../images/Icon4.svg'
import Icon5 from '../../images/Icon5.svg'
import Icon6 from '../../images/Icon6.svg'
import Icon7 from '../../images/Icon7.svg'
import Icon8 from '../../images/Icon8.svg'
import Icon9 from '../../images/Icon9.svg'
import Icon10 from '../../images/Icon10.svg'
export default class Home extends Component {
    render() {
        return (
            <div className="home_page">
                <div className="home_page__topinfo gray_bg">
                    Всё, что от Вас требуется – найти нужный раздел,<br />
                    ознакомиться с имеющимися предложениями и сделать ПРАВИЛЬНЫЙ ВЫБОР!
                </div>
                <div className="wrap">
                    <div className="boxes">
                        <div className="boxes_wrap">                        
                            <div className="box">
                                <a href='../select/taxopark'>
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор таксопарка </div>
                                </a>
                            </div>
                            <div className="box">
                                <a href='#'>
                                <div className="box_pic">
                                    <img src={Icon2} alt=""/>
                                </div>
                                <div className="box_text">Оборудование автомобилей такси </div>
                                </a>
                            </div>
                            <div className="box">
                                <a href='#'>
                                <div className="box_pic">
                                    <img src={Icon3} alt=""/>
                                </div>
                                <div className="box_text">Обслуживание автомобилей такси</div>
                                </a>
                            </div>
                            <div className="box">
                                <a href='#'>
                                <div className="box_pic">
                                    <img src={Icon4} alt=""/>
                                </div>
                                <div className="box_text">Мойка автомобилей такси</div>
                                </a>
                            </div>
                            <div className="box">
                                <a href='#'>
                                <div className="box_pic">
                                    <img src={Icon5} alt=""/>
                                </div>
                                <div className="box_text">Предрейсовые осмотры </div>
                                </a>
                            </div>
                            <div className="box">
                                <a href='#'>
                                <div className="box_pic">
                                    <img src={Icon6} alt=""/>
                                </div>
                                <div className="box_text">Выбор автосалона</div>
                                </a>
                            </div>
                            <div className="box">
                                <a href='#'>
                                <div className="box_pic">
                                    <img src={Icon7} alt=""/>
                                </div>
                                <div className="box_text">Автокредитование и автолизинг</div>
                                </a>
                            </div>
                            <div className="box">
                                <a href='#'>
                                <div className="box_pic">
                                    <img src={Icon8} alt=""/>
                                </div>
                                <div className="box_text">Услуги автострахования </div>
                                </a>
                            </div>
                            <div className="box">
                                <a href='#'>
                                <div className="box_pic">
                                    <img src={Icon9} alt=""/>
                                </div>
                                <div className="box_text">Оформление документов </div>
                                </a>
                            </div>
                            <div className="box">
                                <a href='#'>
                                <div className="box_pic">
                                    <img src={Icon10} alt=""/>
                                </div>
                                <div className="box_text">Общежития и хостелы </div>
                                </a>
                            </div>
                        </div>
                    </div>
                
                    <div className="look_more">
                        <h1>
                            Вы это видели!?
                        </h1>
                        <p>
                        Самые популярные ролики YouTube о работе<br />
                        в московском такси
                        </p>
                        <div className="look_more_wrap">
                            <div className="look_more_info">
                                <a href="#">
                                <div className="look_more_info-name">Видео дня</div>
                                <div className="look_more_info-desc">
                                    Хитросделанный пассажир
                                    Яндекс.Такси хотел проехать бесплатно
                                </div>
                                <div className="look_more_info-where">Канал «Свои люди в такси»</div>
                                </a>
                            </div>
                            <div className="look_more_info">
                                <a href="#">
                                <div className="look_more_info-name">Видео недели</div>
                                <div className="look_more_info-desc">
                                    Хитросделанный пассажир
                                    Яндекс.Такси хотел проехать бесплатно
                                </div>
                                <div className="look_more_info-where">Канал «Свои люди в такси»</div>
                                </a>
                            </div>
                            <div className="look_more_info">
                                <a href="#">
                                <div className="look_more_info-name">Выбор СТОТАКС</div>
                                <div className="look_more_info-desc">
                                    Хитросделанный пассажир
                                    Яндекс.Такси хотел проехать бесплатно
                                </div>
                                <div className="look_more_info-where">Канал «Свои люди в такси»</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
