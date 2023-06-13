import React from 'react';
import styles from './back.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useTranslation } from 'i18n';

interface IBack {
  className?: string;
}
export const Back = ({ className }: IBack) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <button
      className={classNames(styles.btn, 'icon-arrowLeft_8x20__0', className)}
      onClick={() => router.back()}
    >
      {t('Back')}
    </button>
  );
};
