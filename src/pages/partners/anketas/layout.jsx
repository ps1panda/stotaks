import React, { Component } from 'react';
import District from '../../../fieldsets/district';
import Metro from '../../../fieldsets/metro';
import Work from '../../../fieldsets/work';
import '../partners.css'
import OrgType from './orgType';

export default class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
          title:'',
          description:'',
          kind:'1'
    };

};
  render() {
    return (
      <div className='ankets_page'> 
          <h1 className='zag'>Анкета партнера</h1>
          <div className="description">
          Заполните анкету Партнера - предоставление максимально полных и достоверных сведений повышает вероятность выбора именно Вашей компании!
            </div>  
            <OrgType />
      </div>
    );
  }
}
