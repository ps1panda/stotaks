import React, { Component } from 'react'
import { YMaps, Map } from 'react-yandex-maps';
import Filters from './Filters.js'

export default class Autosalon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kindfilter: 'autosalon'
        };
       
    };
    render() {
        return (
            <div className="Autosalon_page select_page">
                <div className="wrap">
                    <div className="bread">
                        <a href="/"> Главная</a>
                        <span>Автосалоны Москвы</span>
                    </div>

                    <h1 className='zag'>Автосалоны Москвы</h1>
                    
                    <div className="Autosalon_wrap select_wrap">
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

                        <table border="0" className='part_table'>
                            <tr>                            
                                    <td>
                                        
                                        ТАКСИ НОЧЬ ДЕНЬ
                                        
                                    </td>
                                    
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-night.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        ТАКСИ РИТМ
                                    </td>
                                 
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-ritm.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        
                                        ТАКСИ НОЧЬ ДЕНЬ
                                        
                                    </td>
                                    
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-night.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        ТАКСИ РИТМ
                                    </td>
                                 
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-ritm.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        
                                        ТАКСИ НОЧЬ ДЕНЬ
                                        
                                    </td>
                                    
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-night.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        ТАКСИ РИТМ
                                    </td>
                                 
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-ritm.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        
                                        ТАКСИ НОЧЬ ДЕНЬ
                                        
                                    </td>
                                    
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-night.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        ТАКСИ РИТМ
                                    </td>
                                 
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-ritm.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        
                                        ТАКСИ НОЧЬ ДЕНЬ
                                        
                                    </td>
                                    
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-night.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        ТАКСИ РИТМ
                                    </td>
                                 
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-ritm.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        
                                        ТАКСИ НОЧЬ ДЕНЬ
                                        
                                    </td>
                                    
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-night.ru</td>
                                
                            </tr>
                            <tr>                            
                                    <td>
                                        ТАКСИ РИТМ
                                    </td>
                                 
                                    <td>+7 (926) 348 48 52</td>
                                    <td>taxi-ritm.ru</td>
                                
                            </tr>
                        </table>
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
