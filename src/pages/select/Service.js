import React, { Component } from 'react'
import { YMaps, Map } from 'react-yandex-maps';
import Filters from './Filters.js'
import Json from './Json/Json.js';

export default class Service extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kindfilter: 'service',
            kind:'6'
            
        };
       
    };
    render() {
        return (
            <div className="service_page select_page">
                <div className="wrap">
                    <div className="bread">
                        <a href="/"> Главная</a>
                        <span>Обслуживание автомобилей такси</span>
                    </div>

                    <h1 className='zag'>Обслуживание автомобилей такси</h1>
                    
                    <div className="service_wrap select_wrap">
                        <div className='filter'>
                            <form action="" className="searchform">
                                <h3>Поиск по названию</h3>
                                <input id='searchinput' type="text" placeholder='Введите название таксопарка'/>
                            </form>
                            <form action="" className="filters">
                            <h3>Поиск по фильтрам</h3>
                            <Filters kindfilter={this.state.kindfilter}/>
                            </form>
                        </div>
                        <div className='select_list'>

                        < Json kind={this.state.kind} />
                        </div>
                        <div className='maps'>
                        <YMaps>
                            <div>
                            <p>Выберите ближайший к Вам</p>
                            <Map width='100%' height='400px' defaultState={{ center: [55.75, 37.57], zoom: 11 }} />
                            </div>
                        </YMaps>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
