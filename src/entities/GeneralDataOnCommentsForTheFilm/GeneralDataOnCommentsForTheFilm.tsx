/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useMemo } from 'react';
import styles from './generaldataoncommentsforthefilm.module.css';
import classNames from 'classnames';
import { IReviev } from 'shared/types/IReviev';
import { useTranslation } from 'react-i18next';

interface IGeneralDataOnCommentsForTheFilm {
  className?: string;
  comments: IReviev;
}

export const GeneralDataOnCommentsForTheFilm: FC<IGeneralDataOnCommentsForTheFilm> = ({
  className,
  comments,
}) => {
  const { t } = useTranslation();

  const { positive, neutral, negative, positivePercent, negativePercent, neutralPercent } = useMemo(() => {
    let positive = 0;
    let negative = 0;
    let neutral = 0;

    comments.docs.map((el) => {
      switch (el.type) {
        case 'Позитивный':
          return positive++;
        case 'Нейтральный':
          return neutral++;
        case 'Негативный':
          return negative++;
        default:
          return el;
      }
    });

    let positivePercent = ((positive * 100) / comments.docs.length).toFixed(2) + ' %';
    let negativePercent = ((negative * 100) / comments.docs.length).toFixed(2) + ' %';
    let neutralPercent = ((neutral * 100) / comments.docs.length).toFixed(2) + ' %';

    return {
      positive,
      neutral,
      negative,
      positivePercent,
      negativePercent,
      neutralPercent,
    };
  }, [comments.docs, comments.total]);

  return comments.total === 0 ? null : (
    <ul className={classNames(className, styles.list)}>
      <li className={styles.item}>
        <p className={classNames(styles.total, styles.bigNumber)}>{comments.docs.length}</p>
        <p className={styles.type}>{t('GeneralDataOnCommentsForTheFilm.total')}</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.positive, styles.bigNumber)}>{positive}</span>
        <span className={styles.percent}> {positivePercent}</span>
        <p className={styles.type}>{t('GeneralDataOnCommentsForTheFilm.positive')}</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.negative, styles.bigNumber)}>{negative}</span>
        <span className={styles.percent}> {negativePercent}</span>
        <p className={styles.type}>{t('GeneralDataOnCommentsForTheFilm.negative')}</p>
      </li>
      <li className={styles.item}>
        <span className={classNames(styles.neutral, styles.bigNumber)}>{neutral}</span>
        <span className={styles.percent}> {neutralPercent}</span>
        <p className={styles.type}>{t('GeneralDataOnCommentsForTheFilm.neutral')}</p>
      </li>
    </ul>
  );
};
