import React from 'react';
import styles from './videoplayer.module.css';
import classNames from 'classnames';
import { ControlsVideoContent } from 'features/ControlsVideoContent';
import { TrailerPlayer } from 'widgets/TrailerPlayer/TrailerPlayer';

interface IVideoPlayer {
  trailer: string;
  age: number;
  className?: string;
}

export function VideoPlayer({ trailer, age, className }: IVideoPlayer) {
  return (
    <div className={classNames(styles.root, className)}>
      <TrailerPlayer src={trailer} />
      <ControlsVideoContent trailer={trailer} age={age} className={styles.list} />
    </div>
  );
}
