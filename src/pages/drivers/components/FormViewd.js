import React, { Component } from 'react'



import dr_icon from "../../../images/dr_icon.svg"
import mini_logo from "../../../images/mini_logo.png"
import mail_icon from "../../../images/mail_icon.svg"
import verification_icon from "../../../images/verification_icon.svg"


import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../home/Home'
import Driver_anketa from '../Driver_anketa'

export default class FormViewd extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        whatshow:'3',
        link:''
      };
      this.changeViewd = this.changeViewd.bind(this)
    };
    changeViewd(){
      this.setState({
        whatshow:'2'
      })
      
    }
    render() {
      if( this.state.whatshow === '1'){
            return (
              
              <div className="register_wrap">
              <div className="register_wrap_form">
                  <form action="" method="post">
                    <p>
                        <label htmlFor="dr_name">Имя</label>
                        <input type="text" name="driver_name" id="dr_name" placeholder="Ваше имя"/>
                    </p>
                    <p>
                      <label htmlFor="dr_secondname">Фамилия</label>
                      <input type="text" name="driver_secondname" id="dr_secondname"/>
                    </p>
                    <p>
                      <label htmlFor="dr_surname">Отчество</label>
                      <input type="text" name="driver_surname" id="dr_surname"/>
                    </p>
                    <p>
                          <label htmlFor="dr_bday">Дата рождения</label>
                        <input type="date" name="driver_bday" id="dr_bday"/>
                    </p>
                    <p>
                      <label htmlFor="dr_city">Местопроживания</label>
                      <input type="text" name="driver_city" id="dr_city"/>
                    </p>
                    <p>
                        <label htmlFor="dr_phone"> Мобильный телефон</label>
                        <input type="tel" name="driver_phone" id="dr_phone"/>
                    </p>
                    <p>
                        <label htmlFor="dr_email">Электронная почта</label>
                        <input type="email" name="driver_email" id="dr_email"/>
                    </p>

                    <p>
                        <label htmlFor="dr_pass">Пароль</label>
                        <input type="password" name="driver_password" id="dr_pass"/>
                    </p>
                    <p>
                      <label htmlFor="dr_pass_repeat">Повторить пароль</label>
                        <input type="password" name="driver_password_repeat" id="dr_pass_repeat"/>
                    </p>
                    <span className="requery_info">
                      <span>*</span>поля, обязательные для заполнения
                    </span>
                    <div className="form_info">
                      Для завершения регистрации подтвердите контактные данные
                    </div>
                    <input type="submit" className="btn_gray act_btn" onClick={this.changeViewd} value="подтвердить"/>

                    <div className="policity_info">
                        Нажимая "Подтвердить…" , Вы подтверждаете, что ознакомились
                        с <a href=""> Политикой конфиденциальности</a> и даете свое согласие на обработку введенных Вами персональных данных
                    </div>
                  </form>
                </div>
                
              <div className="register_wrap_info">
                  <div className="mini_logo">
                    <img src={mini_logo} alt=""/>
                  </div>
                  <div className="register_wrap_info_pic">
                    <img src={dr_icon} alt=""/>
                  </div>
                  <div className="register_wrap_info_title">
                    Регистрация водителя
                  </div>
                  <div className="register_wrap_info_desc">
                      <p>Пройдя регистрацию, Вы получите:</p>
                      <ul>
                        <li>быстрый поиск таксопарка по сохранённым данным;</li>
                        <li>доступ к отзывам пользователей о наших партнёрах;</li>
                        <li>возможность общения на форуме сообщества.</li>
                      </ul>
                  </div>
                
                  



              </div>
          </div>
          )
      }
      else if(this.state.whatshow === '2'){
        return(
          <div className="email_check">
            <img src={mail_icon} alt=""/>
            <div className="email_check_info">
            По указанному Вами адресу электронной почты отправлено подтверждающее письмо. Перейдите по ссылке из письма для завершения регистрации
            </div>
          </div>
        )
      }
      else if(this.state.whatshow ==='3'){
        return(
          <div className="email_verification">
            <img src={verification_icon} alt=""/>
            <h1>Поздравляем!</h1>
            <div className="email_check_info">
            Вы зарегистрированы на сайте Столичного таксомоторного сообщества.<br/>
            Теперь Вам в полном объеме доступны все функциональные возможности сайта, в том числе форум сообщества и доступ к отзывам о наших партнерах
            </div>
            <div className="links">
              <a href="/" className='alt_btn'> Вернуться на Главную</a>
              <a href="/Driver_anketa" className='btn_gray act_btn'>Перейти к анкете</a>
            </div>
            
            <div className='email_verification_dopinfo'>
            В случае возникновения каких-либо вопросов или технических проблем в процессе регистрации, отмены регистрации свяжитесь с нами по телефону
            <b>+7 495 410-12-66</b> или напишите в службу поддержки ООО "СТОТАКС"  <a href=''>info@stotax.ru </a>
            </div>
            <Router>
              <Switch>
                  <Route exact path='/' component={Home} />      
                  <Route exact path='/Driver_anketa' component={Driver_anketa} />     
                                            
              </Switch>
            </Router>

          </div>
          
        )
      }
      
    }
}
