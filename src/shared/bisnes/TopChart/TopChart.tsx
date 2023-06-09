import React from 'react';
import styles from './topchart.module.css';
import { useTranslation } from '../../../i18n';
import { IFilm } from 'shared/types/IFilm';

interface ITopChart {
  obj: IFilm;
}

export const TopChart = ({ obj }: ITopChart) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <p className={styles.name}>{t('topChart.Our')}</p>
      <p className={styles.name}>{t('topChart.grade')}</p>

      <input
        type='range'
        className={styles.inp}
        min='0'
        max='10'
        value={obj.rating ? obj.rating.kp : 0}
        step='0,1'
        style={{ width: 'width' }}
        id='topChart'
        readOnly
      />
    </div>
  );
};
