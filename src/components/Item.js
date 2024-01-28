import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ item, onAdd }) {
  return (
    <div className="item">
      <img src={`img/${item.img}`} />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
      <div className="add_to_card" onClick={() => onAdd(item)}>
        +
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.string,
    }),
  ),
};
