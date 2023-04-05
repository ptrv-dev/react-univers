import { motion } from 'framer-motion';
import React from 'react';
import { animationData } from '../../data/animationData';
import SectionHeader from '../SectionHeader';

import style from './ControlSection.module.scss';

const ControlSection: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={[style['control'], 'section'].join(' ')}
    >
      <div className={[style['control__container'], 'container'].join(' ')}>
        <motion.div variants={animationData.fromBottom} custom={1}>
          <SectionHeader
            title="Control all your spend with smart rules"
            color="white"
          />
        </motion.div>
        <motion.img
          variants={animationData.opacity}
          custom={2}
          src="/assets/img/control/illustration.png"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default ControlSection;
