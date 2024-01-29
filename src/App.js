import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

const App = () => {
  const [items, setItems] = useState();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setItems([
      { id: 1, title: 'Стул ', price: '49.99', img: 'stul.jpg' },
      { id: 2, title: 'Диван', price: '149.99', img: 'divan.jpg' },
      {
        id: 7,
        title: 'Массажное кресло',
        price: '199.99',
        img: 'massage_kreslo.jpg',
      },
      { id: 8, title: 'Кровать', price: '109.99', img: 'krovat.jpg' },
    ]);
  }, []);

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Items items={items} onAdd={addToOrder} />
      <Footer />
    </div>
  );
};

export default App;
