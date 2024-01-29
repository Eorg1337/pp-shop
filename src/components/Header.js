import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';
export default function Header({ orders, onDelete }) {
  let [cartOpen, setCartOpen] = React.useState(false);
  const showOrders = (orders) => {
    let orderSum = 0;
    orders.forEach((el) => (orderSum += Number(el.price)));
    return (
      <div>
        {orders.map((el) => (
          <Order order={el} key={el.id} onDelete={onDelete} />
        ))}
        <p className="sum_cost">Сумма:{orderSum.toFixed(2)}$</p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Отсутствуют добавленные товары</h2>
      </div>
    );
  };

  return (
    <header>
      <div>
        <span className="logo">House staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет </li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop_cart_button ${cartOpen && 'active'}`}
        />

        {cartOpen && (
          <div className="shop_cart">
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
