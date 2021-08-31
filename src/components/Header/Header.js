import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdPhoneIphone } from 'react-icons/md';


function Header(props) {


  return (
    <>
      <div className="logo">
        <div className="logo_left">
          <img className="logo_veshalka" src="/img/veshalka.png" alt=''></img>
          <div className="logo_text">
            <a href="/Main">Главная</a>
            <h1>BI.RU</h1>
            <h4 className="mini_text">Магазин одежды</h4>
          </div>
        </div>
        <div className="logo_middle">
          <h2>Оптовые поставки женской, мужской, детской одежды и аксессуаров <br></br> для продажи на маркетплейсах <br></br> России, Казахстана,
            выкуп и отправка.</h2>
        </div>
        <div className="logo_right">
          <div className="phone_icon"><MdPhoneIphone /> | +996 (772) 200 021</div>
          <li onClick={props.onClickCart} className="icon_card">
            <div><AiOutlineShoppingCart /> | в корзине:</div>
          </li>
        </div>
      </div>
    </>
  );
}

export default Header;