import React, { Component } from 'react'

export default class AboutList extends Component {
    render() {
        return (
            <div className="wrap_admin_box">
                <div className="bread">
                    <a href="/admin"> Главная страница Админ панели</a>
                    <span>О сообществе</span>
                </div>
                <div className="wrap_admin_box__inner">
                    <h1>О сообществе</h1>
                    <div className="section">
                        <h2>Видео</h2>
                       <div className="section">
                           <form action="" method="post">
                           <span>Ссылка на видео   </span>
                           <input type="text" readonly='true' value='https://www.youtube.com/watch?v=R-JasvC2OP8'/>
                               <div className="about_video_controls">
                                   <button className='blue_btn'>Редактировать </button>
                                   <button className='an_btn'>Удалить</button>
                               </div>
                           </form>
                       </div>
                    </div>
                    <div className="section">
                        <div className="about_controls">
                            <h1>Статьи</h1>
                            <a href="#" className='blue_btn'>Добавить cтатьи</a>
                        </div>
                        <table border="0">
                            <tr className="news_table__title">
                                <td>Название статьи</td>
                                <td>Дата создания/редактирования</td>
                            </tr>
                            <tr className="">
                                <td><a href="#">Сервис аренды такси YouDrive Business запустил в Москве автоматизированную выдачу машин</a></td>
                                <td>02.03.2020</td>
                            </tr>
                            <tr className="">
                                <td><a href="#">Сервис аренды такси YouDrive Business запустил в Москве автоматизированную выдачу машин</a></td>
                                <td>02.03.2020</td>
                            </tr>
                            <tr className="">
                                <td><a href="#">Сервис аренды такси YouDrive Business запустил в Москве автоматизированную выдачу машин</a></td>
                                <td>02.03.2020</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
