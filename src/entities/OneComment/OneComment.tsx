import React, { useState } from 'react';
import styles from './onecomment.module.css';
import classNames from 'classnames';
import { IOneComment } from 'shared/types/IOneComment';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { OneCommentHeader } from 'widgets/OneCommentHeader';
import ButtonOrLink from 'shared/ui/ButtonOrLink';

interface ISingleComment {
  comment: IOneComment;
  className?: string;
}

export const OneComment = ({ className, comment }: ISingleComment) => {
  const { t } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <article className={classNames(styles.root, className)}>
        <OneCommentHeader comment={comment} />
        <p className={styles.commentContent}>{comment.review}</p>
        <div className={styles.commentFooter}>
          <ButtonOrLink
            large
            variant='third'
            className={classNames(styles.commentBtn, 'icon-message_20__0')}
            onClick={() => setModalIsOpen(true)}
          >
            <span>{t('sectionTitle.AddComment')}</span>
          </ButtonOrLink>
          <ButtonOrLink
            large
            variant='third'
            className={classNames(styles.commentBtn, styles.like, 'icon-thumbUp_16__0')}
          >
            <span>{t('sectionTitle.Healthy')}</span>
            <span>20</span>
          </ButtonOrLink>
          <ButtonOrLink
            large
            variant='third'
            className={classNames(styles.commentBtn, styles.like, 'icon-thumbDown_16__0')}
          >
            <span>{t('sectionTitle.No')}</span>
            <span>5</span>
          </ButtonOrLink>
        </div>
      </article>
      {modalIsOpen && (
        <Modal>
          <div className={classNames(styles.modal, 'container')}>
            <OneCommentHeader comment={comment} className={styles.modalHead} />
            <p className={classNames(styles.commentContent, styles.modalComment)}>{comment.review}</p>
            <textarea className={styles.myComment} placeholder='Оставте ваш коментарий' />
            <div className={styles.modalBlockBtn}>
              <ButtonOrLink large variant='third' className={styles.modalBtn}>
                Комментировать
              </ButtonOrLink>
              <ButtonOrLink
                large
                variant='third'
                onClick={() => setModalIsOpen(false)}
                className={styles.modalBtn}
              >
                Закрыть
              </ButtonOrLink>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
