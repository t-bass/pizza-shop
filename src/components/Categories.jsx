import React, { useState } from 'react';

function Categories({ value, onChangeCategory }) {
  // console.log(value);
  // const [active, setActive] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  // const onClickCategory = (i) => {
  //   setActive(i);
  // };

  return (
    <div className='categories'>
      {/* РЕНДЕР СПИСКА */}
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={categoryName}
            onClick={() => onChangeCategory(i)}
            className={value === i ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
