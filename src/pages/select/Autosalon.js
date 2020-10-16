import React, { Component } from 'react'
import { YMaps, Map } from 'react-yandex-maps';
import Filters from './Filters.js'
import Json from './Json/Json.js';
import SearchByName from './SearchByName.jsx';

export default class Autosalon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kindfilter: 'autosalon',
            kind:'2'
        };
       
    };
    render() {
        return (
            <div className="Autosalon_page select_page">
                <div className="wrap">
                    

                    <h1 className='zag'>Автосалоны Москвы</h1>
                    
                    <div className="Autosalon_wrap select_wrap">
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
