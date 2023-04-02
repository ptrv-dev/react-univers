import React from 'react';

import style from './HeaderVariants.module.scss';

interface HeaderVariantsProps {
  variants: string[];
  currentVariant: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}

const HeaderVariants: React.FC<HeaderVariantsProps> = ({
  variants,
  currentVariant,
  onChange,
}) => {
  return (
    <nav className={style['header__variant']}>
      <ul>
        {variants.map((variant, idx) => (
          <li
            key={idx}
            className={currentVariant === idx ? style['active'] : ''}
            onClick={() => onChange(idx)}
          >
            {variant}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderVariants;
