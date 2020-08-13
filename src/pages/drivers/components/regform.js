import React, { Component } from 'react';
import dr_icon from "../../../images/dr_icon.svg"
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
                    <label htmlFor="dr_name">Имя</label>
                    <input type="text" name="driver_name" id="dr_name" placeholder="Введите имя"/>


                </p>
                <p>
                    <label htmlFor="dr_secondname">Фамилия</label>
                    <input type="text" name="driver_secondname" id="dr_secondname"  placeholder="Введите фамилию"/>
                </p>
                <p>
                    <label htmlFor="dr_surname">Отчество</label>
                    <input type="text" name="driver_surname" id="dr_surname"  placeholder="Введите отчество"/>
                </p>
                <p>
                        <label htmlFor="dr_bday">Дата рождения</label>
                        <InputMask mask="99.99.9999" defaultValue="__.__.____" alwaysShowMask='true'/>
                </p>
                <p>
                    <label htmlFor="dr_city">Местопроживания</label>
                    <input type="text" name="driver_city" id="dr_city"  placeholder="Введите город"/>
                </p>
                <p>
                    <label htmlFor="dr_phone"> Мобильный телефон</label>
                    <InputMask mask="+7 (999)999-99-99" defaultValue="+7 (___)___-__-__"  alwaysShowMask='true'/>
                </p>
                <p>
                    <label htmlFor="dr_email">Электронная почта</label>
                    <input type="email" name="driver_email" id="dr_email" placeholder="Введите email"/>
                </p>

                <p>
                    <label htmlFor="dr_pass">Пароль</label>
                    <input type="password" name="driver_password" id="dr_pass" placeholder="Придумайте пароль"/>
                </p>
                <p>
                    <label htmlFor="dr_pass_repeat">Повторить пароль</label>
                    <input type="password" name="driver_password_repeat" id="dr_pass_repeat" placeholder="Введите пароль повторно"/>
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
    );
  }
}
