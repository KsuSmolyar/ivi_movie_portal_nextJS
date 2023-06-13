import React from 'react';
import styles from './postercards.module.css';
import classNames from 'classnames';
import Image from 'next/image';

interface IPosterCards {
  src?: string;
  name: string;
  className?: string;
}

export const PosterCards = ({ src, name, className }: IPosterCards) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      {src && <Image src={src} width={200} height={300} alt={name} className={styles.pic} />}
    </div>
  );
};
