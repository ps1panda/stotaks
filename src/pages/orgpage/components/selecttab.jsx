import React, { Component } from 'react';
import MapOrg from './map'
import NewRewiew from './newrewiew';
import Reviews from './reviews';

export default class SelectTab extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tabindex:''
            

        };
       
    };
  render() {
      if(this.props.tabindex === '1'){
        return (
            <MapOrg />
          );
      }
      if(this.props.tabindex === '2'){
          return (
              <Reviews />
          )
      }
      if(this.props.tabindex === '3'){
        return (
            <NewRewiew />
        )
    }
   
  }
}
