import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Categories({ chooseCategory, selectedCategory }) {
  const [categories, setCategories] = useState();
  useEffect(() => {
    setCategories([
      { key: 'all', name: 'Все' },
      { key: 'chairs', name: 'Стулья' },
      { key: 'tables', name: 'Столы' },
      { key: 'sofa', name: 'Диваны' },
    ]);
  }, []);
  return (
    <div className="categories">
      {categories?.map((el) => (
        <div
          key={el.key}
          className={selectedCategory === el.key ? 'active' : ''}
          onClick={() => chooseCategory(el.key)}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
}
