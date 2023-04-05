import React from 'react';
import Button from '../Button';
import SectionHeader from '../SectionHeader';

import style from './TryNowSection.module.scss';

const TryNowSection: React.FC = () => {
  return (
    <div className={[style['try-now'], 'section'].join(' ')}>
      <div className={[style['try-now__container'], 'container'].join(' ')}>
        <SectionHeader
          suptitle="What are you waiting for?"
          title="Make your business spending smarter"
        />
        <div className={style['try-now__body']}>
          <Button>Try Revolut business now</Button>
          <Button variant="outlined-dark">Contact sales</Button>
        </div>
      </div>
    </div>
  );
};

export default TryNowSection;
