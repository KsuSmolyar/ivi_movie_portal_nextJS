import React, { PropsWithChildren, useState } from 'react';
import styles from './customselect.module.css';
import classNames from 'classnames';
import { nanoid } from '@reduxjs/toolkit';

interface ICustomSelectProps {
  placeholder: string;
  list?: string[];
  func?: (val: string) => void;
  className?: string;
}

export function CustomSelect({
  list,
  placeholder,
  func,
  className,
  children,
}: PropsWithChildren<ICustomSelectProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(placeholder);

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.head} onClick={() => setIsOpen(!isOpen)}>
        <input type='text' className={classNames(styles.inp)} readOnly value={value} />
        <span
          className={classNames(
            styles.arrow,
            isOpen ? 'icon-arrowUpSquare_16__0' : 'icon-arrowDownSquare_16__0',
          )}
        ></span>
      </div>
      {isOpen && (
        <div className={styles.dropdownList}>
          {list ? (
            <ul>
              {list.map((el) => {
                return (
                  <li
                    className={styles.dropdownItem}
                    onClick={() => {
                      setIsOpen(false);
                      setValue(el);
                      func && func(el);
                    }}
                    key={nanoid()}
                  >
                    {el}
                  </li>
                );
              })}
            </ul>
          ) : (
            children
          )}
        </div>
      )}
    </div>
  );
}
