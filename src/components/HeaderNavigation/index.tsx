import React from 'react';
import HeaderLanguage from '../HeaderLanguage';

import style from './HeaderNavigation.module.scss';

interface NavigationItem {
  title: string;
  url: string;
}

interface HeaderNavigationProps {
  navigation: NavigationItem[];
  children?: React.ReactNode;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  navigation,
  children,
}) => {
  const [isMenuVisible, setIsMenuVisible] = React.useState<boolean>(false);
  return (
    <nav className={style['navigation']}>
      <div
        className={
          isMenuVisible
            ? [style['navigation__menu'], style['active']].join(' ')
            : style['navigation__menu']
        }
        onClick={() => setIsMenuVisible((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={
          isMenuVisible
            ? [style['navigation__list'], style['active']].join(' ')
            : style['navigation__list']
        }
      >
        {children}
        {navigation.map((item) => (
          <li key={item.url}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
        <li>
          <HeaderLanguage />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
