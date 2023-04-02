import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import HeaderNavigation from '../HeaderNavigation';
import HeaderVariants from '../HeaderVariants';

import Logo from '../Logo';

import style from './Header.module.scss';

const variants = ['Personal', 'Business'];
const navigation = [
  { title: 'Features', url: 'features' },
  { title: 'Pricing', url: 'pricing' },
  { title: 'Help', url: 'help' },
];

const Header: React.FC = () => {
  const [width] = useWindowSize();
  const [currentVariant, setCurrentVariant] = React.useState<number>(0);

  return (
    <header className={style['header']}>
      <div className={[style['header__container'], 'container'].join(' ')}>
        <Logo />
        {width > 500 && (
          <HeaderVariants
            variants={variants}
            currentVariant={currentVariant}
            onChange={setCurrentVariant}
          />
        )}
        <HeaderNavigation navigation={navigation}>
          {width <= 500 && (
            <HeaderVariants
              variants={variants}
              currentVariant={currentVariant}
              onChange={setCurrentVariant}
            />
          )}
        </HeaderNavigation>
      </div>
    </header>
  );
};

export default Header;
