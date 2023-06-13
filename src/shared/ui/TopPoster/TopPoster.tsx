import React, { useMemo } from 'react';
import styles from './topposter.module.css';
import Link from 'next/link';
import { SvgIcon } from '../SvgIcon';

interface ITopPoster {
  movieId: number;
  src: string | undefined;
  movieNumber: number;
  className?: string;
}
export const TopPoster = ({ movieId, src, movieNumber, className }: ITopPoster) => {
  const number = useMemo(() => {
    const _num = movieNumber ? movieNumber + 1 : 1;
    return 'number' + _num;
  }, [movieNumber]);
  return (
    <Link href={`/MoviePage/${movieId}`} className={className}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.posterWrapper}>
            <img src={src} className={styles.img} />
            <div className={styles.imageFade} />
            <div className={styles.numberArea}>
              {number != 'number10' ? (
                <div className={styles.num}>
                  <SvgIcon type={number} />
                </div>
              ) : (
                <div className={styles.num}>
                  <SvgIcon type={'number1'} />
                  <SvgIcon type={'number0'} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
