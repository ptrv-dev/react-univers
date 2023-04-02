import React from 'react';

import style from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <a href="/" className={style['logo']}>
      <svg
        className={style['logo__image']}
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="21.2629"
          cy="21.4999"
          r="19.8454"
          stroke="currentColor"
          strokeWidth="2.83505"
        />
        <circle cx="21.2629" cy="21.4999" r="11.3402" fill="currentColor" />
      </svg>
      <h4 className={style['logo__heading']}>Univers</h4>
    </a>
  );
};

export default Logo;
