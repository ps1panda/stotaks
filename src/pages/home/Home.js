import React, { Component } from 'react'
import './Home.css';
import Icon1 from '../../images/Icon1.svg'
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
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор<br/> таксопарка </div>
                            </div>
                            <div className="box">
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор<br/> таксопарка </div>
                            </div>
                            <div className="box">
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор<br/> таксопарка </div>
                            </div>
                            <div className="box">
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор<br/> таксопарка </div>
                            </div>
                            <div className="box">
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор<br/> таксопарка </div>
                            </div>
                            <div className="box">
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор<br/> таксопарка </div>
                            </div>
                            <div className="box">
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор<br/> таксопарка </div>
                            </div>
                            <div className="box">
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор<br/> таксопарка </div>
                            </div>
                            <div className="box">
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор<br/> таксопарка </div>
                            </div>
                            <div className="box">
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор<br/> таксопарка </div>
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
                                <div className="look_more_info-name">Видео дня</div>
                                <div className="look_more_info-desc">
                                    Хитросделанный пассажир
                                    Яндекс.Такси хотел проехать бесплатно
                                </div>
                                <div className="look_more_info-where">Канал «Свои люди в такси»</div>
                            </div>
                            <div className="look_more_info">
                                <div className="look_more_info-name">Видео недели</div>
                                <div className="look_more_info-desc">
                                    Хитросделанный пассажир
                                    Яндекс.Такси хотел проехать бесплатно
                                </div>
                                <div className="look_more_info-where">Канал «Свои люди в такси»</div>
                            </div>
                            <div className="look_more_info">
                                <div className="look_more_info-name">Выбор СТОТАКС</div>
                                <div className="look_more_info-desc">
                                    Хитросделанный пассажир
                                    Яндекс.Такси хотел проехать бесплатно
                                </div>
                                <div className="look_more_info-where">Канал «Свои люди в такси»</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
