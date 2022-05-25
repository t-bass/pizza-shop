import React, { useState } from 'react';

function Categories() {
  const [active, setActive] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (i) => {
    setActive(i);
  };

  return (
    <div className='categories'>
      {/* РЕНДЕР СПИСКА */}
      <ul>
        {categories.map((el, i) => (
          <li key={el} onClick={() => onClickCategory(i)} className={active === i ? 'active' : ''}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
