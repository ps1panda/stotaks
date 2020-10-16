import React, { Component } from 'react'
import { YMaps, Map } from 'react-yandex-maps';
import Filters from './Filters.js'
import Json from './Json/Json.js';
import SearchByName from './SearchByName.jsx';

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
                   

                    <h1 className='zag'>Обслуживание автомобилей такси</h1>
                    
                    <div className="service_wrap select_wrap">
                        <div className='filter'>
                            <SearchByName />
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
