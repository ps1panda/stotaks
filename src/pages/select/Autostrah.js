import React, { Component } from 'react'
import { YMaps, Map } from 'react-yandex-maps';
import Filters from './Filters.js'
import Json from './Json/Json.js';
import SearchByName from './SearchByName.jsx';

export default class Autostrah extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kindfilter: 'autostrah',
            kind:'9'
        };
       
    };
    render() {
        return (
            <div className="Autostrah_page select_page">
                <div className="wrap">
                   

                    <h1 className='zag'>Услуги автострахования</h1>
                    
                    <div className="Autostrah_wrap select_wrap">
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
                        
                    </div>
                </div>
            </div>
        )
    }
}
