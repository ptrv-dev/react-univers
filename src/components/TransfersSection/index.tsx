import React from 'react';
import Button from '../Button';
import SectionHeader from '../SectionHeader';

import style from './TransfersSection.module.scss';

const TransferSection: React.FC = () => {
  return (
    <div className={[style['transfer'], 'section'].join(' ')}>
      <div className={style['transfer__wrapper']}>
        <div className={[style['transfer__container'], 'container'].join(' ')}>
          <div className={style['transfer__col']}>
            <SectionHeader
              color="white"
              variant="col"
              suptitle="Transfers"
              title="International payments for your business"
              subtitle="Join thousands of businesses saving on fees with fast local and international transfers"
            />
            <div className={style['transfer__buttons']}>
              <Button className={style['transfer__button']} variant="default">
                Get started
              </Button>
              <Button className={style['transfer__button']} variant="outlined">
                Contact sales
              </Button>
            </div>
          </div>
          <div className={style['transfer__col']}>
            <img
              className={style['transfer__illustration']}
              src="/assets/img/transfer/illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferSection;
