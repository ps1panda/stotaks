
import React, { Component } from 'react'
import './header.css';
import logo from '../images/logo.svg'



export default class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       link:''
    };
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.showRegpopup = this.showRegpopup.bind(this)
    this.CloseReg = this.CloseReg.bind(this)
  };
  handleClick1(){
    this.setState({
      link:'driver_register'
    })
    document.querySelector('.next_page').classList.add('act')
  }
  handleClick2(){
    this.setState({
      link:'partner_register'
    })
  }
  showRegpopup(){
    document.querySelector('.reg_popup').style.display = 'block'
  }
  CloseReg(){
    document.querySelector('.reg_popup').style.display = 'none'
  }
  render() {
    return (
      <header>
        <div className="header_top">
          <div className="wrap">
              <div className="heder_top-logo">
                <a href="/">
                  <img src={logo} alt=""/>
                </a>
                
                </div>
                <div className="header_top-text">
                  <p>Столичное таксомоторное сообщество</p>
                  <p><b>ВСЁ</b> о московском такси: <span>работа, услуги, информация</span></p>
                </div>
                <div className="header_top-user">
                  <div className="heder_top-enter">Войти</div>
                  <div className="heder_top-registration" onClick={this.showRegpopup}>Регистрация</div>
                </div>
          </div>
            
        </div>
        <div className="header_bottom">
          <div className="wrap">
            <nav>
              <a href="/About">О сообществе</a>
              <a href="/Drivers">Водителям</a>
              <a href="/Partners">Партнерам</a>
              <a href="/Wiki">Энциклопедия такси</a>
              <a href="/News">Новости такси</a>
            </nav>
          </div>
        </div>
     

      <div className="reg_popup">
        <div className="close" onClick={this.CloseReg}>
          <span></span>
          <span></span>
        </div>
        <div className="reg_popup_title">
          Выберите тип <br />регистрации
        </div>
        <div className="select_box">
          <form action="">
            <input type="radio" name="select_type" id="select_driver" value="driver" />
            <label className="lbl_select_driver" htmlFor="select_driver" onClick={this.handleClick1}>Водитель</label>
            <input type="radio" name="select_type" id="select_partner" value="partner" />
            <label className="lbl_select_partner" htmlFor="select_partner" onClick={this.handleClick2}>Партнер</label>
            <a href={this.state.link} className="next_page">Продолжить</a>
          </form>
        </div>
      </div>
    </header>
    
    )
  }
}
