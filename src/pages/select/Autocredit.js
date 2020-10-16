import React, { Component } from 'react'
import { YMaps, Map } from 'react-yandex-maps';
import Filters from './Filters.js'
import Json from './Json/Json.js';
import SearchByName from './SearchByName.jsx';
import Selectview from './views/selectview.jsx';

export default class Autocredit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kindfilter: 'autocredit',
            kind:'8'
        };
       
    };
    render() {
        return (
            <div className="Autocredit_page select_page">
                <div className="wrap">
                  

                    <h1 className='zag'>Автокредитование и автолизинг</h1>
                    
                    <div className="Autocredit_wrap select_wrap">
                        <div className='filter'>
                         <SearchByName />
                            <form action="" className="filters">
                            <h3>Поиск по фильтрам</h3>
                            <Filters kindfilter={this.state.kindfilter}/>
                            </form>
                        </div>
                        <Selectview />
                        <div className='select_list'>

                        < Json kind={this.state.kind} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
