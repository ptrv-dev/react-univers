import { motion } from 'framer-motion';
import React from 'react';
import { animationData } from '../../data/animationData';
import { discoverData } from '../../data/discover';
import DiscoverCard from '../DiscoverCard';
import SectionHeader from '../SectionHeader';

import style from './DiscoverSection.module.scss';

const DiscoverSection: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={style['discover']}
    >
      <div className={[style['discover__container'], 'container'].join(' ')}>
        <motion.div variants={animationData.fromTop}>
          <SectionHeader
            color="white"
            suptitle="Teamwork makes the dream work"
            title="Discover the meaning of efficiency with Univers Business"
          />
        </motion.div>
        <div className={style['discover__body']}>
          {discoverData.map((item, idx) => (
            <DiscoverCard
              variants={animationData.scale}
              custom={idx + 1}
              initial="hidden"
              whileInView="visible"
              key={idx}
              {...item}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DiscoverSection;
