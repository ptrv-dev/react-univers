import React from 'react';

import Button from '../Button';
import SectionHeader from '../SectionHeader';

import style from './AdvantagesSection.module.scss';

import { advantagesData } from '../../data/advantages';
import useWindowSize from '../../hooks/useWindowSize';

interface AdvantageProps {
  title: string;
  text: string;
  buttonText: string;
  url: string;
}

const Advantage: React.FC<AdvantageProps> = ({
  buttonText,
  text,
  url,
  title,
}) => {
  return (
    <a href={url} className={style['advantage']}>
      <h3 className={style['advantage__title']}>{title}</h3>
      <p className={style['advantage__text']}>{text}</p>
      <button className={style['advantage__button']}>
        {buttonText}{' '}
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1477 3.61815C10.1477 3.46894 10.0909 3.32892 9.98228 3.21972L7.04997 0.287943C7.00383 0.241781 6.94905 0.205162 6.88875 0.180178C6.82846 0.155194 6.76383 0.142334 6.69857 0.142334C6.6333 0.142334 6.56867 0.155194 6.50838 0.180178C6.44808 0.205162 6.3933 0.241781 6.34716 0.287943L6.172 0.463644C6.12584 0.509782 6.08922 0.564563 6.06424 0.624858C6.03925 0.685153 6.02639 0.74978 6.02639 0.815046C6.02639 0.880312 6.03925 0.944939 6.06424 1.00523C6.08922 1.06553 6.12584 1.12031 6.172 1.16645L8.00686 3.00185H1.45457C1.38928 3.00178 1.32461 3.01457 1.26427 3.03951C1.20393 3.06445 1.1491 3.10103 1.10291 3.14717C1.05672 3.19332 1.02007 3.24811 0.99507 3.30842C0.970068 3.36874 0.957199 3.43339 0.957199 3.49868V3.74736C0.957199 4.02145 1.17939 4.24365 1.45457 4.24365H8.00686L6.172 6.07851C6.12584 6.12464 6.08922 6.17943 6.06424 6.23972C6.03925 6.30001 6.02639 6.36464 6.02639 6.42991C6.02639 6.49517 6.03925 6.5598 6.06424 6.62009C6.08922 6.68039 6.12584 6.73517 6.172 6.78131L6.3477 6.95701C6.54179 7.15109 6.85589 7.15109 7.05051 6.95701L9.98228 4.02578C10.0926 3.91495 10.1477 3.7679 10.1477 3.61815Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </a>
  );
};

const AdvantagesSection: React.FC = () => {
  const [width] = useWindowSize();
  return (
    <div className={[style['advantages'], 'section'].join(' ')}>
      <div className={[style['advantages__container'], 'container'].join(' ')}>
        <div className={style['advantages__col']}>
          <SectionHeader
            color="black"
            variant={'col'}
            title="We keep your money safe"
            subtitle="Keep your money safe with our anti-fraud system. All our cards support 3D Secure and our contactless card limits help fight contactless fraud"
            center={width <= 500}
          />
          <div className={style['advantages__buttons']}>
            <Button variant="large">See how</Button>
            <Button variant="circle">
              <svg
                style={{ transform: 'translateX(4px)' }}
                width="30"
                height="33"
                viewBox="0 0 30 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.1833 16.63L0.878348 32.9719L0.878349 0.288109L29.1833 16.63Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className={style['advantages__col']}>
          <div className={style['advantages__grid']}>
            {advantagesData.map((item, idx) => (
              <Advantage key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
