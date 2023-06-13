import React from 'react';
import styles from './topsection.module.css';
import PosterCards from 'shared/bisnes/PosterCards';
import { Carousel } from 'shared/ui/Carousel';
import Link from 'next/link';
import { IFilm } from 'shared/types/IFilm';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { SvgIcon } from 'shared/ui/SvgIcon';
import { TopPoster } from 'shared/ui/TopPoster';

interface IProps extends React.ComponentPropsWithoutRef<'div'> {
  films: IFilm[];
}

export function TopSection({ films, className }: IProps) {
  const { i18n } = useTranslation();

  return (
    <section className={classNames(styles.root, className)}>
      <SectionTitle>
        <SvgIcon type='top' />
      </SectionTitle>
      <Carousel
        carouselContainerClassName={styles.carousel}
        carouselChildrenClassName={styles.movieBadgeCarouselContent}
        withArrow
        withButton
        scrollMultipleItems
      >
        {films.map((movie, index) => {
          return (
            <div key={movie.id} className={styles.movieBadgeContainer}>
              <TopPoster movieId={movie.id} src={movie.poster ? movie.poster.url : ''} movieNumber={index} />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
