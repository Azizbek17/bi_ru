import React from 'react';
import './Drawer.css';



function Drawer() {

    return (
        <>
        
        <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
          <h3 className="basket">Корзина<img className="removeBtn" src="/img/x-vector.svg"></img></h3>

          <div className="items">
            <div className="cartItem d-flex">
              <div
                style={{ backgroundImage: 'url(/img/women/trousers/example.jpg)' }}
                className="cartItemImg">
              </div>
              <div className="cartItemInfo">
                <p>DAFSDFdsdad</p>
                <b>5000 сом</b>
              </div>
              <img className="removeBtn" src="/img/x-vector.svg"></img>
            </div>

            <div className="cartItem d-flex">
              <div
                style={{ backgroundImage: 'url(/img/women/trousers/example.jpg)' }}
                className="cartItemImg">
              </div>
              <div className="cartItemInfo">
                <p>DAFSDFdsdad</p>
                <b>5000 сом</b>
              </div>
              <img className="removeBtn" src="/img/x-vector.svg"></img>
            </div>

          </div>

          <div className="cartTotalBlock">
            <ul>
              <li className="line_info">
                <span>Итого:</span>
                <div className="cartLine"></div>
                <b>21 000 сом</b>
              </li>
            </ul>

            <button className="green_button">Офорить заказ</button>
          </div>

        </div>
      </div>

        </>
    );
}

export default Drawer;