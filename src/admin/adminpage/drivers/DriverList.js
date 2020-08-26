import React, { Component } from 'react'
import DriverJson from './DriverJson'
export default class DriverList extends Component {

    render() {
        return (
            <div className="wrap_admin_box">
                <div className="bread">
                    <a href="/admin"> Главная страница Админ панели</a>
                    <span>Анкеты водителей</span>
                </div>
                <div className="wrap_admin_box__inner driverlist">
                    <h1>Анкеты водителей</h1>
                    <table border="0">
                        <tbody>
                        <tr className="driver_table__title">
                            <td>ФИО</td>
                            <td>Дата рождения</td>
                            <td>Телефон</td>
                            <td>Email</td>
                        </tr>
                        <DriverJson />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
