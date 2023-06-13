import React from 'react';
import styles from './bannerhover.module.css';
import { BlockChart } from 'shared/bisnes/BlockChart';
import { ShortDescription } from 'shared/bisnes/ShortDescription';
import { TopChart } from 'shared/bisnes/TopChart';
import { IFilm } from 'shared/types/IFilm';
import classNames from 'classnames';
import { RatingMovie } from 'shared/bisnes/RatingMovie';

interface IBannerHover {
  film: IFilm;
  className?: string;
}

export const BannerHover = ({ film, className }: IBannerHover) => {
  return (
    <div className={classNames(styles.bannerHover, className)}>
      <div className={styles.bannerHoverWrapper}>
        <ul className={styles.bannerHoverList}>
          <li className={classNames(styles.bannerHoverItem, 'icon-favoriteAdd_20__0')}></li>
          <li className={classNames(styles.bannerHoverItem, 'icon-similar_20__0')}></li>
          <li className={classNames(styles.bannerHoverItem, 'icon-rating_20__0')}></li>
          <li className={classNames(styles.bannerHoverItem, 'icon-dislike_20__0')}></li>
        </ul>
        <div className={styles.bannerHoverRating}>
          <TopChart obj={film} />
          <div className={styles.innerContainer}>
            <RatingMovie grade={film.rating ? film.rating.kp : 0} />
            {film.rating && <BlockChart obj={film.rating} width={35} />}
          </div>
          <ShortDescription obj={film} />
        </div>
      </div>
    </div>
  );
};
