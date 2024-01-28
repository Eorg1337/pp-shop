import React from 'react';

export default function Order({ order }) {
  return (
    <div className="item">
      <img src={`img/${order?.img}`} />
      <h2>{order?.title}</h2>
      <b>{order?.price}$</b>
    </div>
  );
}
