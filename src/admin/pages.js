import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



import Adminhome from './adminpage/Adminhome.js'
import DriverList from './adminpage/drivers/DriverList.js'
import DriverEdit from './adminpage/drivers/DriverEdit.js'
import PartnersList from './adminpage/partners/PartnersList.js'
import NewsList from './adminpage/news/NewsList.js'
import AboutList from './adminpage/about/AboutList.js'
import WikiList from './adminpage/wiki/WikiList.js'



export default class AdminPages extends Component {
    render() {
        return (
            <Router>
            <Switch>
                
                <Route exact path='/admin/adminhome' component={Adminhome} />
                <Route exact path='/admin/driverlist' component={DriverList} />
                <Route exact path='/admin/driveredit' component={DriverEdit} />
                
                <Route exact path='/admin/partnerslist' component={PartnersList} />
                <Route exact path='/admin/newslist' component={NewsList} />
                <Route exact path='/admin/aboutlist' component={AboutList} />
                <Route exact path='/admin/wikilist' component={WikiList} />
                
                
                
                
            </Switch>
          </Router>  
        )
    }
}
