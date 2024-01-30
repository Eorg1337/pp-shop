import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';

const App = () => {
  const [items, setItems] = useState();
  const [orders, setOrders] = useState([]);
  const [curItems, setCurItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    const initialItems = [
      {
        id: 1,
        title: 'Стул',
        price: '49.99',
        img: 'stul.jpg',
        category: 'chairs',
      },
      {
        id: 2,
        title: 'Диван',
        price: '149.99',
        img: 'divan.jpg',
        category: 'sofa',
      },
      {
        id: 7,
        title: 'Массажное кресло',
        price: '199.99',
        img: 'massage_kreslo.jpg',
        category: 'chairs',
      },
      {
        id: 8,
        title: 'Кровать',
        price: '109.99',
        img: 'krovat.jpg',
        category: 'sofa',
      },
    ];
    setItems(initialItems);
    setCurItems(initialItems);
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

  const chooseCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setCurItems(items);
      return;
    }
    setCurItems(items.filter((el) => el.category === category));
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories
        chooseCategory={chooseCategory}
        selectedCategory={selectedCategory}
      />
      <Items items={curItems} onAdd={addToOrder} />
      <Footer />
    </div>
  );
};

export default App;
