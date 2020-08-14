
import React, { Component } from 'react'
import './header.css';
import logo2 from '../images/Logo_black.png'



export default class Header extends Component {
  
  render() {
    

        return ( 
          <header>
            
              <div className='admin_header'>
                <div>
                  <a href="/">
                      <img src={logo2} alt=""/>
                    </a>    
                </div>
                <div className='admin_header__info'>
                    <div className='admin_header__info__avatar'></div>
                    <div className='admin_header__info__dop'>
                      <div className='admin_header__info__dop___name'> Администратор</div>
                      <div className='admin_header__info__dop___logout'>выход</div>
                    </div>
                </div>
              </div>
            
          </header>
          
        )
    }
     
    
  
}
