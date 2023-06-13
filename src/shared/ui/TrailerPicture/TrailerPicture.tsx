import classNames from 'classnames';
import React from 'react';
import styles from './trailerpicture.module.css';

interface ITrailerPicture {
  trailerID?: string;
  className?: string;
}

export const TrailerPicture = ({ trailerID, className }: ITrailerPicture) => {
  return (
    <div className={classNames(styles.container, className)}>
      <img
        className={styles.trailerImg}
        src={`https://i.ytimg.com/vi/${trailerID}/maxresdefault.jpg`}
        alt='трейлер'
      />
      <button className={classNames(styles.trailerButton, 'icon-play_20__0')} aria-label='play' />
    </div>
  );
};
