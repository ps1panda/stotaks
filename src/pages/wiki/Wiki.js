import React, { Component } from 'react'
import './wiki.css';
export default class Wiki extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           page_title : 'Энциклопедия такси',
           page_name : 'Wiki_page'
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

                    <h1 className='zag'>Энциклопедия такси</h1>
                </div>
                
            </div>
        )
    }
}
