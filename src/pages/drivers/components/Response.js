import React, { Component } from 'react';
import FormViewd from './FormViewd';
export default class Response extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           whatshow:'1'
        };
        
      };
    render() {
        let isSuccess = this.state.whatshow;
        console.log( this.state.whatshow)
        if (isSuccess == '1') {
          return <FormViewd/>;
        }
        else{
            return(
                <div>email</div>
            )
        }
       
        
        
    }
}
