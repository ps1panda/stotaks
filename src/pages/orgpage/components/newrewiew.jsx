import React, { Component } from 'react'

export default class NewRewiew extends Component {
    render() {
        return (
            <div className='newrewiew'>
                <p>Пожалуйста, опишите свой личный опыт - Ваш отзыв поможет другим пользователям сделать правильный выбор</p>
                <form action="" method="post">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Введите текст'></textarea>
                    <input type="submit" value="Отправить отзыв"/>
                </form>
            </div>
        )
    }
}
