import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Button from '../Button';

import style from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  const [width] = useWindowSize();
  return (
    <div className={style['hero']}>
      <div className={style['hero__wrapper']}>
        <div className={[style['hero__container'], 'container'].join(' ')}>
          <div className={style['hero__row']}>
            <h1 className={style['hero__title']}>Digitize your univers bank</h1>
            <div className={style['hero__col']}>
              <p className={style['hero__text']}>
                Money should be easy, it is time to say goodbye to banks &
                financial services companies that don’t work for you
              </p>
              <div className={style['hero__buttons']}>
                <Button variant="large">Digitize Now</Button>
                <Button variant="circle">
                  <svg
                    style={{ transform: 'translateX(4px)' }}
                    width="30"
                    height="33"
                    viewBox="0 0 30 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.1833 16.63L0.878348 32.9719L0.878349 0.288109L29.1833 16.63Z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className={style['hero__row']}>
            <div className={style['hero-users']}>
              <div className={style['hero-users__top']}>
                <img
                  className={style['hero-users__image']}
                  src="/assets/img/hero/user1.png"
                  alt=""
                />
                <img
                  className={style['hero-users__image']}
                  src="/assets/img/hero/user2.png"
                  alt=""
                />
                <img
                  className={style['hero-users__image']}
                  src="/assets/img/hero/user3.png"
                  alt=""
                />
                <span>16M</span>
              </div>
              <p className={style['hero-users__bottom']}>
                <svg
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#FF0000" />
                </svg>
                of active users in the world
              </p>
            </div>
          </div>
        </div>
        <button className={style['hero__button']}>
          <img src="/assets/img/hero/button.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
