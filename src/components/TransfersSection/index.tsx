import { motion } from 'framer-motion';
import React from 'react';
import { animationData } from '../../data/animationData';
import Button from '../Button';
import SectionHeader from '../SectionHeader';

import style from './TransfersSection.module.scss';

const TransferSection: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={[style['transfer'], 'section'].join(' ')}
    >
      <div className={style['transfer__wrapper']}>
        <div className={[style['transfer__container'], 'container'].join(' ')}>
          <div className={style['transfer__col']}>
            <motion.div variants={animationData.fromLeft}>
              <SectionHeader
                color="white"
                variant="col"
                suptitle="Transfers"
                title="International payments for your business"
                subtitle="Join thousands of businesses saving on fees with fast local and international transfers"
              />
            </motion.div>
            <div className={style['transfer__buttons']}>
              <motion.div variants={animationData.scale} custom={1}>
                <Button className={style['transfer__button']} variant="default">
                  Get started
                </Button>
              </motion.div>
              <motion.div variants={animationData.scale} custom={2}>
                <Button
                  className={style['transfer__button']}
                  variant="outlined"
                >
                  Contact sales
                </Button>
              </motion.div>
            </div>
          </div>
          <div className={style['transfer__col']}>
            <motion.img
              variants={animationData.fromRight}
              custom={3}
              className={style['transfer__illustration']}
              src="/assets/img/transfer/illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TransferSection;
