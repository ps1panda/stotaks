import React from 'react';
import './footer.css';
import logo from '../images/logo.svg'
function Footer() {
    return (
      <footer>
        <div className="wrap">
          <div className='top'>
            <nav>
              <a href="">Главная</a>
              <a href="">О сообществе</a>
              <a href="">Водителям</a>
              <a href="">Партнерам</a>
              <a href="">Энциклопедия такси</a>
              <a href="">Новости такси</a>
              <a href="">ЦОДД</a>
              <a href="">Форум</a>
            </nav>
          </div>
          <div className='middle'>
            <div>
              <div className="logo_footer">
                <a href="/">
                  <img src={logo} alt=""/>
                </a>
              </div>
              <div className="social_btn">

              </div>
            </div>
            <div>
              <div className="geo_footer">
              115409, г.Москва <br />Каширское шоссе, 66, к.2
              </div>
            </div>
            <div>
              <div className="phone_footer">
                  <a href="tel:+74954101266">+7 (495) 410-12-66</a><br />
                  <a href="tel:+79854101266">+7 (985) 410-12-66</a>
              </div>
            </div>
            <div>
              <div className="email_footer">
                <a href="mailto:info@stotax.ru">info@stotax.ru</a>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <div>© Столичное таксомоторное сообщество ООО «СТОТАКС». Все права защищен</div>
            <div>
              <a href="">Политика конфиденциальности</a>
            </div>
            <div>
                <a href="">Договор оферты</a>
            </div>
            <div>
              <a href="">Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;