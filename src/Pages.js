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
import Partner_anketa from './pages/partners/Partner_anketa'
import Layout from './pages/partners/anketas/layout'
import OrgPage from './pages/select/views/OrgPage'

import Adminindex from './admin/index'
import OrgPageLayout from './pages/orgpage/orgpagelayout';

export default class Pages extends Component {
    render() {
        return (
            <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/news' component={News} />
                <Route exact path='/about' component={About} />
                <Route exact path='/drivers' component={Drivers} />
                <Route exact path='/partners' component={Partners} />
                <Route exact path='/wiki' component={Wiki} />
                <Route exact path='/driver_register' component={Driverregister} />
                <Route exact path='/partner_register' component={Partnerregister} />
                <Route exact path='/driver_anketa' component={Driver_anketa} />
                <Route exact path='/partner_anketa' component={Partner_anketa} />                
                <Route exact path='/admin/' component={Adminindex} />
                <Route exact path='/ankets/:ankets' component={Layout} />
                <Route exact path='/organizations/:kind/:organization' component={OrgPageLayout} />
                <Route exact path='/select/:kind' component={OrgPage} />
                
            </Switch>
          </Router>  
        )
    }
}
