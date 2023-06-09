import React from 'react';
import styles from './buttonswithpadarkas.module.css';
import classNames from 'classnames';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import { SvgIcon } from 'shared/ui/SvgIcon';
import { useTranslation } from 'react-i18next';

interface IButtonsWithPadarkas {
  className?: string;
}

export function ButtonsWithPadarkas({ className }: IButtonsWithPadarkas) {
  const { t } = useTranslation();

  return (
    <section className={classNames(styles.root, className)}>
      <ButtonOrLink className={classNames(styles.btnGrad, styles.btn)} variant='secondary'>
        <SvgIcon type={'winamp'} />
        <span className={styles.text}>{t('ButtonsWithPadarkas.subscription')}</span>
      </ButtonOrLink>
      <ButtonOrLink className={styles.btn} variant='secondary'>
        <SvgIcon type={'padarka'} />
        <span className={styles.text}>{t('ButtonsWithPadarkas.certificate')}</span>
      </ButtonOrLink>
    </section>
  );
}
