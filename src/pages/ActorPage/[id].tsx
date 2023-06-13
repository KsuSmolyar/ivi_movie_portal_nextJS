import React, { useEffect, useState } from 'react';
import styles from './actorpage.module.css';
import { IPersonBackend } from 'shared/types/IPersonBackend';
// import ActorPageWiget from 'widgets/ActorPageWiget';
import declension from '../../entities/ActorPageLib/lib/helpers/declension ';
import { getPerson } from 'shared/apiService';
import { IActorFilms } from 'shared/types/IActorFilms';
import { useTranslation } from 'i18n';
import classNames from 'classnames';
import { Back } from 'shared/ui/Back/Back';
import { PersonHeader } from 'shared/bisnes/PersonHeader';
import { ActorTabs } from 'features/ActorTabs/ActorTabs';
import { FilmographyItem } from 'entities/FilmographyItem';

export async function getServerSideProps(context: any) {
  try {
    const { id } = context.params;
    const actor = await getPerson(id);

    return {
      props: { actor: actor },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

interface IActorPage {
  actor: IPersonBackend;
}

export default function ActorPage({ actor }: IActorPage) {
  const [movies, setMovies] = useState<IActorFilms[]>([]);
  const [moreMovies, setMoreMovies] = useState<IActorFilms[]>();
  const [showMoreMovies, setShowMoreMovies] = useState<boolean>(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (actor.movies) {
      let movies = actor.movies.filter((item) => item.name !== null);
      if (movies.length > 9) {
        let moviesWithTitle = movies.slice(0, 8);
        let moreMoviesWithTitle = movies.slice(8);
        setMovies(moviesWithTitle);
        setMoreMovies(moreMoviesWithTitle);
      } else {
        setMovies(actor.movies);
      }
    }
  }, [actor]);

  return (
    <section className={classNames(styles.actorPage, 'container')}>
      <Back className={styles.back} />
      <div className={styles.container}>
        <PersonHeader name={actor.name} photo={actor.photo} enName={actor.enName} />
        <div className={styles.filmography}>
          <div className={styles.content}>
            <div className={styles.title}>
              Полная фильмография
              <span className={styles.label}>
                {declension(
                  actor?.movies && actor?.movies.filter((item) => item.name !== null).length,
                  'фильм',
                )}
              </span>
            </div>
            <ActorTabs tabs={['Всё']} />
          </div>
          <div className={styles.filmographyList}>
            <div className={styles.filmographyContent}>
              {movies.map((movie) => movie.name && <FilmographyItem key={movie.id} movie={movie} />)}
              {!showMoreMovies && moreMovies && (
                <button className={styles.btn} onClick={() => setShowMoreMovies(true)}>
                  Еще {declension(moreMovies.length, 'фильм')}
                </button>
              )}
              {showMoreMovies &&
                moreMovies?.map((movie) => movie.name && <FilmographyItem key={movie.id} movie={movie} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
