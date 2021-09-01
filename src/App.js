import React from 'react';
import './App.css';
import './components/Header/Header.css';
import './components/Nav/Nav.css';
import './components/Main/Main.css';
import './components/Footer/Footer.css';
import Dresses from './components/Women/Dresses';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Drawer from './components/Drawer/Drawer';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Blouses from './components/Women/Blouses';
import axios from 'axios';

function App() {

  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://61253db83c91fb0017e72a04.mockapi.io/items').then((res) => {
      setItems(res.data)
    });
    axios.get('https://61253db83c91fb0017e72a04.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    }); 
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://61253db83c91fb0017e72a04.mockapi.io/cart', obj);
    setCartItems((prev) => [ ... prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61253db83c91fb0017e72a04.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (

    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Nav />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/main" component={Main} />
          <Route path="/blouses" render={(props) => <Blouses {...props} items={items} onAddToCart={onAddToCart} />} />
          <Route path="/dresses" component={Dresses} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>

  );
}

export default App;
