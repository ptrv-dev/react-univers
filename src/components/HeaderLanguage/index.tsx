import React from 'react';

import style from './HeaderLanguage.module.scss';

const HeaderLanguage: React.FC = () => {
  return (
    <div className={style['language']}>
      <div className={style['language__current']}>
        <img src="/assets/img/lang/en.svg" alt="EN" />
        EN
      </div>
    </div>
  );
};

export default HeaderLanguage;
