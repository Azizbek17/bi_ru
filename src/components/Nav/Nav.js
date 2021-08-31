import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';


function Nav() {
  return (

    <HashRouter>
      <div className="nav">
        <div className='nav_container'>
          <div className="dropdown">
            <button className="dropbtn">ЖЕНСКАЯ ОДЕЖДА</button>
            <div className="dropdown-content">
              <li><NavLink to="/blouses" className='nav_link'>Блузки</NavLink></li>
              <li><NavLink to="/dresses" className='nav_link'>Платья</NavLink></li>
              <li><NavLink to="/dresses" className='nav_link'>Брюки и джинсы</NavLink></li>
              <li><NavLink to="/dresses" className='nav_link'>Костюмы</NavLink></li>
              <li><NavLink to="/dresses" className='nav_link'>Спортивные костюмы</NavLink></li>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">МУЖСКАЯ ОДЕЖДА</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">ДЕТСКАЯ ОДЕЖДА</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">МУСУЛЬМАНСКАЯ ОДЕЖДА</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">ОБУВЬ</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>

  );
}

export default Nav;