import React, { FC, HTMLAttributes } from 'react';
import styles from './onecommentheader.module.css';
import UserPhoto from 'shared/user/UserPhoto';
import classNames from 'classnames';
import { IOneComment } from 'shared/types/IOneComment';

interface IOneCommentHeader {
  comment: IOneComment;
  className?: string;
}

export const OneCommentHeader = ({ comment, className }: IOneCommentHeader) => {
  const name = comment.author.split(' ').slice(0, 1);
  const surName = comment.author.split(' ').slice(1);

  return (
    <div className={classNames(styles.head, className)}>
      <UserPhoto />
      <div className={styles.author}>
        <p className={styles.name}>{name}</p>
        <p className={styles.name}>{surName}</p>
      </div>
      <p className={styles.data}>{new Date(comment.date).toLocaleDateString()}</p>
    </div>
  );
};
