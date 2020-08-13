import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Home from './pages/home/Home'
import News from './pages/news/News'
import About from './pages/about/About'
import Drivers from './pages/drivers/Drivers'
import Partners from './pages/partners/Partners'
import Wiki from './pages/wiki/Wiki'
import Driverregister from './pages/drivers/Driverregister'
import Partnerregister from './pages/partners/Partnerregister'
import Driver_anketa from './pages/drivers/Driver_anketa'
export default class Pages extends Component {
    render() {
        return (
            <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/News' component={News} />
                <Route exact path='/About' component={About} />
                <Route exact path='/Drivers' component={Drivers} />
                <Route exact path='/Partners' component={Partners} />
                <Route exact path='/Wiki' component={Wiki} />
                <Route exact path='/driver_register' component={Driverregister} />
                <Route exact path='/partner_register' component={Partnerregister} />
                <Route exact path='/Driver_anketa' component={Driver_anketa} />
                
                
            </Switch>
          </Router>  
        )
    }
}
