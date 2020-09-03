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
import Taxopark from './pages/select/Taxopark.js'
import Autocredit from './pages/select/Autocredit.js'
import Autosalon from './pages/select/Autosalon.js'
import Autostrah from './pages/select/Autostrah.js'
import Documents from './pages/select/Documents.js'
import Equipment from './pages/select/Equipment.js'
import Hostels from './pages/select/Hostels.js'
import Service from './pages/select/Service.js'
import View from './pages/select/View.js'
import Wash from './pages/select/Wash.js'
import Layout from './pages/partners/anketas/layout'

import Adminindex from './admin/index'

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
                <Route exact path='/select/taxopark' component={Taxopark} />
                <Route exact path='/select/autocredit' component={Autocredit} />
                <Route exact path='/select/autosalon' component={Autosalon} />
                <Route exact path='/select/autostrah' component={Autostrah} />
                <Route exact path='/select/documents' component={Documents} />
                <Route exact path='/select/equipment' component={Equipment} />
                <Route exact path='/select/hostels' component={Hostels} />
                <Route exact path='/select/service' component={Service} />
                <Route exact path='/select/view' component={View} />
                <Route exact path='/select/wash' component={Wash} />
                <Route exact path='/ankets/:ankets' component={Layout} />
                
            </Switch>
          </Router>  
        )
    }
}
