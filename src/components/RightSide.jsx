import React, { Component } from 'react';
import dr_icon from "../images/dr_icon.svg"
import pr_icon from "../images/pr_icon.svg"
import mini_logo from "../images/mini_logo.png"
export default class RightSide extends Component {
  render() {
    return (
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
    )
  }
}
