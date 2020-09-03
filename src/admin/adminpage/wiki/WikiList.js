import React, { Component } from 'react';

export default class WikiList extends Component {
  render() {
    return (
        <div className="wrap_admin_box wikilist">
            <div className="bread">
                <a href="/admin"> Главная страница Админ панели</a>
                <span>Энциклопедия такси</span>
            </div>
            <div className="wrap_admin_box__inner">
                <div className="top_info">
                <h1>Энциклопедия такси</h1>
                <a href="#" className='blue_btn'>Добавить определение</a>
                </div>
                


                <div className="section opred">
                    
                    <form action="">
                        <div>
                        <input type="text" value='Определение' readonly='true'/>
                        <textarea name="" id="" readonly='true'>
                        Для современного мира понимание сути ресурсосберегающих технологий способствует повышению качества анализа существующих паттернов поведения!
                        </textarea>
                        </div>
                        <div className="opred_controls">
                                <button className='blue_btn'>Редактировать </button>
                                <button className='an_btn'>Удалить</button>
                        </div>
                    </form>
                </div>
                <div className="section opred">
                    
                    <form action="">
                        <div>
                        <input type="text" value='Определение' readonly='true'/>
                        <textarea name="" id="" readonly='true'>
                        Для современного мира понимание сути ресурсосберегающих технологий способствует повышению качества анализа существующих паттернов поведения!
                        </textarea>
                        </div>
                        <div className="opred_controls">
                                <button className='blue_btn'>Редактировать </button>
                                <button className='an_btn'>Удалить</button>
                        </div>
                    </form>
                </div>
                <div className="section opred">
                    
                    <form action="">
                        <div>
                        <input type="text" value='Определение' readonly='true'/>
                        <textarea name="" id="" readonly='true'>
                        Для современного мира понимание сути ресурсосберегающих технологий способствует повышению качества анализа существующих паттернов поведения!
                        </textarea>
                        </div>
                        <div className="opred_controls">
                                <button className='blue_btn'>Редактировать </button>
                                <button className='an_btn'>Удалить</button>
                        </div>
                    </form>
                </div>
                <div className="section opred">
                    
                    <form action="">
                        <div>
                        <input type="text" value='Определение' readonly='true'/>
                        <textarea name="" id="" readonly='true'>
                        Для современного мира понимание сути ресурсосберегающих технологий способствует повышению качества анализа существующих паттернов поведения!
                        </textarea>
                        </div>
                        <div className="opred_controls">
                                <button className='blue_btn'>Редактировать </button>
                                <button className='an_btn'>Удалить</button>
                        </div>
                    </form>
                </div>
                <div className="section opred">
                    
                    <form action="">
                        <div>
                        <input type="text" value='Определение' readonly='true'/>
                        <textarea name="" id="" readonly='true'>
                        Для современного мира понимание сути ресурсосберегающих технологий способствует повышению качества анализа существующих паттернов поведения!
                        </textarea>
                        </div>
                        <div className="opred_controls">
                                <button className='blue_btn'>Редактировать </button>
                                <button className='an_btn'>Удалить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}
