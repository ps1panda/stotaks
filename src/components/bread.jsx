import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Bread extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="bread">
                <a href="/"> Главная</a>
                <span>Таксопарки Москвы</span>
            </div>
        )
    }
}
