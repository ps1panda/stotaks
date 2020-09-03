import React, { Component } from 'react'
import SelectOrg from './components/select_org';
import './partners.css';


export default class Partner_anketa extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page_title: 'Анкета Партнера',
      page_name: 'partner_anketa_page',
      select_org:''

    };
    

  };


  render() {
    return (
      <div className={this.state.page_name}>
        
            <SelectOrg />


      </div>


    )
  }
}
