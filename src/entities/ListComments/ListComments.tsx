import React from 'react';
import { useAppSelector } from 'app/store/hooks';
import styles from './listcomments.module.css';
import { Loader } from 'shared/ui/Loader';
import { OneComment } from 'entities/OneComment/OneComment';
import { nanoid } from '@reduxjs/toolkit';
import { Carousel } from 'shared/ui/Carousel';

interface IListComments {
  all?: boolean;
}

export const ListComments = ({ all = false }: IListComments) => {
  const { pending: commentsPending, comments } = useAppSelector((state) => state.filmComents);

  if (commentsPending) {
    return (
      <div className={styles.loaderContainer}>
        <Loader className={styles.loader} />
      </div>
    );
  }

  if (comments?.total === 0) return <p className={styles.message}>К данному фильму, пока нет комментариев</p>;

  return (
    <>
      <ul className={styles.desktop}>
        {comments.docs.map((el) => {
          return (
            <li className={styles.ItemComments} key={nanoid()}>
              <OneComment comment={el} />
            </li>
          );
        })}
      </ul>
      <div className={styles.mobile}>
        <Carousel withButton scrollMultipleItems carouselContainerClassName={styles.carouselContainer}>
          {comments.docs.map((el) => (
            <div className={styles.commentContainer} key={nanoid()}>
              <OneComment comment={el} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
