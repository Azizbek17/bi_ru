import React from 'react';
import './Card.css'

function Card() {
    return (
        <div className='container'>
            <section className="clothes">
                <div className="wrapper apart">
                    <div className="cards">

                        <div className="card">
                            <img src='./img/women/blouses/2.jpg' width='250'></img>
                            <div className="card-container">
                                <p>DAFSDF</p>
                                <div className="card-info">
                                    <div className="money"><span>Цена:</span>
                                        <b>2986875</b></div>
                                    <div className="info">
                                        <span><i class="fas fa-address-card"></i>2BA</span>
                                    </div>
                                    <button className="button">
                                        <img width={11} height={11} src="/img/vector-plus.svg" alt="Plus"></img>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}


export default Card;