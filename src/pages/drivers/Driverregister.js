import React, { Component } from 'react'
import './drivers.css';
import FormViewd from './components/FormViewd';
import Home from '../home/Home'
import Driver_anketa from './Driver_anketa'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Driverregister extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           page_title : 'Регистрация водителей',
           page_name : 'driver_register_page',

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
                      <FormViewd />
                    </div>    
                   
            </div>
        )
    }
}
