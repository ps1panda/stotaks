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
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            kindfilter: '',
            kind:'',
            kinds:['taxipool','motorshow','carwash','prertip','Equipment','maintenance','hostel','loans','insurance','preparation']
        };
       
    };
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
                                <Link to={{
                                    pathname:'select/taxopark',
                                    kindfilter: 'taxopark',
                                    kind:'1',
                                    title:'Выбор таксопарка'
                                    }} >
                                
                                <div className="box_pic">
                                    <img src={Icon1} alt=""/>
                                </div>
                                <div className="box_text">Выбор таксопарка </div>
                                </Link>
                            </div>
                            <div className="box">
                            <Link to={{
                                    pathname:'select/equipment',
                                    kindfilter: 'equipment',
                                    kind:'5',
                                    title:'Оборудование автомобилей такси'
                                    }} >
                                <div className="box_pic">
                                    <img src={Icon2} alt=""/>
                                </div>
                                <div className="box_text">Оборудование автомобилей такси </div>
                                </Link>
                            </div>
                            <div className="box">
                            <Link to={{
                                    pathname:'select/Maintenance',
                                    kindfilter: 'service',
                                    kind:'6',
                                    title:'Обслуживание автомобилей такси'
                                    }} >   
                                
                                <div className="box_pic">
                                    <img src={Icon3} alt=""/>
                                </div>
                                <div className="box_text">Обслуживание автомобилей такси</div>
                                </Link>
                            </div>
                            <div className="box">
                            <Link to={{
                                    pathname:'select/carwash',
                                    kindfilter: 'wash',
                                    kind:'3',
                                    title:'Мойка автомобилей такси'
                                    }} >
                                
                                <div className="box_pic">
                                    <img src={Icon4} alt=""/>
                                </div>
                                <div className="box_text">Мойка автомобилей такси</div>
                                </Link>
                            </div>
                            <div className="box">
                            <Link to={{
                                    pathname:'select/pretrip',
                                    kindfilter: 'view',
                                     kind:'4',
                                     title:'Предрейсовые осмотры'
                                    }} >
                                
                                <div className="box_pic">
                                    <img src={Icon5} alt=""/>
                                </div>
                                <div className="box_text">Предрейсовые осмотры </div>
                                </Link>
                            </div>
                            <div className="box">
                                <Link to={{
                                    pathname:'select/motorshow',
                                    kindfilter: 'autosalon',
                                    kind:'2',
                                    title:'Выбор автосалона'
                                    }} >
                                
                                <div className="box_pic">
                                    <img src={Icon6} alt=""/>
                                </div>
                                <div className="box_text">Выбор автосалона</div>
                                </Link>
                            </div>
                            <div className="box">
                                <Link to={{
                                    pathname:'select/loans',
                                    kindfilter: 'autocredit',
                                    kind:'8',
                                    title:'Автокредитование и автолизинг'
                                    }} >
                                
                                <div className="box_pic">
                                    <img src={Icon7} alt=""/>
                                </div>
                                <div className="box_text">Автокредитование и автолизинг</div>
                                </Link>
                            </div>
                            <div className="box">
                                <Link to={{
                                    pathname:'select/insurance',
                                    kindfilter: 'autostrah',
                                    kind:'9',
                                    title:'Услуги автострахования'
                                    }} >
                                
                                <div className="box_pic">
                                    <img src={Icon8} alt=""/>
                                </div>
                                <div className="box_text">Услуги автострахования </div>
                                </Link>
                            </div>
                            <div className="box">
                                <Link to={{
                                    pathname:'select/preparation',
                                    kindfilter: 'documents',
                                    kind:'10',
                                    title:'Оформление документов'
                                    }} >
                                
                                <div className="box_pic">
                                    <img src={Icon9} alt=""/>
                                </div>
                                <div className="box_text">Оформление документов </div>
                                </Link>
                            </div>
                            <div className="box">
                                <Link to={{
                                    pathname:'select/hotel',
                                    kindfilter: 'hostels',
                                    kind:'7',
                                    title:'Общежития и хостелы'
                                    }} >
                               
                                <div className="box_pic">
                                    <img src={Icon10} alt=""/>
                                </div>
                                <div className="box_text">Общежития и хостелы </div>
                               
                                </Link>
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
