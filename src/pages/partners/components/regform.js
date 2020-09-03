import React, { Component } from 'react';
import dr_icon from "../../../images/pr_icon.svg"
import mini_logo from "../../../images/mini_logo.png"
import InputMask from "react-input-mask";
export default class Regform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            whatshow: '2',
            link: ''
        };
       
    };

  render() {
      
    return (
       
        <div className="register_wrap">
            <div className="register_wrap_form">
                <form action="" method="post">
                <p>
                    <label htmlFor="company_name">Название компании*</label>
                    <input type="text" name="company_name" id="company_name" placeholder="Введите название"/>
                </p>
                <p>
                    <label htmlFor="pr_logo">Вложение</label>
                    <input type="file" name="pr_logo" id="pr_logoame" placeholder="Прикрепить логотип компании"/>
                </p>
                <p>
                    <label htmlFor="pr_name">Контактное лицо</label>
                    <input type="text" name="pr_name" id="pr_name"  placeholder="Введите фамилию"/>
                </p>

                <p>
                    <label htmlFor="pr_phone">  Основной телефон*</label>
                    <InputMask mask="+7 (999)999-99-99" defaultValue="+7 (___)___-__-__"  alwaysShowMask='true'/>
                </p>
                <p>
                    <label htmlFor="pr_email">Электронная почта</label>
                    <input type="email" name="pr_email" id="pr_email" placeholder="Введите email"/>
                </p>

                <p>
                    <label htmlFor="pr_pass">Пароль</label>
                    <input type="password" name="pr_password" id="pr_pass" placeholder="Придумайте пароль"/>
                </p>
                <p>
                    <label htmlFor="pr_pass_repeat">Повторить пароль</label>
                    <input type="password" name="pr_password_repeat" id="pr_pass_repeat" placeholder="Введите пароль повторно"/>
                </p>
                
                <p>
                    <label htmlFor="pr_site">Сайт</label>
                    <input type="text" name="pr_site" id="pr_site"  placeholder="Введите имя сайта"/>
                </p>
                <span className="requery_info">
                    <span>*</span>поля, обязательные для заполнения
                </span>
                <div className="form_info">
                    Для завершения регистрации подтвердите контактные данные
                </div>
                <input type="submit" className="btn_gray act_btn" onClick={() => { this.props.updateData(this.state.whatshow)}} value="подтвердить"/>

                <div className="policity_info">
                    Нажимая "Подтвердить…" , Вы подтверждаете, что ознакомились
                    с <a href="#"> Политикой конфиденциальности</a> и даете свое согласие на обработку введенных Вами персональных данных
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
                Регистрация партнера
                </div>
                <div className="register_wrap_info_desc">
                    <p>Пройдя регистрацию, Вы получите:</p>
                    <ul>
                    <li>приоритет над незарегистрированными компаниями;</li>
                    <li>доступ к отзывам пользователей о наших партнёрах;</li>
                    <li>возможность общения на форуме сообщества.</li>
                    </ul>
                      
                </div>
            
                



        </div>
    </div>
    );
  }
}
