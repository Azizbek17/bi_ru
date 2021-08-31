import React from 'react';
import './Card.css'


function Card({ title, imageUrl, price, onPlus }) {

    const [isAdded, setIsAdded] = React.useState(false);
    
    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    };

    return (

        <div className="card">
            <img src={imageUrl} width='250'></img>
            <div className="card-container">
                <p>{title}</p>
                <div className="card-info">
                    <div className="money"><span>Цена:</span>
                        <b>{price}</b></div>
                    <div className="info">
                        <span><i class="fas fa-address-card"></i>2BA</span>
                    </div>
                    <img className="button_plus" onClick={onClickPlus} src={isAdded ? "/img/cheked.svg" : "/img/vector-plus.svg"} alt="Plus"></img>
                </div>
            </div>
        </div>

    );
}


export default Card;