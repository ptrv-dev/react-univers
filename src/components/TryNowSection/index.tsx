import { motion } from 'framer-motion';
import React from 'react';
import { animationData } from '../../data/animationData';
import Button from '../Button';
import SectionHeader from '../SectionHeader';

import style from './TryNowSection.module.scss';

const TryNowSection: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={[style['try-now'], 'section'].join(' ')}
    >
      <div className={[style['try-now__container'], 'container'].join(' ')}>
        <motion.div variants={animationData.fromBottom} custom={1}>
          <SectionHeader
            suptitle="What are you waiting for?"
            title="Make your business spending smarter"
          />
        </motion.div>
        <div className={style['try-now__body']}>
          <motion.div variants={animationData.scale} custom={2}>
            <Button>Try Revolut business now</Button>
          </motion.div>
          <motion.div variants={animationData.scale} custom={3}>
            <Button variant="outlined-dark">Contact sales</Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TryNowSection;
