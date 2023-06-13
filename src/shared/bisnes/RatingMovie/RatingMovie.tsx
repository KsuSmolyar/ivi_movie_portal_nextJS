import React from 'react';
import styles from './ratingmovie.module.css';
import classNames from 'classnames';

interface IRatingMovie {
  grade: number;
  className?: string;
}

export const RatingMovie = ({ grade, className }: IRatingMovie) => {
  const [integer, decimal] = grade.toFixed(1).split('.');

  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.left}>{integer}</span>
      <span className={styles.right}>,{decimal}</span>
    </div>
  );
};
