import React, { Component } from 'react';

export default class DriverEdit extends Component {
  render() {
    return (
        <div className="wrap_admin_box">
        
            <div className="wrap_admin_box__inner driveredit">
                <h1>Редактирование анкеты водителя</h1>

                <div className="top_info">
                    <form action="">
                        <div>
                            <div>
                                <input type="text" id='top_info__name' readonly='true' value='Рассул Баликмакбетович Сафутдинов'/><br />
                                <label htmlFor="top_info__name">дата регистрации: 22.03.2020</label>
                            </div>
                            <div>
                                <span>                             
                                    <label htmlFor="driver_name">Дата рождения:</label>
                                    <input type="text"readonly='true' id='driver_name' value='02.01.1987'/>
                                </span>
                                <span>                             
                                
                                    <label htmlFor="driver_phone">Телефон:</label>
                                    <input type="text"readonly='true' id='driver_phone' value='+7 (926) 348 48 52'/>
                                </span>
                                <span>                             
                                
                                    <label htmlFor="driver_email">Email: </label>
                                    <input type="text"readonly='true' id='driver_email' value='alberto.ward@example.com'/>
                                </span>
                            </div>
                        </div>
                        <div>
                            <button className='white_btn'>Редактировать</button>
                            <button className='an_btn'>Удалить пользователя</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
  }
}
