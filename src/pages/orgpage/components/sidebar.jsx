import React, { Component } from 'react'
import img1 from '../../../images/Logo_taxi.png'
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
         
        };
      }
      componentDidMount() {
        fetch("http://46.17.43.203:10101/api/form/"+this.props.orgkind +'/'+this.props.idlink)
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
          
          console.log(items.contactDetails)
          return (
            <div className='sideber'>
            <div className='logotip'>
                <img src={img1} alt=""/>
            </div>
            <div className='sidebar_phone'>
                <p>Телефон</p>
                <div className='phone_list'>
                    {items.contactDetails.additionalPhones}
                </div>
            </div>
            <div className='sidebar_site'>
                <p>Сайт</p>
                <div className='site'>
                    <a href="#">site.ru</a>
                </div>
            </div>
            <div className="sidebar_adress">
                <div className="adress"></div>
                <div className="subway"></div>
            </div>
        </div>
     
          );
       
       
        }

    }
}
