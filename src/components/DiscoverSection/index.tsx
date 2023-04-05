import React from 'react';
import { discoverData } from '../../data/discover';
import DiscoverCard from '../DiscoverCard';
import SectionHeader from '../SectionHeader';

import style from './DiscoverSection.module.scss';

const DiscoverSection: React.FC = () => {
  return (
    <div className={style['discover']}>
      <div className={[style['discover__container'], 'container'].join(' ')}>
        <SectionHeader
          color="white"
          suptitle="Teamwork makes the dream work"
          title="Discover the meaning of efficiency with Univers Business"
        />
        <div className={style['discover__body']}>
          {discoverData.map((item, idx) => (
            <DiscoverCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
