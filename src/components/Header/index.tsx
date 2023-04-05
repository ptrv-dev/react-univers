import { motion } from 'framer-motion';
import React from 'react';
import { animationData } from '../../data/animationData';
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
    <motion.header
      initial="hidden"
      whileInView="visible"
      className={style['header']}
    >
      <motion.div
        variants={animationData.fromTop}
        className={[style['header__container'], 'container'].join(' ')}
      >
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
      </motion.div>
    </motion.header>
  );
};

export default Header;
