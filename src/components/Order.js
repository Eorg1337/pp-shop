import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Order({ order, onDelete }) {
  return (
    <div className="item">
      <img src={`img/${order?.img}`} />
      <h2>{order?.title}</h2>
      <b>{order?.price}$</b>
      <FaTrash className="delete_item" onClick={() => onDelete(order.id)} />
    </div>
  );
}
