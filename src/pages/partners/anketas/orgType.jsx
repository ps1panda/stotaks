import React, { Component } from 'react';
import Taxipool from './orgtypes/Taxipool';

export default class OrgType extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            orgype:'1'
        };
    
    };
  render() {
      if(this.state.orgype =='1'){
        return (
            <Taxipool />
          );
      }
   
  }
}
