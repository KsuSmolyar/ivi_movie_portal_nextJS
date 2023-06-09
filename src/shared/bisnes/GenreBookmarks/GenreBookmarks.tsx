import React from 'react';
import styles from './genrebookmarks.module.css';
import { nanoid } from '@reduxjs/toolkit';
import classNames from 'classnames';
import Link from 'next/link';

interface IGenreBookmarks {
  home?: boolean;
  page?: string;
  genres: { name: string }[];
  className?: string;
}
export const GenreBookmarks = ({ genres, className, home, page }: IGenreBookmarks) => {
  return (
    <ul className={classNames(styles.list, className)}>
      {home && (
        <li className={styles.item} key={nanoid()}>
          <Link href='/' className={styles.link}>
            мой иви
          </Link>
        </li>
      )}
      {genres?.map((el) => {
        return (
          <li className={styles.item} key={nanoid()}>
            <a href='https://www.ivi.ru/movies' className={styles.link}>
              {el.name}
            </a>
          </li>
        );
      })}
      {page && (
        <li className={styles.item} key={nanoid()}>
          <span className={classNames(styles.link, styles.lastLink)}>{page}</span>
        </li>
      )}
    </ul>
  );
};
