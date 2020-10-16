import React, { Component } from 'react';
import Icon1 from '../../../images/Icon1.svg'
import Icon2 from '../../../images/Icon2.svg'
import Icon3 from '../../../images/Icon3.svg'
import Icon4 from '../../../images/Icon4.svg'
import Icon5 from '../../../images/Icon5.svg'
import Icon6 from '../../../images/Icon6.svg'
import Icon7 from '../../../images/Icon7.svg'
import Icon8 from '../../../images/Icon8.svg'
import Icon9 from '../../../images/Icon9.svg'
import Icon10 from '../../../images/Icon10.svg'
export default class SelectOrg extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          page_title: 'Анкета Партнера',
          page_name: 'partner_anketa_page',
          kind:''
    
        };
        this.handleClick1 = this.handleClick1.bind(this)
    
      };
      handleClick1(e){
        document.querySelector('.next_page').classList.add('act')
        for(let i = 0;i<document.querySelector('.boxes_wrap').children.length;i++){
     
         document.querySelector('.boxes_wrap').children[i].classList.remove('box_active')
       }
        e.currentTarget.classList.add('box_active')
        this.setState({kind: e.currentTarget.getAttribute('attr-select-org')})
        
        document.querySelector('.next_page').classList.add('act')
       }
  render() {
    return (
      <div> 
          <div className="wrap">
         
                  <div className="partner_anketa_info">
            Выберите интересующий Вас блок и заполните анкету Партнера
                          </div>

          <div className="boxes">
            <div className="boxes_wrap">
              <div className="box" attr-select-org='taxipool' onClick={this.handleClick1}>

                <div className="box_pic">
                  <img src={Icon1} alt="" />
                </div>
                <div className="box_text">Выбор таксопарка </div>

              </div>
              <div className="box" attr-select-org='equipment' onClick={this.handleClick1}>

                <div className="box_pic">
                  <img src={Icon2} alt="" />
                </div>
                <div className="box_text">Оборудование автомобилей такси </div>

              </div>
              <div className="box" attr-select-org='maintenance' onClick={this.handleClick1}>

                <div className="box_pic">
                  <img src={Icon3} alt="" />
                </div>
                <div className="box_text">Обслуживание автомобилей такси</div>

              </div>
              <div className="box" attr-select-org='carwash' onClick={this.handleClick1}>

                <div className="box_pic">
                  <img src={Icon4} alt="" />
                </div>
                <div className="box_text">Мойка автомобилей такси</div>

              </div>
              <div className="box" attr-select-org='pretrip' onClick={this.handleClick1}>

                <div className="box_pic">
                  <img src={Icon5} alt="" />
                </div>
                <div className="box_text">Предрейсовые осмотры </div>

              </div>
              <div className="box" attr-select-org='motorshow' onClick={this.handleClick1}>

                <div className="box_pic">
                  <img src={Icon6} alt="" />
                </div>
                <div className="box_text">Выбор автосалона</div>

              </div>
              <div className="box" attr-select-org='loans' onClick={this.handleClick1}>

                <div className="box_pic">
                  <img src={Icon7} alt="" />
                </div>
                <div className="box_text">Автокредитование и автолизинг</div>

              </div>
              <div className="box" attr-select-org='insurance' onClick={this.handleClick1}>

                <div className="box_pic">
                  <img src={Icon8} alt="" />
                </div>
                <div className="box_text">Услуги автострахования </div>

              </div>
              <div className="box" attr-select-org='preparation' onClick={this.handleClick1}>

                <div className="box_pic">
                  <img src={Icon9} alt="" />
                </div>
                <div className="box_text">Оформление документов </div>

              </div>
              <div className="box" attr-select-org='hotel' onClick={this.handleClick1}>

                <div className="box_pic">
                  <img src={Icon10} alt="" />
                </div>
                <div className="box_text">Общежития и хостелы </div>

              </div>
            </div>
            <a href={'ankets/'+this.state.kind} className="next_page">Продолжить</a>
          </div>
              </div>
     </div>
    );
  }
}
