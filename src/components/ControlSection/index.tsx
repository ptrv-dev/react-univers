import React from 'react';
import SectionHeader from '../SectionHeader';

import style from './ControlSection.module.scss';

const ControlSection: React.FC = () => {
  return (
    <div className={[style['control'], 'section'].join(' ')}>
      <div className={[style['control__container'], 'container'].join(' ')}>
        <SectionHeader
          title="Control all your spend with smart rules"
          color="white"
        />
        <img src="/assets/img/control/illustration.png" alt="" />
      </div>
    </div>
  );
};

export default ControlSection;
