import React from 'react';
import Card from './Card';
import './Blouses.css';


function Blouses( {items, onAddToCart} ) {

    return (

        <div className="dflex_card">
            {items.map((item) => (
                <Card
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onPlus={(obj) => onAddToCart(obj)}
                />
            ))}
        </div>

    );
}


export default Blouses;