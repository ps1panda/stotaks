import React, { Component } from 'react'
import { YMaps, Map } from 'react-yandex-maps';
import Filters from './Filters.js'
import Json from './Json/Json.js';
import SearchByName from './SearchByName.jsx';

export default class Documents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kindfilter: 'documents',
            kind:'10'
        };
       
    };
    render() {
        return (
            <div className="documents_page select_page">
                <div className="wrap">
                   

                    <h1 className='zag'>Оформление документов</h1>
                    
                    <div className="documents_wrap select_wrap">
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
