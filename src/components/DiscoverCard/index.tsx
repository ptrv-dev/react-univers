import { motion, MotionProps } from 'framer-motion';
import React from 'react';

import style from './DiscoverCard.module.scss';

interface DiscoverCardProps extends MotionProps {
  title: string;
  text?: string;
  buttonText: string;
  url: string;
  image?: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const DiscoverCard = React.forwardRef<HTMLDivElement, DiscoverCardProps>(
  ({ title, text, buttonText, url, image, size, ...rest }, ref) => {
    const classes = [style['card'], style[`card_${size}`]].join(' ');
    return (
      <motion.div ref={ref} {...rest} className={classes}>
        <div className={style['card__col']}>
          <h3 className={style['card__title']}>{title}</h3>
          {text && <p className={style['card__text']}>{text}</p>}
          <a className={style['card__link']} href={url}>
            {buttonText}
          </a>
        </div>
        {image && (
          <img
            className={style['card__image']}
            src={`/assets/img/discover/${image}`}
            alt={title}
          />
        )}
      </motion.div>
    );
  }
);

export default DiscoverCard;
