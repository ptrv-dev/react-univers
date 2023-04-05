import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import SectionHeader from '../SectionHeader';

import style from './AboutSection.module.scss';

import { aboutData } from '../../data/about';
import { motion } from 'framer-motion';
import { animationData } from '../../data/animationData';

const AboutSection: React.FC = () => {
  const [width] = useWindowSize();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={[style['about'], 'section'].join(' ')}
    >
      <div className={[style['about__container'], 'container'].join(' ')}>
        <motion.div variants={animationData.fromTop}>
          <SectionHeader
            title="Get to know more about Univers"
            subtitle="We are customer - focused digital bank that provides complete financial solutions to meet your entire financial needs"
            variant={width > 768 ? 'row' : 'col'}
            color="black"
          />
        </motion.div>
        <div className={style['about__body']}>
          {aboutData.map(({ title, text }, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animationData.scale}
              custom={idx + 1}
              key={idx}
              className={style['about-item']}
            >
              <h3 className={style['about-item__title']}>{title}</h3>
              <p className={style['about-item__text']}>{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
