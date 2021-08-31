import React from 'react';
import Card from './Card';
import './Blouses.css';


function Blouses() {

    const [items, setItems] = React.useState([]);

    
    React.useEffect(() => {
        fetch('https://61253db83c91fb0017e72a04.mockapi.io/items') 
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            setItems(json);
        });
    }, []);

    const onAddToCart = (obj) => {
        setCartItems([ ... cartItems, obj]);
    };
    

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