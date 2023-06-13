import React from 'react';
import styles from './grading.module.css';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface IGrading {
  grading: number;
  className?: string;
}

export function Grading({ grading, className }: IGrading) {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.ratings}>{grading}</div>
      <div className={styles.categoryList}>
        <p className={styles.categoryItem}>{t('Grading.PortalRating')}</p>
      </div>
      <button className={styles.btn}>{t('Grading.Estimate')}</button>
    </div>
  );
}
