import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import SectionHeader from '../SectionHeader';

import style from './AboutSection.module.scss';

import { aboutData } from '../../data/about';

const AboutSection: React.FC = () => {
  const [width] = useWindowSize();
  return (
    <div className={[style['about'], 'section'].join(' ')}>
      <div className={[style['about__container'], 'container'].join(' ')}>
        <SectionHeader
          title="Get to know more about Univers"
          subtitle="We are customer - focused digital bank that provides complete financial solutions to meet your entire financial needs"
          variant={width > 768 ? 'row' : 'col'}
          color="black"
        />
        <div className={style['about__body']}>
          {aboutData.map(({ title, text }, idx) => (
            <div key={idx} className={style['about-item']}>
              <h3 className={style['about-item__title']}>{title}</h3>
              <p className={style['about-item__text']}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
