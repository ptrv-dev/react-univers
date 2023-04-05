import React from 'react';
import Button from '../Button';

import style from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={style['footer']}>
      <div className={style['footer__wrapper']}>
        <div className={[style['footer__container'], 'container'].join(' ')}>
          <h2 className={style['footer__title']}>
            Connect your finance with Carty
          </h2>
          <Button variant="large">Join the universe</Button>
          <p className={style['footer__copyright']}>
            2023 © All right reserved (Univers™)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
