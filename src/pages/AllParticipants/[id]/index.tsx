import React, { FC, HTMLAttributes, useMemo } from 'react';
import styles from '../allparticipants.module.css';
import { Back } from 'shared/ui/Back/Back';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { IFilm } from 'shared/types/IFilm';
import classNames from 'classnames';
import { IPerson } from 'shared/types/IPerson';
import { PersonsList } from 'widgets/PersonsList';
import { nanoid } from '@reduxjs/toolkit';
import { PosterCards } from 'shared/bisnes/PosterCards/PosterCards';
import { ShortDescription } from 'shared/bisnes/ShortDescription';
import { RatingMovie } from 'shared/bisnes/RatingMovie';
import { BlockChart } from 'shared/bisnes/BlockChart';
import { getMovie } from 'shared/apiService';
import Link from 'next/link';

export async function getServerSideProps(context: any) {
  try {
    const { id } = context.params;
    const film = await getMovie(id);
    return {
      props: { film: film },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

interface IAllParticipants {
  film: IFilm;
}

const AllParticipants = ({ film }: IAllParticipants) => {
  const workArr = useMemo(() => {
    if (film === undefined) return;
    const _workObj = film.persons.reduce(function (obj: { [key: string]: IPerson[] }, item) {
      const key = item.profession;

      if (!obj.hasOwnProperty(key)) {
        obj[key] = [];
      }

      obj[key].push(item);

      return obj;
    }, {});

    let _workArr = [];

    for (let key in _workObj) {
      _workArr.push(_workObj[key]);
    }

    return _workArr;
  }, [film]);

  return (
    <div className={styles.root}>
      <div className={classNames(styles.wrapper, 'container')}>
        <Link href={`/MoviePage/${film.id ?? ''}`}>
          <Back />
        </Link>
        <SectionTitle className={styles.title}>
          <span>{film.name}</span>
        </SectionTitle>

        <div className={styles.content}>
          {workArr &&
            workArr.length > 0 &&
            workArr.map((arr) => {
              return <PersonsList list={arr} className={styles.section} key={nanoid()} />;
            })}
        </div>
        <div className={styles.poster}>
          <Link href={`/MoviePage/${film.id ?? ''}`}>
            <PosterCards src={film.poster?.url} name={film.name} />
          </Link>
          <div className={styles.rating}>
            <RatingMovie grade={film.rating ? film.rating.kp : 0} className={styles.ratingValue} />
            <BlockChart
              width={50}
              obj={
                film.rating ?? {
                  await: 0,
                  filmCritics: 0,
                  imdb: 0,
                  russianFilmCritics: 0,
                }
              }
            />
          </div>
          <ShortDescription obj={film} className={styles.shortDescription} allGenres />
        </div>
      </div>
    </div>
  );
};

export default AllParticipants;
