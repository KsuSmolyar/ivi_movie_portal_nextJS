import React, { useState } from 'react';
import styles from './controlsvideocontent.module.css';
import classNames from 'classnames';
import { useTranslation } from '../../i18n';
import { Modal } from 'shared/ui/Modal';
import { TrailerPlayer } from 'widgets/TrailerPlayer/TrailerPlayer';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';

interface IControlsVideoContent {
  trailer: string;
  age: number;
  className?: string;
}

export const ControlsVideoContent = ({ trailer, age, className }: IControlsVideoContent) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={classNames(styles.buttonContainer, className)}>
        <ButtonOrLink
          className={classNames(styles.trailerButton, 'icon-playOutline_20__0', styles.button)}
          variant='secondary'
          large
          onClick={() => setIsOpen(true)}
        >
          {t('Player.trailer')}
        </ButtonOrLink>
        <div className={styles.innerButtonContainer}>
          <ButtonOrLink
            className={classNames('icon-favoriteAdd_20__0', styles.button)}
            variant='secondary'
            large
          />

          <ButtonOrLink className={classNames('icon-share_20__0', styles.button)} variant='secondary' large />
        </div>
      </div>
      {isOpen && (
        <Modal>
          <TrailerPlayer
            className={styles.trailerPlayer}
            src={trailer}
            onClose={() => setIsOpen(false)}
            modal
          />
        </Modal>
      )}
    </>
  );
};
