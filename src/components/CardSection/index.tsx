import { motion } from 'framer-motion';
import React from 'react';
import { animationData } from '../../data/animationData';
import SectionHeader from '../SectionHeader';

import style from './CardSection.module.scss';

const CardSection: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={[style['card'], 'section'].join(' ')}
    >
      <div className={style['card__wrapper']}>
        <div className={[style['card__container'], 'container'].join(' ')}>
          <div className={style['card__body']}>
            <motion.div variants={animationData.fromLeft} custom={1}>
              <SectionHeader
                color="white"
                variant="col"
                title="Make an impression with metal"
                subtitle="Get our iconic metal cards forged from stainless steel, for you and your power players.  Add your company name to the front for an extra professional touch. Exclusively for paid plans. Subject to additional fees"
              />
            </motion.div>
            <motion.a
              variants={animationData.opacity}
              custom={2}
              href="#"
              className={style['card__link']}
            >
              Order a Metal card
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5645 13.8296C22.5645 13.5273 22.4495 13.2436 22.2293 13.0223L16.2879 7.08202C16.1945 6.98848 16.0835 6.91429 15.9613 6.86366C15.8391 6.81304 15.7082 6.78699 15.5759 6.78699C15.4437 6.78699 15.3128 6.81304 15.1906 6.86366C15.0684 6.91429 14.9574 6.98848 14.8639 7.08202L14.509 7.43802C14.4155 7.5315 14.3413 7.6425 14.2907 7.76466C14.2401 7.88683 14.214 8.01778 14.214 8.15002C14.214 8.28226 14.2401 8.4132 14.2907 8.53537C14.3413 8.65754 14.4155 8.76853 14.509 8.86201L18.2268 12.5808H4.95072C4.81843 12.5807 4.68741 12.6066 4.56515 12.6572C4.44289 12.7077 4.33179 12.7818 4.23819 12.8753C4.1446 12.9688 4.07035 13.0798 4.01969 13.202C3.96904 13.3242 3.94296 13.4552 3.94296 13.5875V14.0914C3.94296 14.6467 4.39317 15.0969 4.95072 15.0969H18.2268L14.509 18.8147C14.4155 18.9082 14.3413 19.0192 14.2907 19.1413C14.2401 19.2635 14.214 19.3944 14.214 19.5267C14.214 19.6589 14.2401 19.7899 14.2907 19.912C14.3413 20.0342 14.4155 20.1452 14.509 20.2387L14.865 20.5947C15.2583 20.9879 15.8947 20.9879 16.289 20.5947L22.2293 14.6555C22.4528 14.4309 22.5645 14.133 22.5645 13.8296Z"
                  fill="currentColor"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardSection;
