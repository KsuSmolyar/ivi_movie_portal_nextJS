import React from 'react';
import styles from './agerestrictions.module.css';
import classNames from 'classnames';

interface IAgeRestrictions {
  age: number | null;
  className?: string;
}

export const AgeRestrictions = ({ age, className }: IAgeRestrictions) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <span className={styles.text}>{age ? age : 0} +</span>
    </div>
  );
};
