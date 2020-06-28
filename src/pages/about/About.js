import React, { Component } from 'react'
import './about.css';
import play from '../../images/video_play.png';
import newsposter from '../../images/Rectangle457.jpg';
import Image from '../../images/Image.jpg';

export default class About extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         page_title : 'О сообществе',
         page_name : 'about_page'
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

                    <h1 className='zag'>О сообществе</h1>
                    <div className="about_wrap">
                        <div className="video">
                            <video src="../../images/videoplayback.mp4"></video>
                            <img src={play} alt="" className='video_play'/>
                        </div>
                        <div className="first_info_box">
                               
                                    <img src={Image} alt=""/>
                                    <div className="fib_text">
                                        <span className="first_info_box_name">
                                        Что такое СТОТАКС и чем он будет вам полезен?
                                        </span>
                                        <p>
                                        Повседневная практика показывает, что консультация с широким активом предоставляет широкие возможности для модели развития. Но элементы политического процесса, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы. 
                                        </p>
                                        <p>
                                        Таким образом, семантический разбор внешних противодействий представляет собой интересный эксперимент проверки укрепления моральных ценностей! Но некоторые особенности внутренней политики смешаны. Таким образом, семантический разбор внешних противодействий представляет
                                        </p>                                   
                                        <p>
                                        Являясь всего лишь частью общей картины, ключевые особенности структуры проекта, превозмогая сложившуюся непростую экономическую ситуацию, представлены в исключительно положительном свете.
                                        </p>
                                    </div>
                                   
                                
                        </div>
                        
                    </div>

                    <div className="statii">
                        <h1 className="zag">Полезные статьи</h1>
                        <div className="statii_wrap">
                            <div className="statiya">
                                <div className="statiya_name">Несколько обязательных фактов о такси по всему миру, которые вы должны знать</div>
                                <div className="statiya_text">
                                22 марта — Международный день таксиста! Практически первое, что мы видим, приезжая в чужую страну, — это таксисты, которые обещают домчать нас до места назначения. Активные путешественники наверняка заметили, что этот вид транспорта в разных уголках мира различается.
                                </div>
                                <div className="statiya_pic">
                                <img src={newsposter} alt="" className='newsposter'/>
                                </div>
                                <div className="statiya_text">
                                <b>1. Китай </b> 
                                В Китае,прежде чем заказывать машину, необходимо уточнить цену. 
                                По одному и тому же маршруту у разных таксомоторных компаний цены могут отличаться в два или три раза. 
                                Оплата производится строго по тарифу. И это при не самом лучшем сервисе. 
                                Радует уже, что власти настоятельно рекомендуют таксистам принимать ванну перед работой и запрещают 
                                курить и плевать в автомобилях.
                                 <b>2. Южная Корея </b>
                                 Тут можно прокатиться на одном из самых дешевых такси в мире. Расчет стоимости поездки осуществляется исходя из времени аренды такси. Но если вы попадете в пробку (что в Корее большая редкость), то счетчик будет продолжать отсчитывать время поездки. Несмотря на низкую стоимость услуг, корейское такси отличается высоким уровнем комфорта: перевозки осуществляются на автомобилях премиум-класса.
                                </div>
                                <div className="statiya_date">
                                12.01.2020
                                </div>
                            </div>
                            <div className="statiya">
                                <div className="statiya_name">Несколько обязательных фактов о такси по всему миру, которые вы должны знать</div>
                                <div className="statiya_text">
                                22 марта — Международный день таксиста! Практически первое, что мы видим, приезжая в чужую страну, — это таксисты, которые обещают домчать нас до места назначения. Активные путешественники наверняка заметили, что этот вид транспорта в разных уголках мира различается.
                                </div>
                              
                                <div className="statiya_text">
                                <b>1. Китай </b> 
                                В Китае,прежде чем заказывать машину, необходимо уточнить цену. 
                                По одному и тому же маршруту у разных таксомоторных компаний цены могут отличаться в два или три раза. 
                                Оплата производится строго по тарифу. И это при не самом лучшем сервисе. 
                                Радует уже, что власти настоятельно рекомендуют таксистам принимать ванну перед работой и запрещают 
                                курить и плевать в автомобилях.
                                 <b>2. Южная Корея </b>
                                 Тут можно прокатиться на одном из самых дешевых такси в мире. Расчет стоимости поездки осуществляется исходя из времени аренды такси. Но если вы попадете в пробку (что в Корее большая редкость), то счетчик будет продолжать отсчитывать время поездки. Несмотря на низкую стоимость услуг, корейское такси отличается высоким уровнем комфорта: перевозки осуществляются на автомобилях премиум-класса.
                                </div>
                                <div className="statiya_date">
                                12.01.2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
