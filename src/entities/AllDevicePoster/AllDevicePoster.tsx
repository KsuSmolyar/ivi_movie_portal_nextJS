import React from 'react';
import styles from './alldeviceposter.module.css';
import classNames from 'classnames';
import tv from './tv-without-poster.png';
import ipad from './ipad-without-poster.png';
import { SectionTitle } from 'shared/ui/SectionTitle/SectionTitle';
import { ButtonOrLink } from 'shared/ui/ButtonOrLink/ButtonOrLink';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface IAllDevicePoster {
  poster?: string;
  name: string;
  enName: string | null;
  className?: string;
}

export const AllDevicePoster = ({ className, poster, name, enName }: IAllDevicePoster) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.offerЕoСonnect}>
        <SectionTitle>
          <p>
            {t('AllDevaicePoster.look')} «{lng === 'ru' ? name : enName ?? name}»{' '}
            {t('AllDevaicePoster.onAlldevices')}
          </p>
        </SectionTitle>
        <p className={styles.offerVariants}>{t('AllDevaicePoster.content')}</p>
        <ButtonOrLink className={styles.offerBtn}>{t('AllDevaicePoster.connectDevices')}</ButtonOrLink>
      </div>
      <div className={styles.posters}>
        {poster && <Image width={100} height={100} src={poster} alt='' className={styles.posterTv} />}
        <Image width={500} height={500} src={tv} alt='' className={styles.tv} />
        {poster && <Image width={100} height={100} src={poster} alt='' className={styles.posterIPad} />}
        <Image width={100} height={100} src={ipad} alt='' className={styles.IPad} />
      </div>
    </div>
  );
};
