import React, { Component } from 'react';
import Uploadimg from './functions/uploadimg'
import Videoedit from './functions/Videoedit.js'

export default class Adminhome extends Component {
  constructor(props) {
    super(props)

    this.state = {
        editable: null
    };
   
};
updateData = (value) => {
  this.setState({ editable: value })
 
}
  render() {
    return (
      <div className="wrap_admin_box">
        <div className="bread">
            <a href="/admin"> Главная страница Админ панели</a>
            <span>{this.props.title}</span>
        </div>
        <div className="wrap_admin_box__inner">
          <h1>Главная страница</h1>
          <div className="section">
            <h2>Баннер на главной странице</h2>
            <form action="" method="post">
                <Uploadimg />
            </form>
          </div>
          <div className="section">
            <h2>Видео на главной странице</h2>
            <div className="video_info_main video_box">
              <form action="" method="post">
                <div>
                  <div>
                    <p>Тип видео</p>
                    <p>Название видео</p>
                    <p>Название канала</p>
                    <p>Ссылка на видео</p>
                  </div>
                  <div>
                    <p>Видео дня</p>
                    <p>
                      <input name='video_name' type="text" value='Заказали себе майбах. Новые солярисы и октавии. Бизнес вип такси' readonly = 'true'/>
                    </p>
                    <p>
                      <input name='chanel_name' type="text" value='Байки такси Москвы и не только' readonly = 'true'/>
                    </p>
                    <p>
                      <input name='video_link' type="text" value='https://www.youtube.com/watch?v=R-JasvC2OP8' readonly = 'true'/>
                    </p>
                    
                  </div>
                </div>

                <Videoedit updateData={this.updateData} />
              </form>
            </div>
            <div className="video_info_week video_box">
              <form action="" method="post">
                <div>
                  <div>
                    <p>Тип видео</p>
                    <p>Название видео</p>
                    <p>Название канала</p>
                    <p>Ссылка на видео</p>
                  </div>
                  <div>
                    <p>Видео дня</p>
                    <p>
                      <input name='video_name' type="text" value='Заказали себе майбах. Новые солярисы и октавии. Бизнес вип такси' readonly = 'true'/>
                    </p>
                    <p>
                      <input name='chanel_name' type="text" value='Байки такси Москвы и не только' readonly = 'true'/>
                    </p>
                    <p>
                      <input name='video_link' type="text" value='https://www.youtube.com/watch?v=R-JasvC2OP8' readonly = 'true'/>
                    </p>
                    
                  </div>
                </div>

                <Videoedit updateData={this.updateData} />
              </form>
            </div>
            <div className="video_info_stotaks video_box">
              <form action="" method="post">
                <div>
                  <div>
                    <p>Тип видео</p>
                    <p>Название видео</p>
                    <p>Название канала</p>
                    <p>Ссылка на видео</p>
                  </div>
                  <div>
                    <p>Видео дня</p>
                    <p>
                      <input name='video_name' type="text" value='Заказали себе майбах. Новые солярисы и октавии. Бизнес вип такси' readonly = 'true'/>
                    </p>
                    <p>
                      <input name='chanel_name' type="text" value='Байки такси Москвы и не только' readonly = 'true'/>
                    </p>
                    <p>
                      <input name='video_link' type="text" value='https://www.youtube.com/watch?v=R-JasvC2OP8' readonly = 'true'/>
                    </p>
                    
                  </div>
                </div>

                <Videoedit updateData={this.updateData} />
              </form>
            </div>
          </div>
        </div>
    </div> 
    );
  }
}
