import React, { Component } from 'react'
import './partners.css';
import FormViewd from './components/FormViewd';
import Home from '../home/Home'
import Partner_anketa from './Partner_anketa'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class Partnerregister extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           page_title : 'Регистрация партнера',
           page_name : 'partner_register_page',

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
                    <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />      
                        <Route exact path='/Partner_anketa' component={Partner_anketa} />     
                                                    
                    </Switch>
                    </Router> 
            </div>
        )
    }
}
