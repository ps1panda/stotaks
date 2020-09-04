import React, { Component } from 'react';
import SelectTab from './selecttab';

export default class TopBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tabindex: '1',
            

        };
        this.handleClick1 = this.handleClick1.bind(this)
    };
    handleClick1(e){
        
        for(let i = 0;i<document.querySelector('.tabs').children.length;i++){
     
         document.querySelector('.tabs').children[i].classList.remove('tab_active')
       }
        e.currentTarget.classList.add('tab_active')
        this.setState({tabindex: e.currentTarget.getAttribute('attr-select-tabinfo')})
        
       
       }
  render() {
    return (
      <div> 
          <div className="tabs">
              <div className="tab tab_active" attr-select-tabinfo='1' onClick={this.handleClick1}>
                  <span>Карта проезда</span>

                  </div>
              <div className="tab" attr-select-tabinfo='2' onClick={this.handleClick1}>
                  <span>Отзывы</span>

                  </div>
              <div className="tab" attr-select-tabinfo='3' onClick={this.handleClick1}>
                  <span>Написать отзыв</span>

                  </div>
          </div>
          <div className='tabs_info'>
              <SelectTab  tabindex ={this.state.tabindex}/>
          </div>
     </div>
    );
  }
}
