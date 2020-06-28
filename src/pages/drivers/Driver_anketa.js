import React, { Component } from 'react'
import './drivers.css';

export default class Driver_anketa extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           page_title : 'Анкета водителей',
           page_name : 'driver_anketa_page',

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
                      <h1 className='zag'>{this.state.page_title}</h1>
                      <div className="driver_anketa_info">
                      Заполните анкету Водителя - предоставление максимально полных и достоверных сведений ускорит Ваше трудоустройство у партнеров Столичного таксомоторного сообщества
                      </div>
           
                      <form action="" className="driver_anketa_form" method="post">

                          <div className="general_anketa">
                              <div className="general_anketa_title zag_another">
                                Общие сведения
                              </div>
                              <div className="general_wrap">
                                  <fieldset>
                                    <legend>legend 1</legend>
                                    <input type="radio" name="fieldset1" id="fieldset11" checked/>
                                    <label htmlFor="fieldset11">fieldset11</label>
                                    <input type="radio" name="fieldset1" id="fieldset12"/>
                                    <label htmlFor="fieldset12">fieldset12</label>
                                    <input type="radio" name="fieldset1" id="fieldset13"/>
                                    <label htmlFor="fieldset13">fieldset13</label>
                                    <input type="radio" name="fieldset1" id="fieldset14"/>
                                    <label htmlFor="fieldset14">fieldset14</label>
                                    <input type="radio" name="fieldset1" id="fieldset15"/>
                                    <label htmlFor="fieldset15">fieldset15</label>
                                  </fieldset>
                                  <fieldset>
                                      <legend>Водительское удостоверение</legend>
                                    <input type="radio" name="fieldset2" id="fieldset21" checked/>
                                    <label htmlFor="fieldset21">fieldset21</label>
                                    <input type="radio" name="fieldset2" id="fieldset22"/>
                                    <label htmlFor="fieldset22">fieldset22</label>
                                    <input type="radio" name="fieldset2" id="fieldset23"/>
                                    <label htmlFor="fieldset23">fieldset23</label>
                                    <input type="radio" name="fieldset2" id="fieldset24"/>
                                    <label htmlFor="fieldset24">fieldset24</label>
                                    <input type="radio" name="fieldset2" id="fieldset25"/>
                                    <label htmlFor="fieldset25">fieldset25</label>
                                  </fieldset>
                                  <fieldset>
                                      <legend>legend 3</legend>
                                    <input type="radio" name="fieldset3" id="fieldset31" checked/>
                                    <label htmlFor="fieldset31">fieldset31</label>
                                    <input type="radio" name="fieldset3" id="fieldset32"/>
                                    <label htmlFor="fieldset32">fieldset32</label>
                                    <input type="radio" name="fieldset3" id="fieldset33"/>
                                    <label htmlFor="fieldset33">fieldset33</label>
                                    <input type="radio" name="fieldset3" id="fieldset34"/>
                                    <label htmlFor="fieldset34">fieldset34</label>
                                    <input type="radio" name="fieldset3" id="fieldset35"/>
                                    <label htmlFor="fieldset35">fieldset35</label>
                                  </fieldset>
                                  <fieldset>
                                   <legend>legend 4</legend>
                                    <input type="radio" name="fieldset4" id="fieldset41" checked/>
                                    <label htmlFor="fieldset41">fieldset41</label>
                                    <input type="radio" name="fieldset4" id="fieldset42"/>
                                    <label htmlFor="fieldset42">fieldset42</label>
                                    <input type="radio" name="fieldset4" id="fieldset43"/>
                                    <label htmlFor="fieldset43">fieldset43</label>
                                    <input type="radio" name="fieldset4" id="fieldset44"/>
                                    <label htmlFor="fieldset44">fieldset44</label>
                                    <input type="radio" name="fieldset4" id="fieldset45"/>
                                    <label htmlFor="fieldset45">fieldset45</label>   
                                  </fieldset>
                                  <fieldset>
                                      <legend>legend 5</legend>
                                    <input type="radio" name="fieldset5" id="fieldset51" checked/>
                                    <label htmlFor="fieldset51">fieldset51</label>
                                    <input type="radio" name="fieldset5" id="fieldset52"/>
                                    <label htmlFor="fieldset52">fieldset52</label>
                                    <input type="radio" name="fieldset5" id="fieldset53"/>
                                    <label htmlFor="fieldset53">fieldset53</label>
                                    <input type="radio" name="fieldset5" id="fieldset54"/>
                                    <label htmlFor="fieldset54">fieldset54</label>
                                    <input type="radio" name="fieldset5" id="fieldset55"/>
                                    <label htmlFor="fieldset55">fieldset55</label>
                                  </fieldset>
                              </div>
                          </div>
                      </form>
                    </div>     
            </div>
        )
    }
}
