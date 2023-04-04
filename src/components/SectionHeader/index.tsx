import React from 'react';

import style from './SectionHeader.module.scss';

interface SectionHeaderProps {
  suptitle?: string;
  title: string;
  subtitle?: string;
  color?: 'white' | 'black';
  variant?: 'row' | 'col';
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  color = 'black',
  subtitle,
  suptitle,
  variant = 'row',
  center,
}) => {
  const classes = [style['header']];
  if (color === 'black') classes.push(style['header_black']);
  if (color === 'white') classes.push(style['header_white']);
  if (variant === 'col') classes.push(style['header_col']);
  if (variant === 'row') {
    classes.push(style['header_row']);
    if (!subtitle && !center) classes.push(style['header_text-center']);
  }
  if (center) classes.push(style['header_text-center']);
  return (
    <div className={classes.join(' ')}>
      <div className={style['header__col']}>
        {suptitle && <h4 className={style['header__suptitle']}>{suptitle}</h4>}
        <h2 className={style['header__title']}>{title}</h2>
      </div>
      {subtitle && <p className={style['header__subtitle']}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
