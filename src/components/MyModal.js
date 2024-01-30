import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

export default function MyModal({ item, onShowModal, onAdd }) {
  return (
    <div className="item_desc">
      <div>
        <FaWindowClose
          className="close_icon"
          onClick={() => onShowModal(item)}
        />
        <img src={`img/${item.img}`} onClick={() => onShowModal(item)} />
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
        <div className="add_to_card" onClick={() => onAdd(item)}>
          +
        </div>
      </div>
    </div>
  );
}
