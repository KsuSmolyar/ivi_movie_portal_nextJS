import React from 'react';
import styles from './promoSlide.module.css';
import ButtonOrLink from 'shared/ui/ButtonOrLink';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

interface IPromoSlide {
  title: string;
  picture: string;
  description: string;
  width: number;
  height: number;
  className?: string;
}

export const PromoSlide = ({ title, picture, description, width, height, className }: IPromoSlide) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Link className={styles.link} href='/CatalogPage' style={{ width: `${width}px` }}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.description}>{description}</div>
        </div>
      </Link>
      <Image src={picture} alt={picture} width={width} height={height} className={styles.pic} />

      <ButtonOrLink className={styles.btn} variant='primary'>
        <span>Смотреть по подписке</span>
      </ButtonOrLink>
    </div>
  );
};
