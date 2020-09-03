import React, { Component } from 'react'
import mail_icon from "../../../images/mail_icon.svg"
export default class Driververyfication extends Component {
    constructor(props) {
        super(props)

        this.state = {
            whatshow: '3',
            link: ''
        };
        setTimeout(() => {
            this.props.updateData(this.state.whatshow)
        }, 5000);
    };
    
    render() {
        
        
        return (
            <div>
                 <div className="email_check">
                    <img src={mail_icon} alt=""/>
                    <div className="email_check_info">
                    По указанному Вами адресу электронной почты отправлено подтверждающее письмо. Перейдите по ссылке из письма для завершения регистрации
                    </div>
                </div>
            </div>
        )
    }
}
