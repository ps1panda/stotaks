import React, { Component } from 'react';

import InputMask from "react-input-mask";
import RightSide from '../../../components/RightSide';
export default class Regform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            whatshow: '2',
            link: '',
            firstName:'',
            lastName:'',
            patronymic:'',
            dayOfBirth:'',
            phone:'',
            email:'',
            dr_pass_repeat:'',
            error: null,
            isLoaded: false,
            items: [],
        };
        this.FORMsend = this.FORMsend.bind(this)
      //  this.TakeId = this.TakeId.bind(this)
        //this.Action = this.Action.bind(this)
    };
    
    FORMsend (){

        var data = {
            
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "patronymic": this.state.patronymic,
            "dayOfBirth": this.state.dayOfBirth ,
            "phone": this.state.phone,
            "email": this.state.email
         }
         var data2 ={
          "email": this.state.email,
          "password":this.state.dr_pass_repeat,
          "passwordConfirm":this.state.dr_pass
         }
      
        fetch("http://46.17.43.203:10101/api/drivers", {
            method: "POST",
            headers: {
               
                'Content-Type': 'application/json'
              },
            body:  JSON.stringify(data)
          })
         .then(function(data){ 
          fetch("http://46.17.43.203:10101/api/account", {
            method: "POST",
            headers: {
               
                'Content-Type': 'application/json'
              },
            body:  JSON.stringify(data2)
          })
         .then(function(data2){ 
          console.log(data2)
         }); 
         }); 
    }
  render() {
      
    return (
       
        <div className="register_wrap">
            <div className="register_wrap_form">
               
                <p>
                    <label htmlFor="dr_name">Имя</label>
                    <input type="text" name="driver_name" id="dr_name" placeholder="Введите имя" onChange={(e) => this.setState({firstName: e.target.value})}/>


                </p>
                <p>
                    <label htmlFor="dr_secondname">Фамилия</label>
                    <input type="text" name="driver_secondname" id="dr_secondname"  placeholder="Введите фамилию" onChange={(e) => this.setState({lastName: e.target.value})}/>
                </p>
                <p>
                    <label htmlFor="dr_surname">Отчество</label>
                    <input type="text" name="driver_surname" id="dr_surname"  placeholder="Введите отчество" onChange={(e) => this.setState({patronymic: e.target.value})}/>
                </p>
                <p>
                        <label htmlFor="dr_bday">Дата рождения</label>
                        <InputMask mask="9999-99-99" defaultValue="____-__-__" alwaysShowMask='true' onChange={(e) => this.setState({dayOfBirth: e.target.value})}/>
                </p>
                <p>
                    <label htmlFor="dr_city">Местопроживания</label>
                    <input type="text" name="driver_city" id="dr_city"  placeholder="Введите город"/>
                </p>
                <p>
                    <label htmlFor="dr_phone"> Мобильный телефон</label>
                    <InputMask mask="+7 (999)999-99-99" defaultValue="+7 (___)___-__-__"  alwaysShowMask='true' onChange={(e) => this.setState({phone: e.target.value})}/>
                </p>
                <p>
                    <label htmlFor="dr_email">Электронная почта</label>
                    <input type="email" name="driver_email" id="dr_email" placeholder="Введите email" onChange={(e) => this.setState({email: e.target.value})}/>
                </p>

                <p>
                    <label htmlFor="dr_pass">Пароль</label>
                    <input type="password" name="driver_password" id="dr_pass"  onChange={(e) => this.setState({dr_pass: e.target.value})}  placeholder="Придумайте пароль"/>
                </p>
                <p>
                    <label htmlFor="dr_pass_repeat">Повторить пароль</label>
                    <input type="password" name="driver_password_repeat" id="dr_pass_repeat"  onChange={(e) => this.setState({dr_pass_repeat: e.target.value})} placeholder="Введите пароль повторно"/>
                </p>
                <span className="requery_info">
                    <span>*</span>поля, обязательные для заполнения
                </span>
                <div className="form_info">
                    Для завершения регистрации подтвердите контактные данные
                </div>
                <input type="submit" className="btn_gray act_btn" onClick={this.FORMsend} value="подтвердить"/>

                <div className="policity_info">
                    Нажимая "Подтвердить…" , Вы подтверждаете, что ознакомились
                    с <a href="#"> Политикой конфиденциальности</a> и даете свое согласие на обработку введенных Вами персональных данных
                </div>
            </div>
            
          < RightSide />
                



    </div>
    );
  }
}
