import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
const Items = ({ items, onAdd, onShowModal }) => {
  if (!items || !items.length) {
    return null;
  }

  return (
    <main>
      {items.map((el) => (
        <Item item={el} key={el.id} onAdd={onAdd} onShowModal={onShowModal} />
      ))}
    </main>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.string,
    }),
  ),
};

export default Items;
