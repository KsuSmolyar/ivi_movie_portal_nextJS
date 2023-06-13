import React, { useEffect, useMemo } from 'react';
import styles from '../moviepage.module.css';
import { useAppDispatch } from 'app/store/hooks';
import { getCommentsThunk } from 'app/store/commentsRequest';
import { IFilm } from 'shared/types/IFilm';
import { getMovie } from 'shared/apiService';
import { useTranslation } from 'i18n';
import { GenreBookmarks } from 'shared/bisnes/GenreBookmarks';
import classNames from 'classnames';
import { Back } from 'shared/ui/Back/Back';
import { VideoPlayer } from 'entities/VideoPlayer';
import { VideoDescriptionBody, VideoDescriptionHeader } from 'widgets/VideoDescription';
import { Carousel } from 'shared/ui/Carousel';
import Link from 'next/link';
import { PosterCards } from 'shared/bisnes/PosterCards/PosterCards';
import { ActorsCreators } from 'widgets/ActorsCreators';
import { AdditionalMaterials } from 'entities/AdditionalMaterials/AdditionalMaterials';
import { BlockComments } from 'widgets/BlockComments/BlockComments';
import { AllDevicePoster } from 'entities/AllDevicePoster';

export async function getServerSideProps(context: any) {
  try {
    const { id } = context.params;
    const film = await getMovie(id);
    return {
      props: { film: film, id: id },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

interface IMoviePage {
  film: IFilm;
  id: string;
}

export default function MoviePage({ film, id }: IMoviePage) {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  const youtubeTrailers = useMemo(
    () => film.videos.trailers.filter((video) => video?.site === 'youtube' && video.url.includes('embed')),
    [film],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (film === undefined) return;
    dispatch(getCommentsThunk(id));
  }, [film, id, dispatch]);

  return (
    <div className={classNames(styles.root, 'container')}>
      <GenreBookmarks genres={film.genres} className={styles.head} />
      <Back className={styles.back}/>
      <div className={styles.playerAndDescription}>
        <VideoPlayer
          className={styles.player}
          trailer={youtubeTrailers.length > 0 ? youtubeTrailers[0].url : '#'}
          age={film.ageRating ? film.ageRating : 0}
        />
        <VideoDescriptionHeader containerClassName={styles.videoDescriptionHeader} film={film} />
        <VideoDescriptionBody
          containerClassName={styles.videoDescriptionBody}
          film={film}
          trailer={youtubeTrailers.length > 0 ? youtubeTrailers[0].url : '#'}
          age={film.ageRating ? film.ageRating : 0}
        />
      </div>
      {film.similarMovies && film.similarMovies.length > 0 && (
        <Carousel
          carouselContainerClassName={styles.carousel}
          carouselChildrenClassName={styles.movieBadgeCarouselContent}
          title={`${t('sectionTitle.WithFilm')} «${lng === 'ru' ? film.name : film.enName ?? film.name}» ${t(
            'sectionTitle.watching',
          )}`}
          withButton
          scrollMultipleItems
        >
          {film.similarMovies?.map((movie) => (
            <div key={movie.id} className={styles.movieBadgeContainer}>
              <Link href={`/MoviePage/${movie.id}`}>
                <PosterCards src={movie.poster.url ?? ''} name={movie.name} />
              </Link>
            </div>
          ))}
        </Carousel>
      )}
      <div className={styles.innerContainer}>
        <ActorsCreators id={film.id} persons={film.persons} className={styles.actorsCreators} />
        <AdditionalMaterials className={styles.additionalMaterials} video={youtubeTrailers} />
        <BlockComments className={styles.comments} />
      </div>
      <AllDevicePoster
        name={film.name}
        enName={film.enName}
        poster={film.poster?.url}
        className={styles.allDevices}
      />
      <GenreBookmarks home genres={film.genres} page={film.name} className={styles.crumbs} />
    </div>
  );
}
