import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../../../images/Taksi_Den_i_Noch_1x 1.png'

export default class Json extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      kind: '',
      kinds:['taxopark','austosalon','wash','documents','Equipment','service','hostels','autocredit','autostrah','views']
    };
  }
  componentDidMount() {
    fetch("http://46.17.43.203:10101/api/organizations")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });

        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      const pp = items.filter(item => this.props.kind == item.kind)
      console.log()
      return (
        <table>
          <tbody>
            {pp.map((item, key) => (
              
              <tr key={key}>
                
                <td className='td_title'>
                
                
           
                <a href={'../organizations/'+item.kind+'/'+ item.id}>
                <img src={logo} className='td_title__logo' alt=""/>
                  {item.title}
                  </a>
                
                  
                </td>
                <td  className='td_email'> {item.email}</td>
                <td className='td_phone'> {item.phone}</td>
                <td className='td_website'> {item.website}</td>
                <td className='td_groupNumber'> {item.groupNumber}</td>
                <td className='td_rating'> {item.rating}</td>


              </tr>
            ))}
          </tbody>
        </table>
      );
   
   
    }
  }
}
