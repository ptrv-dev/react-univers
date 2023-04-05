import React from 'react';

import style from './DiscoverCard.module.scss';

interface DiscoverCardProps {
  title: string;
  text?: string;
  buttonText: string;
  url: string;
  image?: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const DiscoverCard: React.FC<DiscoverCardProps> = ({
  title,
  text,
  buttonText,
  url,
  image,
  size,
}) => {
  const classes = [style['card'], style[`card_${size}`]].join(' ');
  return (
    <div className={classes}>
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
    </div>
  );
};

export default DiscoverCard;
