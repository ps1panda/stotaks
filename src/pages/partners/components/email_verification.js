import React, { Component } from 'react';

import verification_icon from "../../../images/verification_icon.svg"
export default class Emailverification extends Component {
  render() {
    return (
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
     

        </div>
    );
  }
}
