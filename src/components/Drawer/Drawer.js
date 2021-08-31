import React from 'react';
import './Drawer.css';



function Drawer({ onClose, items = [] }) {

  return (
    <>

      <div className="overlay">
        <div className="drawer">
          <h3 className="basket">Корзина<img onClick={onClose} className="removeBtn" src="/img/x-vector.svg" alt="close"></img></h3>

          <div className="items">
            {items.map((obj) => (
              <div className="cartItem d-flex">
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="cartItemImg">
                </div>
                <div className="cartItemInfo">
                  <p>{obj.title}</p>
                  <b>{obj.price}сом</b>
                </div>
                <img className="removeBtn" src="/img/x-vector.svg"></img>
              </div>
            ))}
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