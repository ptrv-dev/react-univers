import { motion } from 'framer-motion';
import React from 'react';
import { animationData } from '../../data/animationData';
import Button from '../Button';

import style from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={style['footer']}
    >
      <div className={style['footer__wrapper']}>
        <div className={[style['footer__container'], 'container'].join(' ')}>
          <motion.h2
            variants={animationData.scale}
            custom={1}
            className={style['footer__title']}
          >
            Connect your finance with Carty
          </motion.h2>
          <motion.div variants={animationData.scale} custom={2}>
            <Button variant="large">Join the universe</Button>
          </motion.div>
          <motion.p
            variants={animationData.opacity}
            custom={3}
            className={style['footer__copyright']}
          >
            2023 © All right reserved (Univers™)
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
