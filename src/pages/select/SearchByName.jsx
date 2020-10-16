import React, { Component } from 'react'
import search from '../../images/lupa.png'

export default class SearchByName extends Component {
    render() {
        return (
            <form action="" className="searchform">
            <h3>Поиск по названию</h3>
                <img src={search} alt=""/>
                <input id='searchinput' type="text" placeholder='Введите название таксопарка'/>
            </form>
        )
    }
}
