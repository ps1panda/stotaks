import React, { Component } from 'react';

import '../App.css';
import './admin.css'
import Header from './Header'
import AdminMenu from './adminMenu'
import AdminPages from './pages'


export default class AdminApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
        whatadminpage: 'admin',
        title: ''
    };
   
};
updateData = (value,value2) => {
  this.setState({ whatadminpage: value, title: value2 })
 
}

  render() {
    return (
      <div className="main_wrap">
      <Header />  
      <div className="main_wrap_inner">
      <AdminMenu updateData={this.updateData} /> 
      <AdminPages title = {this.state.title} />                        

      </div>
      

     
    </div>
    );
  }
}
